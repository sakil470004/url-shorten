"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/shorten", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (response.ok) {
      setShortUrl(data.shortUrl);
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <>
      <div>
        <h1>URL Shortener</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="url"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <button type="submit">Shorten</button>
        </form>
        {shortUrl && (
          <p>
            Shortened URL: <a href={shortUrl}>{shortUrl}</a>
          </p>
        )}
      </div>
    </>
  );
}
