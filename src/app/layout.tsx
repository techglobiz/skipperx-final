import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import HeaderSelector from "@/components/HeaderSelector";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${playfairDisplay.variable} ${poppins.variable} antialiased`}>
        <HeaderSelector />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
