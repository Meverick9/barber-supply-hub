import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://barbersupplyhub.com"),

  title: {
    default: "Barber Supply Hub | Best Professional Barber Tools 2025",
    template: "%s | Barber Supply Hub",
  },

  description:
    "Compare the best professional barber clippers, trimmers, and starter kits. Trusted by 120k+ barbers worldwide. Reviews, specs, and side-by-side comparisons.",

  keywords: [
    "best barber clippers",
    "professional hair clippers",
    "best hair trimmers",
    "barber tools 2025",
    "clipper comparison",
  ],

  openGraph: {
    title: "Best Professional Barber Tools 2025",
    description:
      "Compare top-rated barber clippers and trimmers. Expert reviews and side-by-side specs.",
    url: "https://barbersupplyhub.com",
    siteName: "Barber Supply Hub",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // добавь файл позже в public
        width: 1200,
        height: 630,
        alt: "Barber Supply Hub",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Professional Barber Tools 2025",
    description:
      "Compare top-rated barber clippers and trimmers with expert reviews.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Header />
        {children}
      </body>
    </html>
  );
}
