// app/page.js
"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

/* ---------- small inline SVG icons (no extra files needed) ---------- */
function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.48a1 1 0 01-1 1C11.85 21 3 12.15 3 1.99a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" />
    </svg>
  );
}
function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function ArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.17 12l-4.88 4.88 1.41 1.41L16 12l-6.3-6.29-1.41 1.41L13.17 12z" />
    </svg>
  );
}

/* ---------- data ---------- */
const alacarte = [
  { label: "Kitchen Only", icon: "🍳" },
  { label: "Bathrooms Only (per 2)", icon: "🛁" },
  { label: "Bedrooms Only (per room)", icon: "🛏️" },
  { label: "Living / Common Area", icon: "🛋️" },
  { label: "Inside Fridge", icon: "🧊" },
  { label: "Inside Oven", icon: "🔥" },
  { label: "Microwave", icon: "🍲" },
  { label: "Carpet Shampoo (per room)", icon: "🧼" },
  { label: "Interior Windows (min. 5)", icon: "🪟" },
];

const reviews = [
  {
    name: "Sofia R.",
    text:
      "Spotless every time. The flat-rate made it super easy to budget. Highly recommend!",
    area: "West Hollywood",
  },
  {
    name: "Marcus L.",
    text:
      "They handled my move-out clean perfectly and on time. Got my deposit back!",
    area: "Downtown LA",
  },
  {
    name: "Evelyn A.",
    text:
      "We do bi-weekly service. Eco products + great communication = 10/10.",
    area: "Long Beach",
  },
  {
    name: "Jay P.",
    text: "Office looks brand new each morning. Reliable and professional.",
    area: "Santa Monica",
  },
  {
    name: "Hannah M.",
    text:
      "Love the transparent pricing and easy booking. Team is super friendly.",
    area: "Pasadena",
  },
  {
    name: "Diego C.",
    text:
      "Deep clean exceeded expectations. I’ll be booking monthly going forward.",
    area: "Culver City",
  },
];

export default function Page() {
  const [idx, setIdx] = useState(0);
  const go = (d) => setIdx((i) => (i + d + reviews.length) % reviews.length);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <header className="relative isolate overflow-hidden bg-[url('/hero-fallback.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center text-white">
          <img
            src="/Vigorous_Clean_Co_TransparentLogo.png"
            onError={(e) => (e.currentTarget.src = "/logo.png")}
            alt=""
            className="mx-auto mb-6 h-14 w-14 rounded-full bg-white/10 p-2"
          />
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg opacity-95">
            Eco-friendly residential & office cleaning with transparent flat-rate
            pricing in Los Angeles & Orange County.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/pricing"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow hover:bg-emerald-50"
            >
              View Pricing
            </a>
            <a
              href="#services"
              className="rounded-xl border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>
      </header>

      {/* À la carte */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-emerald-700">
          À la Carte Services
        </h2>
        <p className="mt-2 text-center text-slate-600">
          Popular add-ons and task-based services.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {alacarte.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
              <a
                href="/pricing#alacarte"
                className="group inline-flex items-center gap-1 font-semibold text-emerald-700 hover:underline"
              >
                See Pricing
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-emerald-700">
            Loved by Clients
          </h2>

          <div className="relative mt-8 rounded-2xl border border-slate-200 bg-white p-8">
            <button
              aria-label="Previous"
              onClick={() => go(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-3 text-white shadow hover:bg-emerald-800"
            >
              ‹
            </button>

            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-3 text-yellow-500">★★★★★</div>
              <p className="text-lg leading-relaxed text-slate-700">
                “{reviews[idx].text}”
              </p>
              <p className="mt-3 font-semibold">{reviews[idx].name}</p>
              <p className="text-sm text-slate-500">{reviews[idx].area}</p>
            </div>

            <button
              aria-label="Next"
              onClick={() => go(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-3 text-white shadow hover:bg-emerald-800"
            >
              ›
            </button>

            <div className="mt-6 flex justify-center gap-2">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === idx ? "bg-emerald-700" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-center text-3xl font-bold text-emerald-700">
          Contact Us
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="mb-4 text-xl font-semibold">Call or Email</h3>
            <div className="flex items-center gap-3 text-lg">
              <PhoneIcon className="h-6 w-6 text-emerald-700" />
              <a href="tel:14242605986" className="hover:underline">
                (424) 260-5986
              </a>
            </div>
            <div className="mt-3 flex items-center gap-3 text-lg">
              <MailIcon className="h-6 w-6 text-emerald-700" />
              <a
                href="mailto:vigorouscleanco@gmail.com"
                className="hover:underline"
              >
                vigorouscleanco@gmail.com
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h3 className="mb-4 text-xl font-semibold">Service Area & Hours</h3>
            <p className="text-slate-700">
              Los Angeles County & Orange County
              <br />
              <span className="text-slate-600">
                Mon–Fri: 8:00 AM – 6:00 PM • Sat PM • Sun: Closed
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer with FAQ + links + socials + logo */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
          {/* FAQ (accordion) */}
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xl font-semibold">FAQ</h3>
            <details className="group rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer list-none font-medium">
                What should I do before my cleaner arrives?
              </summary>
              <p className="mt-2 text-slate-700">
                Please tidy personal items and make surfaces accessible. We’ll
                handle the cleaning!
              </p>
            </details>
            <details className="group mt-3 rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer list-none font-medium">
                Do you bring supplies?
              </summary>
              <p className="mt-2 text-slate-700">
                Yes—eco & pet-safe products are included. Let us know about any
                sensitivities.
              </p>
            </details>
            <details className="group mt-3 rounded-lg border border-slate-200 p-4">
              <summary className="cursor-pointer list-none font-medium">
                What if it takes more than one day?
              </summary>
              <p className="mt-2 text-slate-700">
                We’ll follow your multi-day rules and keep your pricing
                transparent. You’ll be informed before we extend.
              </p>
            </details>
          </div>

          {/* Quick links + socials */}
          <div>
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/pricing" className="text-emerald-700 hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#services" className="text-emerald-700 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-emerald-700 hover:underline">
                  Contact
                </a>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com/vigorouss.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-emerald-700"
                aria-label="Instagram"
                title="Instagram"
              >
                {/* simple IG glyph */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm6-1a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@vigorouss.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:text-emerald-700"
                aria-label="TikTok"
                title="TikTok"
              >
                {/* simple TT glyph */}
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M21 8.5c-2 0-3.9-.7-5.4-2.1V17a6 6 0 11-6-6c.3 0 .7 0 1 .1V9a8 8 0 00-1-.1 8 8 0 108 8V9.6a9.7 9.7 0 005.4 1.9V8.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* bottom strip with logo */}
        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Vigorous Clean Co. All rights
              reserved.
            </p>
            <img
              src="/Vigorous_Clean_Co_TransparentLogo.png"
              onError={(e) => (e.currentTarget.src = "/logo.png")}
              alt="Vigorous Clean Co."
              className="h-8 w-8 opacity-80"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
