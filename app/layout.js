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
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-900">
        {/* Promo bar – ONCE */}
        <div className="w-full bg-emerald-700 text-white">
          <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm">
            🎉 New clients get <strong>10% off</strong> with code{" "}
            <span className="rounded-md bg-white/15 px-2 py-0.5 font-semibold tracking-wide">VIGOR10</span> — applied at checkout.
          </div>
        </div>

        <Navbar />

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t bg-white/90">
          <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-3">
              <img src="/Vigorous_Clean_Co_TransparentLogo.png" alt="Vigorous Clean Co." className="h-10 w-auto" />
              <p className="text-sm text-slate-600">
                Eco-friendly cleaning across Los Angeles & Orange County with transparent flat-rate pricing.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:text-emerald-700" href="/services">Services</a></li>
                <li><a className="hover:text-emerald-700" href="/pricing">Pricing</a></li>
                <li><a className="hover:text-emerald-700" href="/about">About Us</a></li>
                <li><a className="hover:text-emerald-700" href="/account">Login</a></li>
              </ul>
            </div>

            {/* Hours (Mon–Sun 8–8) */}
            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Service Hours</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>Open <strong>Monday – Sunday</strong></li>
                <li><strong>8:00 AM – 8:00 PM</strong></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="mb-3 font-semibold text-slate-900">Connect</h4>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/vigorouss.co" target="_blank" rel="noreferrer"
                   className="rounded-full border border-slate-200 p-2 hover:bg-slate-100" aria-label="Instagram" title="Instagram">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6-1a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@vigorouss.co" target="_blank" rel="noreferrer"
                   className="rounded-full border border-slate-200 p-2 hover:bg-slate-100" aria-label="TikTok" title="TikTok">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12.75 2h3.06a6.2 6.2 0 0 0 3.11 3.1v3.06a9.2 9.2 0 0 1-3.11-.85v6.18a6.25 6.25 0 1 1-6.25-6.25c.07 0 .14 0 .21.01v3.06a3.19 3.19 0 1 0 3.19 3.19V2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer bar */}
          <div className="border-t">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-slate-600">
              <p>
                © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.
                <br className="sm:hidden" />
                <span className="sm:ml-2">
                  Disclaimer: While our cleaners are trained professionals and vetted through strict screening, Vigorous Clean Co. is not
                  liable for loss of personal items. Please secure valuables prior to service.
                </span>
              </p>
              <img src="/Vigorous_Clean_Co_TransparentLogo.png" alt="Logo" className="h-8 w-8 opacity-80" />
            </div>
          </div>

          {/* Floating Call button (mobile) */}
          <a
            href="tel:+14242605986"
            className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 md:hidden"
            aria-label="Call Vigorous Clean Co."
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.24c1.2.4 2.4.6 3.6.6a1 1 0 0 1 1 1v3.7a1 1 0 0 1-1 1A17.6 17.6 0 0 1 3 6a1 1 0 0 1 1-1h3.7a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.6a1 1 0 0 1-.24 1.1L6.6 10.8z"/></svg>
          </a>

          {/* AI chat widget hook — paste your provider snippet inside this div later */}
          <div id="ai-chat-widget-root" />
        </footer>
      </body>
    </html>
  );
}

