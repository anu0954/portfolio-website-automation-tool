"use client";

import { useState } from "react";
import ResumeForm from "../components/ResumeForm";
import ResumePreview from "../components/ResumePreview";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState("");

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        Resume Builder
      </h1>

      <ResumeForm
        name={name}
        email={email}
        skills={skills}
        setName={setName}
        setEmail={setEmail}
        setSkills={setSkills}
      />

      <ResumePreview
        name={name}
        email={email}
        skills={skills}
      />
    </main>
  );
}