// app/layout.js
export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Cleaning in LA & OC",
  description:
    "Transparent flat-rate residential & office cleaning. Eco & pet-safe products. Book online in minutes.",
  metadataBase: new URL("https://vigorous-clean-co.vercel.app"),
  openGraph: {
    title: "Vigorous Clean Co.",
    description:
      "Transparent flat-rate residential & office cleaning in Los Angeles & Orange County.",
    url: "https://vigorous-clean-co.vercel.app",
    siteName: "Vigorous Clean Co.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630 }],
  },
  icons: [{ rel: "icon", url: "/logo.png" }],
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900">
        {/* Promo bar – appears ONCE at the very top */}
        <div className="w-full bg-emerald-700 text-white">
          <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
            <span className="mr-2">🎉</span>
            New clients get <strong>10% off</strong> with code{" "}
            <span className="rounded-md bg-white/15 px-2 py-0.5 font-semibold tracking-wide">
              VIGOR10
            </span>{" "}
            — applied at checkout for first-time clients.
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}

