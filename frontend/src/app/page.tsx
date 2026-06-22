"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        Resume Builder
      </h1>

      <div className="flex flex-col gap-4 max-w-md">

        <input
          type="text"
          placeholder="Enter Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Enter Skills"
          className="border p-2 rounded"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">
          Preview
        </h2>

        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Skills: {skills}</p>
      </div>
    </main>
  );
}