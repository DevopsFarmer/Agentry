import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const testConnection = async () => {
  console.log('Testing MongoDB connection...');
  console.log('Using connection string:', MONGODB_URI);

  try {
    const client = new MongoClient(MONGODB_URI, {
      serverApi: {
        version: 1
      },
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await client.connect();
    console.log('Connected to MongoDB!');

    // Try to access the database
    const db = client.db('contacts');
    console.log('Accessing database:', db.databaseName);

    // Try a simple ping
    await db.command({ ping: 1 });
    console.log('MongoDB ping successful!');

    // Try listing collections
    const collections = await db.listCollections().toArray();
    console.log('Collections in database:', collections);

    console.log('Connection test successful!');
  } catch (error) {
    console.error('MongoDB connection test failed:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      codeName: error.codeName
    });
  } finally {
    await client.close();
  }
}

testConnection();
