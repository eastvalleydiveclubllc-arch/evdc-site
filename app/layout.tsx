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
  // Netlify sets URL to the project's primary domain at build time, so this
  // corrects itself the moment the real domain is bought and set as primary —
  // no code change needed at launch.
  metadataBase: new URL(
    process.env.URL ?? "https://eastvalleydiveclub.netlify.app",
  ),
  title: "East Valley Dive Club — Mesa, Arizona",
  description:
    "Arizona's top springboard and platform diving club. Beginner lessons through National qualifiers. Mesa, AZ.",
  openGraph: {
    title: "East Valley Dive Club — Mesa, Arizona",
    description:
      "Arizona's top springboard and platform diving club. Built for the ones who go higher.",
    type: "website",
    images: ["/images/springboard.jpg"],
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
