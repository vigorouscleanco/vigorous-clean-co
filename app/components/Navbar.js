'use client';

import Link from 'next/link';

const BOOKING_URL =
  'https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services';

export default function Navbar() {
  return (
    <nav className="w-full bg-emerald-700 text-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/Vigorous_Clean_Co_TransparentLogo.png"
            alt="Vigorous Clean Co. logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <span className="font-semibold tracking-wide">Vigorous Clean Co.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="hover:text-emerald-200">Services</Link>
          <Link href="/pricing"  className="hover:text-emerald-200">Pricing</Link>
          <Link href="/about"    className="hover:text-emerald-200">About</Link>
          <Link href="/account"  className="hover:text-emerald-200">Login</Link>
        </div>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2 text-emerald-700 font-semibold shadow hover:bg-emerald-50"
          aria-label="Book a cleaning"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="-mt-px">
            <path d="M7 2v4M17 2v4M3.5 9h17M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Book Now
        </a>
      </div>
    </nav>
  );
}


