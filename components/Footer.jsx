// components/Footer.jsx
import Link from "next/link";

/* Simple inline icons (no extra packages) */
function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.32 1.7.6 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.13a2 2 0 0 1 2.11-.45c.8.28 1.64.48 2.5.6A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}
function IconTiktok(props) {
  return (
    <svg viewBox="0 0 256 256" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M168.1 48.1a55.9 55.9 0 0 0 39.5 16.4V92a87 87 0 0 1-39.5-9.6l-.1 67.1a60.9 60.9 0 1 1-60.8-60.8 61 61 0 0 1 8.2.6v27.9a33.1 33.1 0 1 0 23.7 31.7V16h28.9v32.1z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-app py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left: Brand, pitch, contacts, socials */}
          <div>
            <h3 className="text-2xl font-semibold">Vigorous Clean Co.</h3>
            <p className="mt-3 text-gray-700">
              Eco-friendly cleaning for homes, offices & rentals across Los Angeles & Orange County. New clients save{" "}
              <span className="font-semibold">10%</span> with code <span className="font-semibold">VIGOR10</span>.
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="tel:+14242605986"
                className="inline-flex items-center gap-3 text-gray-800 hover:text-primary"
                aria-label="Call Vigorous Clean Co."
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
                  <IconPhone />
                </span>
                (424) 260-5986
              </a>

              <a
                href="mailto:vigorouscleanco@gmail.com"
                className="inline-flex items-center gap-3 text-gray-800 hover:text-primary"
                aria-label="Email Vigorous Clean Co."
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
                  <IconMail />
                </span>
                vigorouscleanco@gmail.com
              </a>

              <div className="mt-2 flex items-center gap-3">
                <a
                  href="https://instagram.com/vigorouss.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                  aria-label="Instagram"
                  title="@vigorouss.co on Instagram"
                >
                  <IconInstagram />
                </a>
                <a
                  href="https://tiktok.com/@vigorouss.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                  aria-label="TikTok"
                  title="@vigorouss.co on TikTok"
                >
                  <IconTiktok />
                </a>
                <span className="text-sm text-gray-600">@vigorouss.co</span>
              </div>
            </div>
          </div>

          {/* Middle: Company links */}
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Quick actions card to balance the row */}
          <div className="md:pl-6">
            <div className="rounded-2xl border border-gray-100 p-5 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-6 py-2.5 text-white font-medium shadow-soft hover:opacity-90 transition"
                >
                  Book Now
                </Link>
                <a
                  href="tel:+14242605986"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
                >
                  <IconPhone /> Call Us
                </a>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Serving</p>
                  <p className="text-sm text-gray-700">Los Angeles & Orange County</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours</p>
                  <p className="text-sm text-gray-700">Daily: 8:00 AM – 8:00 PM</p>
                </div>
              </div>

              <p className="mt-4 text-xs text-gray-500">Same-day openings may be available.</p>
            </div>

            {/* Mobile mini bar (shows under the card on small screens) */}
            <div className="mt-4 grid grid-cols-2 items-center gap-3 md:hidden">
              <div className="text-right">
                <p className="text-xs text-gray-500">Serving</p>
                <p className="text-sm text-gray-700">Los Angeles & Orange County</p>
                <p className="mt-1 text-xs text-gray-500">Open daily 8 AM – 8 PM</p>
              </div>
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-6 py-2.5 text-white text-center font-medium shadow-soft hover:opacity-90 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
