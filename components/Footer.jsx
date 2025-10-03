// components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container-app py-10 md:py-12">
        {/* TOP: 3 columns on md+; stacks on mobile */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* 1) Brand + contact */}
          <div>
            <h3 className="text-[26px] font-semibold leading-tight">Vigorous Clean Co.</h3>
            <p className="mt-3 text-gray-600 max-w-xl">
              Eco-friendly cleaning for homes, offices & rentals across Los Angeles. New clients
              save <span className="font-semibold">10%</span> with code{" "}
              <span className="font-semibold">VIGOR10</span>.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-700">
              <a href="tel:+14242605986" className="inline-flex items-center gap-2 hover:text-gray-900">
                <PhoneIcon className="h-5 w-5" />
                (424) 260-5986
              </a>
              <a
                href="mailto:vigorouscleanco@gmail.com"
                className="inline-flex items-center gap-2 hover:text-gray-900"
              >
                <MailIcon className="h-5 w-5" />
                vigorouscleanco@gmail.com
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <SocialIcon
                href="https://instagram.com/vigorouss.co"
                label="Instagram"
                Icon={InstagramIcon}
              />
              <SocialIcon
                href="https://tiktok.com/@vigorouss.co"
                label="TikTok"
                Icon={TikTokIcon}
              />
              <span className="text-gray-600 ml-1">@vigorouss.co</span>
            </div>
          </div>

          {/* 2) Company links */}
          <div>
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="mt-4 space-y-2.5 text-gray-700">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/services" className="hover:underline">Services</Link></li>
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/terms" className="hover:underline">Terms</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* 3) Quick Actions (desktop/tablet only) */}
          <div className="hidden md:flex md:flex-col md:items-end">
            <div className="rounded-2xl border border-gray-100 p-5 shadow-sm w-full max-w-xs">
              <p className="text-sm text-gray-500">Serving</p>
              <p className="font-medium">Los Angeles, CA</p>

              <div className="mt-4">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-2.5 text-white font-medium shadow-soft hover:opacity-90 transition w-full"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: copyright + (mobile) Book Now so it sits above chat widgets */}
        <div className="mt-8 border-t border-gray-100 pt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">© 2025 Vigorous Clean Co. All rights reserved.</p>

          {/* Book button only on mobile to avoid bottom-right “gap” on desktop */}
          <div className="md:hidden flex items-center justify-between gap-4">
            <span className="text-sm text-gray-500">Los Angeles, CA</span>
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-6 py-2.5 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* helpers */
function SocialIcon({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

/* inline icons */
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.12 2h3a2 2 0 0 1 2 1.72c.12.89.31 1.76.57 2.6a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.48-1.15a2 2 0 0 1 2.11-.45c.84.26 1.71.45 2.6.57A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}
function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.5 3c.4 2.1 1.8 3.8 3.8 4.1v2.5c-1.6-.03-3.1-.55-4.3-1.48v5.9a5.5 5.5 0 1 1-5-5.47v2.7a2.8 2.8 0 1 0 2 2.68V3h3.5z" />
    </svg>
  );
}

