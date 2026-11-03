import "./globals.css";
import { Header, Footer } from "@/components/chrome";
import { MobileBar, PwaRegister } from "@/components/mobile";

export const metadata = {
  title: { default: "Aicon Family Clinic | Houston walk-in and virtual care", template: "%s | Aicon Family Clinic" },
  description: "Walk-in family care in Houston, and self-pay video visits across eight states.",
  robots: { index: false, follow: false },
  applicationName: "Aicon Clinic",
  appleWebApp: { capable: true, title: "Aicon Clinic", statusBarStyle: "black-translucent" },
  formatDetection: { telephone: true },
};

export const viewport = {
  themeColor: "#0e2a20",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Manrope:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <PwaRegister />
      </body>
    </html>
  );
}
