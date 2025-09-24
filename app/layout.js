// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Cleaning in LA & OC",
  description:
    "Transparent flat-rate residential & office cleaning with eco & pet-safe products. Online booking in minutes.",
  openGraph: {
    title: "Vigorous Clean Co.",
    description:
      "Transparent flat-rate residential & office cleaning with eco & pet-safe products.",
    url: "https://vigorous-clean-co.vercel.app",
    siteName: "Vigorous Clean Co.",
    images: [{ url: "/og-cover.png" }],
  },
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased">
        {/* Promo banner — ONCE */}
        <div className="sticky top-0 z-40 bg-emerald-700 text-white">
          <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
            <span className="mr-2">🎉</span>
            New clients get <b>10% off</b> with code
            <span className="mx-1 rounded bg-white/15 px-2 py-0.5 font-semibold tracking-wide">
              VIGOR10
            </span>
            — discount applied at checkout for first-time clients.
          </div>
        </div>

        {/* Single Navbar */}
        <Navbar />

        <main>{children}</main>

        {/* Footer with quick links + socials */}
        <footer className="mt-20 border-t bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <div className="grid gap-10 md:grid-cols-4">
              {/* Brand */}
              <div className="space-y-3">
                <img
                  src="/Vigorous_Clean_Co_TransparentLogo.png"
                  alt="Vigorous Clean Co. logo"
                  className="h-10 w-auto"
                />
                <p className="text-sm text-slate-600">
                  Eco-friendly cleaning across Los Angeles & Orange County with
                  transparent flat-rate pricing.
                </p>
              </div>

              {/* Explore */}
              <div>
                <h4 className="mb-3 font-semibold text-slate-900">Explore</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a className="hover:text-emerald-700" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-emerald-700" href="/pricing">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-emerald-700" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-emerald-700" href="#reviews">
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-emerald-700" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Hours */}
              <div>
                <h4 className="mb-3 font-semibold text-slate-900">Hours</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>Mon–Fri: 8:00 AM – 6:00 PM</li>
                  <li>Sat: PM (limited)</li>
                  <li>Sun: Closed</li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <h4 className="mb-3 font-semibold text-slate-900">Connect</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/vigorouss.co"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 p-2 hover:bg-slate-100"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2zM18 6.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@vigorouss.co"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-slate-200 p-2 hover:bg-slate-100"
                    aria-label="TikTok"
                    title="TikTok"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <path d="M12.75 2h3.06a6.2 6.2 0 0 0 3.11 3.1v3.06a9.2 9.2 0 0 1-3.11-.85v6.18a6.25 6.25 0 1 1-6.25-6.25c.07 0 .14 0 .21.01v3.06a3.19 3.19 0 1 0 3.19 3.19V2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t pt-6 text-sm text-slate-600">
              © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

