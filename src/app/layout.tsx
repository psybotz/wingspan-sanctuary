// src/app/layout.tsx

import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-lora',
});
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  title: "Wingspan Sanctuary",
  description: "Explore the butterfly havens of Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${sourceSans.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}