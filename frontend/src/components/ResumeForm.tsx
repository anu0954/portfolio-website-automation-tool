type ResumeFormProps = {
  name: string;
  email: string;
  skills: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setSkills: (value: string) => void;
};

export default function ResumeForm({
  name,
  email,
  skills,
  setName,
  setEmail,
  setSkills,
}: ResumeFormProps) {
  return (
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
  );
}