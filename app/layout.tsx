import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barber Supply Hub",
  description: "Best barber tools and equipment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = "G-YVYZFGSHX2";

  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
      </head>
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a" }}>
        {/* Header */}
        <header style={{ background: "#0a0a0a", borderBottom: "1px solid #333", padding: "20px 40px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <Link href="/" style={{ color: "#facc15", fontSize: "24px", fontWeight: "700", textDecoration: "none" }}>
              Barber Supply Hub
            </Link>

            <nav style={{ display: "flex", gap: "25px", flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/picks/best-clippers" style={{ color: "white", textDecoration: "none", opacity: 0.8, fontSize: "14px" }}>
                Clippers
              </Link>
              <Link href="/picks/best-trimmers" style={{ color: "white", textDecoration: "none", opacity: 0.8, fontSize: "14px" }}>
                Trimmers
              </Link>
              <Link href="/picks/starter-kit" style={{ color: "white", textDecoration: "none", opacity: 0.8, fontSize: "14px" }}>
                Starter Kit
              </Link>
              <Link href="/compare" style={{ color: "#facc15", textDecoration: "none", fontSize: "14px", fontWeight: "600" }}>
                Compare
              </Link>
              <Link href="/barbers" style={{ color: "white", textDecoration: "none", opacity: 0.8, fontSize: "14px" }}>
                Barbers
              </Link>
            </nav>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer style={{ background: "#0a0a0a", borderTop: "1px solid #333", padding: "40px 20px", textAlign: "center" }}>
          <p style={{ opacity: 0.5, fontSize: "14px" }}>
            © 2025 Barber Supply Hub. As an Amazon Associate we earn from qualifying purchases.
          </p>
        </footer>
      </body>
    </html>
  );
}