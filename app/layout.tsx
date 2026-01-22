import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crochet.ai - AI-Powered Crochet Planning",
  description: "Generate original patterns, plan projects and track progress with AI-guided tutorials for all skill levels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
