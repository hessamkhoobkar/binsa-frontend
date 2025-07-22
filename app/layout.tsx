import React from "react";
import type { Metadata } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "@/context/AuthContext";

import { Rubik } from "next/font/google";
import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
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
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className={`${rubikSans.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>{children}</AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
