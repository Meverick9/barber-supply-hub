import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LJJL1MFPLD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LJJL1MFPLD');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
