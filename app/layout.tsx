import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Binsa | AI-Powered Learning Platform",
  description: "Learn by taking exams, not by memorizing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubikSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
