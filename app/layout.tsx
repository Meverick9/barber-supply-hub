import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: "Barber Supply Hub",
  description: "Expert picks and comparisons of pro barber tools.",
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
            <span className="muted">Affiliate disclosure: we may earn commissions from qualifying purchases.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
