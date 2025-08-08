import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import "./coming-soon.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Learning - Innovative Technology Education Platform",
  description: "Discover cutting-edge technology education in AR/VR, Robotics, Drone Engineering, and Startup Development. Join thousands of learners building the future.",
  keywords: ["technology education", "programming", "next.js", "learning platform", "innovation"],
  openGraph: {
    title: "Next Learning - Innovative Technology Education Platform",
    description: "Discover cutting-edge technology education in AR/VR, Robotics, Drone Engineering, and Startup Development.",
    type: "website",
    siteName: "Next Learning",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Learning - Innovative Technology Education Platform",
    description: "Discover cutting-edge technology education in AR/VR, Robotics, Drone Engineering, and Startup Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Coming Soon Banner for all pages */}
         <div className="coming-soon-message">
      <p>
        SkipperX is cooking something the internet isn&apos;t ready for.
      </p>
      <h3 className="coming-soon-subheading">We&apos;re not late, We&apos;re just loading greatness.</h3>
    </div>
        {/*
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        */}
      </body>
    </html>
  );
}
