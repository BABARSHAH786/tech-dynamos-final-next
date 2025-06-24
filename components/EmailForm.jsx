"use client";
import { useState } from "react";

export default function EmailForm() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setStatus("✅ Email sent successfully!");
    } catch (error) {
      setStatus("❌ Error: " + (error.message || "Unknown error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-bold">Contact Tech Dynamos</h2>
      <input
        type="text"
        placeholder="Your name"
        className="w-full p-2 rounded bg-gray-700 text-white"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email"
        className="w-full p-2 rounded bg-gray-700 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Your message"
        className="w-full p-2 rounded bg-gray-700 text-white"
        rows={4}
        value={message}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Email"}
      </button>
      {status && <p className="text-sm mt-2">{status}</p>}
    </div>
  );
}
