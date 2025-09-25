"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="bg-emerald-700 text-white sticky top-0 z-40 shadow">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Vigorous_Clean_Co_TransparentLogo.png" // your transparent full logo in /public
            alt="Vigorous Clean Co."
            width={140}
            height={36}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="ml-auto hidden md:flex items-center gap-6 text-white/90">
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/account" className="hover:text-white">Login</Link>

          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-700 px-4 py-2 font-semibold hover:bg-white/90"
          >
            {/* calendar icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 3v4M8 3v4M3 11h18" stroke="currentColor" strokeWidth="2"/>
            </svg>
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}

