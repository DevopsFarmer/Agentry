import { MongoClient } from 'mongodb';

const connectToMongoDB = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
      retryWrites: true,
      w: 'majority'
    });
    await client.connect();
    return client.db('contacts');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse request body
    const { name, email, company, revenue, message } = await req.json();

    // Connect to MongoDB
    const db = await connectToMongoDB();
    const contacts = db.collection('contacts');

    // Insert contact data
    const result = await contacts.insertOne({
      name,
      email,
      company,
      revenue,
      message,
      timestamp: new Date()
    });

    // Return success response
    return res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      id: result.insertedId
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: error.message });
  }
}
