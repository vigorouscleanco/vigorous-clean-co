import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      {/* Top row */}
      <div className="container-app py-10 grid md:grid-cols-12 gap-10 items-start">
        {/* Brand + blurb */}
        <div className="md:col-span-5">
          <h3 className="font-semibold text-lg">Vigorous Clean Co.</h3>
          <p className="text-gray-600 mt-2 text-sm leading-relaxed">
            Eco-friendly cleaning for homes, offices & rentals across Los Angeles.
            New clients save <b>10%</b> with code <b>VIGOR10</b>.
          </p>

          {/* Contact */}
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+14242605986" className="inline-flex items-center gap-2 hover:underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.16a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z"/>
              </svg>
              (424) 260-5986
            </a>
            <div />
            <a href="mailto:vigorouscleanco@gmail.com" className="inline-flex items-center gap-2 hover:underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
              </svg>
              vigorouscleanco@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.instagram.com/vigorouss.co"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              className="rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 transition"
              title="@vigorouss.co on Instagram"
            >
              {/* Instagram icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm5.75-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@vigorouss.co"
              target="_blank"
              rel="noopener"
              aria-label="TikTok"
              className="rounded-full bg-gray-100 p-2 text-gray-700 hover:bg-gray-200 transition"
              title="@vigorouss.co on TikTok"
            >
              {/* TikTok icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M14 3h3.1c.3 1.2 1 2.3 2 3.1A7 7 0 0 0 21 7.9v3.1a8.4 8.4 0 0 1-4-1.2v6.2a5.9 5.9 0 1 1-5.9-5.9c.3 0 .6 0 .9.1V12a3.4 3.4 0 1 0 3.4 3.4V3z"/>
              </svg>
            </a>
            <span className="text-sm text-gray-600">@vigorouss.co</span>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-4">
          <h4 className="font-medium">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        {/* CTA + disclaimer */}
        <div className="md:col-span-3">
          <Link
            href="/book"
            className="inline-block rounded-2xl bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
          >
            Book Now
          </Link>
          <p className="text-xs text-gray-500 mt-4 leading-relaxed">
            Disclaimer: We are not liable for pre-existing damage, normal wear & tear, or items not disclosed as fragile.
            Loss/theft of unattended valuables is not covered. Specialty/hazardous tasks are excluded unless agreed in writing.
          </p>
        </div>
      </div>

      {/* Bottom row */}
      <div className="border-t border-gray-100">
        <div className="container-app py-6 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.</span>
          <span>Los Angeles, CA</span>
        </div>
      </div>
    </footer>
  );
}


