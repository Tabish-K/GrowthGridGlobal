import { Afacad, Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-afacad",
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: "Growth Grid Global",
  description:
    "Growth Grid | Revenue Growth Engineers Powering business transformation through CRO expertise, AI automation and enterprise tech solutions",
  openGraph: {
    title: "Growth Grid",
    description:
      "Growth Grid | Revenue Growth Engineers Powering business transformation through CRO expertise, AI automation and enterprise tech solutions",
    url: "https://growthgrid.in",
    siteName: "Growth Grid",
    images: [
      {
        url: "https://growthgrid.in/growth_grid_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Growth Grid AI Automation",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Grid",
    description:
      "Growth Grid | Revenue Growth Engineers Powering business transformation through CRO expertise, AI automation and enterprise tech solutions",
    images: ["https://growthgrid.in/growth_grid_logo.jpg"],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} ${afacad.variable}`}>
      <head>
        <link rel="icon" href="/webtoplogo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/webtoplogo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/webtoplogo.png" />
      </head>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
