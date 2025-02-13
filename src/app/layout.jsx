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
  title: "Growth Grid ",
  description: "Growth Grid | Revenue Growth Engineers Powering business transformation through CRO expertise, AI automation and enterprise tech solutions",
  openGraph: {
    title: "Growth Grid ",
    description: "Growth Grid | Revenue Growth Engineers Powering business transformation through CRO expertise, AI automation and enterprise tech solutions",
    url: "https://growthgrid.in",
    siteName: "Growth Grid",
    images: [
      {
        url: "https://growthgrid.in/growth_grid_logo.jpg", // Use a properly formatted image
        width: 1200, // Standard size for WhatsApp preview
        height: 630, // Standard height to avoid cropping
        alt: "Growth Grid AI Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Grid ",
    description: "Growth Grid | Revenue Growth Engineers Powering business transformation through CRO expertise, AI automation and enterprise tech solutions",
    images: ["https://growthgrid.in/growth_grid_logo.jpg"], // Full absolute URL
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
