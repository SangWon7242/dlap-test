import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나만의 코딩 명함",
  description: "나만의 코딩 명함",
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
