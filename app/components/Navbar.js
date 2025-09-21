export default function Navbar({ bookingLink = "#" }) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <img src="/logo.png" alt="Vigorous Clean Co." className="h-9 w-9 rounded-full" />
          <span className="text-lg font-semibold">Vigorous Clean Co.</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#pricing" className="hover:text-emerald-600">Pricing</a>
          <a href="#alacarte" className="hover:text-emerald-600">À la carte</a>
          <a href="#offices" className="hover:text-emerald-600">Office</a>
          <a href="#faq" className="hover:text-emerald-600">FAQ</a>
          <a href="#contact" className="hover:text-emerald-600">Contact</a>
        </nav>
        <a href={bookingLink} target="_blank" className="inline-flex items-center rounded-2xl bg-emerald-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-emerald-700">Book Now</a>
      </div>
    </header>
  );
}
