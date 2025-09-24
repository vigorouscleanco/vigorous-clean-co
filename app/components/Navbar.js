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

        {/* One single Book Now button (Square link) */}
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-white px-4 py-2 font-semibold text-emerald-700 shadow hover:bg-emerald-50"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}

