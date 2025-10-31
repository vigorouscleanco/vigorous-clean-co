"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: close mobile menu when resizing up
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      {/* ✅ Updated green announcement bar */}
      <div className="bg-green-50 text-center text-green-700 text-sm py-2">
        New clients receive <b>10% off</b> their first cleaning — discount applied after service completion.
      </div>

      <nav className="container-app flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold flex items-center gap-2">
          <img src="/logo.svg" alt="Vigorous Clean Co." className="h-6 w-auto" />
          <span>Vigorous Clean Co.</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/faq">FAQ</Link>

          <Link
            href="/book"
            className="rounded-full bg-primary text-white px-4 py-2 font-medium hover:opacity-90 transition"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/terms" onClick={() => setIsOpen(false)}>Terms</Link>
            <Link href="/faq" onClick={() => setIsOpen(false)}>FAQ</Link>

            <Link
              href="/book"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-primary text-white px-5 py-2 font-medium hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

