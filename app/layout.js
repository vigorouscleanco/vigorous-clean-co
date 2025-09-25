// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Cleaning in LA & OC",
  description:
    "Flat-rate residential, office, and turnover cleaning with eco- and pet-safe products. Book online in minutes.",
  metadataBase: new URL("https://vigorous-clean-co.vercel.app"),
  openGraph: {
    title: "Vigorous Clean Co.",
    description:
      "Flat-rate residential, office, and turnover cleaning with eco- and pet-safe products.",
    url: "https://vigorous-clean-co.vercel.app",
    siteName: "Vigorous Clean Co.",
    images: [
      {
        url: "/og-cover.png", // optional – place a 1200x630 image in /public if you want
        width: 1200,
        height: 630,
        alt: "Vigorous Clean Co.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

function PromoBar() {
  return (
    <div className="bg-emerald-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-2 text-sm flex flex-wrap items-center justify-center gap-2 text-center">
        <span role="img" aria-label="party">🎉</span>
        <span>New clients get <strong>10% off</strong> with code</span>
        <span className="rounded bg-white/10 px-2 py-0.5 font-semibold tracking-wide">
          VIGOR10
        </span>
        <span className="opacity-90">
          — discount applied at checkout for first-time clients.
        </span>
      </div>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* ✅ Promo bar appears once, site-wide */}
        <PromoBar />

        {/* ✅ Single global Navbar across all pages */}
        <Navbar />

        {/* Page content */}
        <div className="flex-1">{children}</div>

        {/* ✅ Global footer */}
        <Footer />
      </body>
    </html>
  );
}

