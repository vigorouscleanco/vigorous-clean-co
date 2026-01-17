import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-app py-12">
        {/* top grid */}
        <div className="grid gap-10 md:grid-cols-[1fr,320px]">
          {/* left side */}
          <div>
            <h3 className="text-2xl font-semibold">Vigorous Clean Co.</h3>

            <p className="mt-3 text-gray-600 max-w-xl">
              Eco-friendly cleaning for homes, offices & rentals across Los Angeles & South Bay.
              New clients receive <span className="font-semibold">10% off</span> their first cleaning —
              discount is applied after service is completed.
            </p>

            {/* contact */}
            <div className="mt-6 space-y-3 text-gray-700">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                  {/* phone icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 16.5v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.5 2.82 2 2 0 0 1 3.5.64h2A2 2 0 0 1 7.5 2.3c.13.97.36 1.91.68 2.81a2 2 0 0 1-.45 2.07l-1 1a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.07-.45c.9.32 1.84.55 2.81.68A2 2 0 0 1 21 16.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a className="hover:underline" href="tel:+14242605986">(424) 260-5986</a>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                  {/* mail icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6"/>
                    <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <a className="hover:underline" href="mailto:vigorouscleanco@gmail.com">
                  vigorouscleanco@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 pt-1">
                {/* IG */}
                <a
                  href="https://instagram.com/vigorouss.co"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@vigorouss.co"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M14.5 3a5.5 5.5 0 0 0 5.5 5.5V12A8.5 8.5 0 0 1 14.5 8v6.25a4.75 4.75 0 1 1-3.6-4.62v2.14a2.5 2.5 0 1 0 1.6 2.35V3h2Z" fill="currentColor"/>
                  </svg>
                </a>
                <span className="text-gray-600">@vigorouss.co</span>
              </div>
            </div>
          </div>

          {/* right card – one Book Now button only */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Now
            </Link>

            <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="font-semibold">Serving</p>
                <p className="text-gray-600">Los Angeles & South Bay</p>
              </div>
              <div>
                <p className="font-semibold">Hours</p>
                <p className="text-gray-600">Daily: 8:00 AM – 8:00 PM</p>
              </div>
            </div>

            <p className="mt-5 text-xs text-gray-500">
              Same-day openings may be available.
            </p>
          </div>
        </div>

        {/* bottom line */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          © 2026 Vigorous Clean Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


