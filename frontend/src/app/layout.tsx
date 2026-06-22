import "./globals.css";

export const metadata = {
  title: "Portfolio Website Automation Tool",
  description: "Resume and Portfolio Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}