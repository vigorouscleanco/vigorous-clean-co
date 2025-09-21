"use client";

export default function Navbar() {
  const bookingLink = process.env.NEXT_PUBLIC_BOOKING_URL || "#";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="Vigorous Clean Co." className="h-7 w-7" />
          <span>Vigorous Clean Co.</span>
        </a>
        <div className="flex items-center gap-5 text-sm">
          <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
          <a href="#alacarte" className="hover:text-emerald-700">À la carte</a>
          <a href="#offices" className="hover:text-emerald-700">Offices</a>
          <a
            href={bookingLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700"
          >
            Book
          </a>
        </div>
      </nav>
    </header>
  );
}
