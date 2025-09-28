// app/components/Navbar.js
"use client";

const BOOKING_URL =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-emerald-700 text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          {/* TOP-LEFT LOGO (mark) -> make sure this file exists in /public */}
          <img
            src="/Vigorous_Clean_Co_TransparentLogo.png"
            alt="Vigorous Clean Co."
            className="h-8 w-8 rounded"
          />
          <span className="text-lg font-semibold tracking-wide">
            Vigorous Clean Co.
          </span>
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="/services" className="hover:opacity-90">
            Services
          </a>
          <a href="/pricing" className="hover:opacity-90">
            Pricing
          </a>
          <a href="/about" className="hover:opacity-90">
            About
          </a>
          <a href="/faq" className="hover:opacity-90">
            FAQ
          </a>
          <a href="/account" className="hover:opacity-90">
            Login
          </a>
        </nav>

        <a
          href={BOOKING_URL}
          className="hidden rounded-lg bg-white px-4 py-2 text-emerald-700 font-semibold md:inline-block"
        >
          {/* calendar emoji for the button */}
          <span aria-hidden>📆</span> Book Now
        </a>
      </div>
    </header>
  );
}
