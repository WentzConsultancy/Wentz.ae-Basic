import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wentz - Cybersecurity Automation",
  description: "Transforming Principal-Led Risk Expertise into Scalable Automation Revenue",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
