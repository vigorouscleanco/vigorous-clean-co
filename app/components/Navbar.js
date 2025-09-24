// app/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="w-full bg-emerald-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/Vigorous_Clean_Co_TransparentLogo.png"
            onError={(e) => (e.currentTarget.src = "/logo.png")}
            alt="Vigorous Clean Co. logo"
            className="h-8 w-8 rounded object-contain"
          />
          <span className="text-lg font-semibold">Vigorous Clean Co.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <a href="/services" className="hover:underline underline-offset-4">
            Services
          </a>
          <a href="/pricing" className="hover:underline underline-offset-4">
            Pricing
          </a>
          <a href="/about" className="hover:underline underline-offset-4">
            About
          </a>
          <a href="/account" className="hover:underline underline-offset-4">
            Login
          </a>
          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-emerald-700 shadow hover:bg-emerald-50"
          >
            {/* calendar icon */}
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M7 2h2v3H7V2zm8 0h2v3h-2V2zM4 5h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 5v10h16V10H4z" />
            </svg>
            Book Now
          </a>
        </div>

        {/* Mobile simple CTA */}
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 font-semibold text-emerald-700 shadow"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M7 2h2v3H7V2zm8 0h2v3h-2V2zM4 5h16a2 2 0 012 2v13a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2zm0 5v10h16V10H4z" />
          </svg>
          Book
        </a>
      </div>
    </nav>
  );
}

