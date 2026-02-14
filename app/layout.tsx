import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://barber-supply-hub.vercel.app"),
  title: {
    default: "Barber Supply Hub — Best Barber Tools Chosen By Pros",
    template: "%s | Barber Supply Hub",
  },
  description:
    "Not a store. A recommendation engine: quick picks, honest comparisons, and barber-first guidance for professional barber tools.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Barber Supply Hub",
    title: "Barber Supply Hub — Best Barber Tools Chosen By Pros",
    description: "Expert picks and comparisons of pro barber tools.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Barber Supply Hub - Professional Barber Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barber Supply Hub — Best Barber Tools Chosen By Pros",
    description: "Expert picks and comparisons of pro barber tools.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <header className="siteHeader">
          <div className="container headerRow">
            <a className="logo" href="/">Barber Supply Hub</a>
            <nav className="nav">
              <a href="/picks/best-clippers">Clippers</a>
              <a href="/picks/best-trimmers">Trimmers</a>
              <a href="/picks/starter-kit">Starter Kit</a>
              <a href="/compare">Compare</a>
              <a href="/barbers">Barbers</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container footerRow">
            <span>&copy; {new Date().getFullYear()} Barber Supply Hub</span>
            <span className="muted">
              Affiliate disclosure: we may earn commissions from qualifying purchases.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}