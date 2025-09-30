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
  { href: "/faq", label: "FAQ" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="container-app h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Vigorous Clean Co." width={32} height={32} priority />
          <span className="font-semibold">Vigorous Clean Co.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-black">{l.label}</Link>
          ))}

          {/* phone with icon */}
          <a href="tel:+14242605986" className="text-sm font-medium inline-flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.16a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z"/>
            </svg>
            (424) 260-5986
          </a>

          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
            target="_blank"
            rel="noopener"
            className="rounded-2xl bg-primary px-4 py-2 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
          >
            Book Now
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-xl border px-3 py-2 text-sm">Menu</button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-app py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-gray-700 hover:text-black" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <a href="tel:+14242605986" className="text-sm font-medium inline-flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.16a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z"/>
              </svg>
              (424) 260-5986
            </a>
            <a
              href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
              target="_blank"
              rel="noopener"
              className="rounded-xl bg-primary px-4 py-2 text-white text-sm font-medium text-center"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

