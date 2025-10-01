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

          {/* Contact (icons + text, tidy spacing) */}
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
          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
            target="_blank"
            rel="noopener"
            className="inline-block rounded-2xl bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
          >
            Book Now
          </a>
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

