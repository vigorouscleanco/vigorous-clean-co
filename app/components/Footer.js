// app/components/Footer.js

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        {/* Full logo bottom-left */}
        <div className="md:col-span-2">
          <img
            src="/Vigorous_Clean_Co_Logo_GreenOnly.png"
            alt="Vigorous Clean Co. full logo"
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm text-slate-600">
            Eco-friendly cleaning for homes, offices & rentals across Los
            Angeles & Orange County.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>
              <a href="/services" className="hover:text-emerald-700">
                Services
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-emerald-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-emerald-700">
                About
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-emerald-700">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Hours & Contact</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>Mon–Sun: 8:00 AM – 8:00 PM</li>
            <li className="flex items-center gap-2">
              {/* phone icon only */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-.67a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="tel:+14242605986" className="hover:text-emerald-700">
                (424) 260-5986
              </a>
            </li>
            <li className="flex items-center gap-2">
              {/* mail icon only */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 4h16v16H4z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M22 6l-10 7L2 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <a
                href="mailto:vigorouscleanco@gmail.com"
                className="hover:text-emerald-700"
              >
                vigorouscleanco@gmail.com
              </a>
            </li>
            <li className="mt-3">
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/vigorouss.co"
                  target="_blank"
                  className="hover:text-emerald-700"
                >
                  IG
                </a>
                <a
                  href="https://tiktok.com/@vigorouss.co"
                  target="_blank"
                  className="hover:text-emerald-700"
                >
                  TikTok
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Vigorous Clean Co. — All rights reserved.
        <br />
        <span className="text-xs">
          Not liable for loss of personal items. All cleaners are vetted and
          follow strict SOPs.
        </span>
      </div>
    </footer>
  );
}

