"use client";
import { useState } from "react";

export default function ChatPage() {
  const [hash, setHash] = useState("");

  const generateHash = async () => {
    const userId = "123e4567-e89b-12d3-a456-426614174000"; // Example User ID
    const response = await fetch("/api/generate-hash", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await response.json();
    if (data.hash) {
      setHash(data.hash);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-xl font-bold">Chatbase Verification</h1>
      <button
        onClick={generateHash}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Generate Hash
      </button>
      {hash && <p className="mt-4">Hash: {hash}</p>}
    </div>
  );
}
