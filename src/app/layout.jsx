`"use client"`

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Growth Grid Global",
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
      <head>
        <link rel="icon" href="/webtoplogo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/webtoplogo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/webtoplogo.png" />
      </head>
      <body
        className={`${outfit.variable} antialiased font-outfit`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
