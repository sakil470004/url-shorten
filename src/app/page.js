"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortenId, setShortenId] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();
    setLoading(false);

    if (response.ok) {
      setShortUrl(data.shortUrl);
      setShortenId(data.shortId);
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.success("Shortened URL copied to clipboard!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">URL Shortener</h1>
        <p className="text-lg mt-2">
          Shorten your long URLs into simple, shareable links.
        </p>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        >
          <input
            type="url"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            disabled={loading}
          >
            {loading ? "Shortening..." : "Shorten"}
          </button>
        </form>

        {shortUrl && (
          <div className="mt-6 text-center">
            <p className="text-lg font-medium">Shortened URL:</p>
            <div className="flex items-center justify-center">
              <a
                href={shortenId}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-bold hover:underline"
              >
                {shortUrl}
              </a>
              <button
                onClick={handleCopy}
                className="ml-2 p-2 text-2xl bg-gray-200 text-white rounded-lg hover:bg-green-600 transition"
                aria-label="Copy to clipboard"
              >
                📋
              </button>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2025 URL Shortener. All rights reserved.</p>
      </footer>
    </div>
  );
}
