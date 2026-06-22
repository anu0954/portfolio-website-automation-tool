type ResumePreviewProps = {
  name: string;
  email: string;
  skills: string;
};

export default function ResumePreview({
  name,
  email,
  skills,
}: ResumePreviewProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">
        Preview
      </h2>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Skills: {skills}</p>
    </div>
  );
}