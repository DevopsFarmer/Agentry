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

export async function POST(event) {
  try {
    // Parse request body
    const { name, email, company, revenue, message } = await event.request.json();

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
    return new Response(JSON.stringify({
      success: true,
      message: 'Form submitted successfully',
      id: result.insertedId
    }), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
