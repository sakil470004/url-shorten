// app/[shortId]/page.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import { redirect } from 'next/navigation';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export async function generateMetadata({ params }) {
    const { shortId } = await params;

    try {
        const db = client.db('urlShortener');
        const collection = db.collection('urls');

        const record = await collection.findOne({ shortId });

        if (record) {
            return {
                title: 'Redirecting...',
            };
        } else {
            return {
                title: 'No page found',
            };
        }
    } catch (error) {
        console.error(error);
        return {
            title: 'Error',
        };
    }
}

export default async function RedirectPage({ params: rawParams }) {
    const { shortId } = await rawParams;
    console.log(shortId)
    let record
    try {
        const db = client.db('urlShortener');
        const collection = db.collection('urls');

         record = await collection.findOne({ shortId });

    } catch (error) {
        console.error(error);
        return <h1>No page found</h1>;
    } finally {
        if (record) {
            redirect(record.url);
        } else {
            return <h1>No page found</h1>; // ✅ Show fallback if not found
        }
    }
}
