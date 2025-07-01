import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "E-Commerce website",
  description: "Your favorite online store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white min-h-screen text-gray-900 w-full">
        <Navbar />
        <main className="w-full p-4 bg-white">{children}</main>
      </body>
    </html>
  );
}
