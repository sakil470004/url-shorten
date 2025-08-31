import { MongoClient } from 'mongodb';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(req) {
  try {
    const { url } = await req.json();

    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
    }

    const db = client.db('urlShortener');
    const collection = db.collection('urls');

    const shortId = nanoid(6);
    await collection.insertOne({ shortId, url });

    return new Response(JSON.stringify({ shortUrl: `${process.env.BASE_URL}/${shortId}` }), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
