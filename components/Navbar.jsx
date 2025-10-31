"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/terms", label: "Terms" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      {/* Promo bar */}
      <div className="bg-primary/10 text-primary text-xs sm:text-sm text-center px-3 py-2">
        New clients receive <b>10% off</b> their first cleaning — discount applied after service completion.
      </div>

      {/* Main nav */}
      <div className="container-app h-14 sm:h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Vigorous Clean Co." width={32} height={32} priority />
          <span className="font-semibold">Vigorous Clean Co.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-black">
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="rounded-2xl bg-primary px-4 py-2 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
          >
            Book Now
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-xl border px-3 py-2 text-sm"
          aria-label="Open menu"
        >
          Menu
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-app py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gray-700 hover:text-black"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="rounded-xl bg-primary px-4 py-2 text-white text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


