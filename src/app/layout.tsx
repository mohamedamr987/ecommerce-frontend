import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "E-Shop",
  description: "Your favorite online store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen text-gray-900">
        <Navbar />
        <main className="container mx-auto p-4 bg-white">{children}</main>
      </body>
    </html>
  );
}
