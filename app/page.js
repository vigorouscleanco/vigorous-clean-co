// app/page.js
"use client";

import { useState } from "react";

/* --- Real icons (inline SVG) for a-la-carte --- */
const IconKitchen = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 3h18v2H3V3zm3 4h4v14H6V7zm6 0h6a2 2 0 0 1 2 2v12h-8V7z"/></svg>
);
const IconBath = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M7 10V7a3 3 0 1 1 6 0v1h6v2H5zm-2 3h18v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-2z"/></svg>
);
const IconBed = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4 10h16a2 2 0 0 1 2 2v6h-2v-2H4v2H2v-6a2 2 0 0 1 2-2zM4 8h8V6a2 2 0 1 0-4 0v2z"/></svg>
);
const IconLiving = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 12h18v7H3v-7zm2-5h14v4H5V7z"/></svg>
);
const IconFridge = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6 2h12v20H6V2zm3 3h2v4H9V5z"/></svg>
);
const IconOven = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4 5h16v14H4V5zm2 2v3h12V7H6z"/></svg>
);
const IconMicrowave = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3 7h18v10H3V7zm2 2v6h14V9H5z"/></svg>
);
const IconCarpet = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4 6h16v12H4V6zm2 2v8h12V8H6z"/></svg>
);
const IconWindows = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M4 4h16v16H4V4zm2 2v5h5V6H6zm0 7v5h5v-5H6zm7-7v5h5V6h-5zm0 7v5h5v-5h-5z"/></svg>
);

/* --- Reviews data --- */
const REVIEWS = [
  { name: "Sofia R.", area: "West Hollywood", text: "Spotless every time. Flat-rate made it easy to budget." },
  { name: "Marcus L.", area: "DTLA", text: "Move-out clean was perfect. Got my deposit back!" },
  { name: "Evelyn A.", area: "Long Beach", text: "Bi-weekly service with eco products. Love it." },
  { name: "Jay P.", area: "Santa Monica", text: "Office looks brand new each morning. Reliable!" },
  { name: "Hannah M.", area: "Pasadena", text: "Transparent pricing + easy booking. Team is friendly." },
  { name: "Diego C.", area: "Culver City", text: "Deep clean exceeded expectations. Booking again." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p === 0 ? REVIEWS.length - 1 : p - 1));
  const next = () => setI((p) => (p === REVIEWS.length - 1 ? 0 : p + 1));
  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4">
      <h2 className="mb-6 text-center text-3xl font-semibold text-emerald-700">Loved by Clients</h2>
      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-3 text-white shadow hover:bg-emerald-600" aria-label="Previous">‹</button>
        <div className="px-10 text-center">
          <div className="mb-3 text-amber-500">★★★★★</div>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">“{REVIEWS[i].text}”</p>
          <p className="mt-3 font-semibold">{REVIEWS[i].name}</p>
          <p className="text-sm text-slate-500">{REVIEWS[i].area}</p>
        </div>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-3 text-white shadow hover:bg-emerald-600" aria-label="Next">›</button>
        <div className="mt-4 flex justify-center gap-2">{REVIEWS.map((_, idx) => <span key={idx} className={`h-2 w-2 rounded-full ${idx===i?'bg-emerald-600':'bg-slate-300'}`} />)}</div>
      </div>
    </section>
  );
}

export default function Page() {
  const alacarte = [
    { label: "Kitchen Only", icon: <IconKitchen /> },
    { label: "Bathrooms Only (per 2)", icon: <IconBath /> },
    { label: "Bedrooms Only (per room)", icon: <IconBed /> },
    { label: "Living / Common Area", icon: <IconLiving /> },
    { label: "Inside Fridge", icon: <IconFridge /> },
    { label: "Inside Oven", icon: <IconOven /> },
    { label: "Microwave", icon: <IconMicrowave /> },
    { label: "Carpet Shampoo (per room)", icon: <IconCarpet /> },
    { label: "Interior Windows (min. 5)", icon: <IconWindows /> },
  ];

  return (
    <>
      {/* HERO */}
      <header className="relative isolate overflow-hidden bg-[url('/hero-fallback.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 text-center text-white">
          <img src="/Vigorous_Clean_Co_TransparentLogo.png" onError={(e)=>e.currentTarget.src="/logo.png"} alt="" className="mx-auto mb-6 h-14 w-14 rounded-full bg-white/10 p-2" />
          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">Your Space, Sparkling with Vigor.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg opacity-95">Eco-friendly residential & office cleaning with transparent flat-rate pricing in Los Angeles & Orange County.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/pricing" className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow hover:bg-emerald-50">View Pricing</a>
            <a href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/50 px-6 py-3 font-semibold text-white hover:bg-white/10">Our Services</a>
          </div>
        </div>
      </header>

      {/* À LA CARTE (icons, no prices) */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-emerald-700">À la Carte Services</h2>
        <p className="mt-2 text-center text-slate-600">Popular add-ons and task-based services.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {alacarte.map((item) => (
            <a key={item.label} href="/pricing#alacarte" className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 hover:shadow-md">
              <div className="flex items-center gap-3">
                <span className="text-emerald-700">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="text-emerald-700">See Pricing →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <div className="mt-2 mb-16">
        <Testimonials />
      </div>

      {/* Contact FORM (Formspree) */}
      <section id="contact" className="mx-auto max-w-4xl px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-6 text-center text-3xl font-semibold text-emerald-700">Contact Us</h2>
          {/* Replace the action URL with your Formspree endpoint after you create it */}
          <form
            action="https://formspree.io/f/your_form_id"
            method="POST"
            className="grid gap-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input name="name" required placeholder="Full Name" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600" />
              <input type="email" name="email" required placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600" />
            </div>
            <input name="phone" placeholder="Phone (optional)" className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600" />
            <textarea name="message" required placeholder="Tell us what you need cleaned..." rows={5} className="rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-600" />
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-800">
              Send Message
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-slate-500">We usually reply within a few hours during business hours.</p>
        </div>
      </section>
    </>
  );
}

