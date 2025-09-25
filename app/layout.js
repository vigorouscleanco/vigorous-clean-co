// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Cleaning in LA & OC",
  description:
    "Transparent flat-rate pricing. Eco & pet-safe products. Book online in minutes.",
  openGraph: {
    title: "Vigorous Clean Co.",
    description:
      "Eco-friendly residential & office cleaning with transparent flat-rate pricing.",
    url: "https://vigorous-clean-co.vercel.app",
    siteName: "Vigorous Clean Co.",
  },
  icons: { icon: "/logo.png" },
};

const NavLink = ({ href, children }) => (
  <a href={href} className="px-3 py-2 rounded-lg hover:bg-white/10">
    {children}
  </a>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-800 antialiased">
        {/* Promo banner – appears ONCE here */}
        <div className="w-full bg-emerald-700 text-white text-sm">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-2">
            <span aria-hidden>🎉</span>
            <span>
              New clients get <strong>10% off</strong> with code{" "}
              <strong>VIGOR10</strong> — applied at checkout for first-time
              clients.
            </span>
          </div>
        </div>

        {/* Navbar */}
        <header className="w-full bg-emerald-700 text-white sticky top-0 z-40 shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/Vigorous_Clean_Co_TransparentLogo.png"
                alt="Vigorous Clean Co."
                className="h-8 w-8 rounded-full bg-white/90 p-1"
              />
              <span className="text-lg font-semibold">Vigorous Clean Co.</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/pricing">Pricing</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/account">Login</NavLink>
            </div>

            {/* one Book Now button here; removed from hero */}
            <a
              href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-4 py-2 rounded-xl shadow hover:shadow-md"
            >
              {/* calendar icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              Book Now
            </a>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="mt-16 border-t bg-white">
          <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <img
                src="/Vigorous_Clean_Co_TransparentLogo.png"
                alt="Vigorous Clean Co."
                className="h-10 w-10 rounded-full bg-emerald-700/10 p-1"
              />
              <p className="text-sm text-slate-600">
                Eco-friendly cleaning with transparent flat-rate pricing. Los
                Angeles & Orange County.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:underline" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/about">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Hours</h4>
              <p className="text-sm text-slate-600">
                Open <strong>7 days</strong> • <strong>8:00 AM – 8:00 PM</strong>
              </p>
              <p className="text-sm text-slate-600 mt-2">
                Service area: LA County & Orange County
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com/vigorouss.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200"
                  aria-label="Instagram"
                >
                  {/* IG icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com/@vigorouss.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200"
                  aria-label="TikTok"
                >
                  {/* TikTok icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M13 3c1 2 3 3 5 3v3c-2 0-4-1-5-2v7a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-4">
                Disclaimer: While we handle your property with care, Vigorous
                Clean Co. is not liable for pre-existing damage or loss of items
                not secured/declared before service. All cleaners are
                professionally vetted and screened.
              </p>
            </div>
          </div>

          <div className="border-t">
            <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-slate-500 flex items-center justify-between">
              <span>© {new Date().getFullYear()} Vigorous Clean Co.</span>
              <img
                src="/Vigorous_Clean_Co_TransparentLogo.png"
                alt=""
                className="h-8 opacity-70"
              />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
