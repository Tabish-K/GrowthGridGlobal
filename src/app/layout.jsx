`"use client"`

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MoreAbout from "@/components/MoreAbout";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Growth Grid",
  description: "Growth-Grid-Ai",
  openGraph: {
    title: "Growth Grid",
    description: "Growth-Grid-Ai",
    url: "https://growthgrid.in",
    siteName: "Growth Grid",
    images: [
      {
        url: "https://growthgrid.in/logo.jpg", // Full absolute URL
        width: 1200,
        height: 630,
        alt: "Growth Grid Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Grid",
    description: "Growth-Grid-Ai",
    images: ["https://growthgrid.in/logo.jpg"], // Full absolute URL
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <MoreAbout/>
        <Footer/>
      </body>
    </html>
  );
}
