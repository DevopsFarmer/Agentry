import express from 'express';
import cors from 'cors';
import path from 'path';
import { MongoClient, ServerApiVersion } from 'mongodb';

const app = express();
const port = 3003;

// Middleware
app.use(cors());
app.use(express.json());
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'dist')));

// MongoDB connection
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

// Initialize MongoDB client
let db;

const connectToMongoDB = async () => {
  try {
    console.log('Attempting MongoDB connection...');
    console.log('Using connection string:', MONGODB_URI);

    // Create client with correct options
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      retryWrites: true,
      w: 'majority'
    });

    await client.connect();
    db = client.db('contacts');
    console.log('Successfully connected to MongoDB');
    console.log('Using database: contacts');
    
    // Test the connection
    try {
      await db.command({ ping: 1 });
      console.log('MongoDB ping successful');
    } catch (pingError) {
      console.error('MongoDB ping failed:', pingError);
      throw pingError;
    }
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    if (error.code === 'ENOTFOUND') {
      console.error('DNS resolution failed. Please check your MongoDB Atlas cluster URL.');
      console.error('Current cluster URL:', MONGODB_CLUSTER);
    } else if (error.code === 'ECONNREFUSED') {
      console.error('Connection refused. Please check your MongoDB Atlas cluster is running and accessible.');
    }
    return false;
  }
};

// Try to connect when server starts
connectToMongoDB();

// Reconnect periodically in case of connection loss
setInterval(async () => {
  if (!db) {
    console.log('Attempting to reconnect to MongoDB...');
    await connectToMongoDB();
  }
}, 30000); // Try to reconnect every 30 seconds

// API Routes
app.post('/api/submit-to-mongodb', async (req, res) => {
  try {
    if (!db) {
      throw new Error('MongoDB connection not established');
    }

    const contacts = db.collection('contacts', { writeConcern: { w: 'majority' } });
    const { name, email, company, revenue, message } = req.body;

    const insertResult = await contacts.insertOne({
      name,
      email,
      company,
      revenue,
      message,
      timestamp: new Date()
    });

    res.json({ 
      success: true,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('MongoDB Error:', error);
    res.status(500).json({ 
      error: error.message,
      details: {
        code: error.code,
        codeName: error.codeName
      }
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Keep the server running
process.on('unhandledRejection', (error) => {
  console.error('Unhandled rejection:', error);
});
