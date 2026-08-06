import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eastvalleydiveclub.vercel.app"),
  title: "East Valley Dive Club — Mesa, Arizona",
  description:
    "Arizona's top springboard and platform diving club. Beginner lessons through National qualifiers. Mesa, AZ.",
  openGraph: {
    title: "East Valley Dive Club — Mesa, Arizona",
    description:
      "Arizona's top springboard and platform diving club. Built for the ones who go higher.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-ink text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
