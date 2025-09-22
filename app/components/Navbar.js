"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-emerald-600 text-white px-6 py-4">
      <div className="mx-auto max-w-6xl flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Vigorous Clean Co. logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-semibold text-lg">Vigorous Clean Co.</span>
        </a>
        <a
          href="#contact"
          className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
