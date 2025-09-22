"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-emerald-600 text-white px-6 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between">

        {/* Logo + brand */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Vigorous Clean Co. logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-semibold text-lg">Vigorous Clean Co.</span>
        </a>

        {/* Book button */}
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}
