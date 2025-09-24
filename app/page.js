// app/page.js
"use client";
import { useState } from "react";

const bookingLink =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";
const toPricing = "/pricing";

// Small SVG icons
const IconKitchen = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M3 6h18v2H3V6zm2 4h2v8H5v-8zm4 0h10v8H9v-8z" />
  </svg>
);
const IconBath = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M7 10V6a3 3 0 1 1 6 0v2h4v2H7zm-3 2h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3z" />
  </svg>
);
const IconBed = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M4 10h16a2 2 0 0 1 2 2v6h-2v-2H4v2H2v-6a2 2 0 0 1 2-2zM4 8h8V6a2 2 0 1 0-4 0v2z" />
  </svg>
);
const IconLiving = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M3 13h18v6H3v-6zm2-6h14v5H5V7z" />
  </svg>
);
const IconFridge = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M6 2h12v20H6V2zm3 3h2v4H9V5z" />
  </svg>
);
const IconOven = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M4 5h16v14H4V5zm2 2v3h12V7H6z" />
  </svg>
);
const IconMicrowave = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M3 7h18v10H3V7zm2 2v6h14V9H5z" />
  </svg>
);
const IconCarpet = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M4 6h16v12H4V6zm2 2v8h12V8H6z" />
  </svg>
);
const IconWindows = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M4 4h16v16H4V4zm2 2v5h5V6H6zm0 7v5h5v-5H6zm7-7v5h5V6h-5zm0 7v5h5v-5h-5z" />
  </svg>
);

// Testimonials
const REVIEWS = [
  { name: "Alyssa R.", text: "They transformed our place before a family visit. On-time, friendly, and the kitchen literally sparkled." },
  { name: "Marcus T.", text: "Flat-rate with no surprises. Booking was easy and the crew did a fantastic job on the bathrooms." },
  { name: "Priya K.", text: "Used them for an office clean. Desks and windows looked amazing. Highly recommend!" },
  { name: "Jorge V.", text: "So professional and the products are pet-safe—huge plus for our dog. Will book again." },
  { name: "Emily L.", text: "Move-out clean was stress-free. Carpet shampoo came out better than expected." },
  { name: "Hannah S.", text: "I love the transparent pricing and the reminders. The living area has never looked better." },
  { name: "Devon C.", text: "Super responsive, on time, and thorough. Exactly what you want from a cleaning company." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p === 0 ? REVIEWS.length - 1 : p - 1));
  const next = () => setI((p) => (p === REVIEWS.length - 1 ? 0 : p + 1));

  return (
    <section id="reviews" className="mx-auto max-w-6xl px-4">
      <h2 className="mb-6 text-center text-3xl font-semibold text-emerald-700">
        Loved by Clients
      </h2>

      <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-3 text-white shadow hover:bg-emerald-600"
          aria-label="Previous review"
        >
          ‹
        </button>

        <div className="px-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-1 text-amber-500">
            {"★★★★★".split("").map((s, idx) => (
              <span key={idx} aria-hidden>★</span>
            ))}
          </div>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-700">
            “{REVIEWS[i].text}”
          </p>
          <p className="mt-4 font-semibold text-slate-900">— {REVIEWS[i].name}</p>
        </div>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-emerald-700 p-3 text-white shadow hover:bg-emerald-600"
          aria-label="Next review"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {REVIEWS.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 w-2 rounded-full ${idx === i ? "bg-emerald-600" : "bg-slate-300"}`}
          />
        ))}
      </div>
    </section>
  );
}

// FAQ entries
const FAQS = [
  {
    q: "Do you bring supplies & equipment?",
    a: "Yes. We bring all supplies and equipment needed for standard and deep cleans. If you have preferred products, tell us in the notes.",
  },
  {
    q: "Are the products eco and pet-safe?",
    a: "Absolutely. We default to eco & pet-safe products. If you need fragrance-free, we can accommodate.",
  },
  {
    q: "What does your flat-rate include?",
    a: "Kitchens, bathrooms, bedrooms, living areas, dusting, wiping, vacuuming & mopping. Deep-clean add-ons (e.g., inside oven/fridge) are a la carte.",
  },
  {
    q: "How does multi-day work with one cleaner?",
    a: "If the job needs more than one day, we schedule additional days with the same cleaner when possible so quality stays consistent.",
  },
  {
    q: "Where do you serve?",
    a: "Los Angeles County & Orange County. If you’re nearby and unsure, contact us and we’ll confirm.",
  },
  {
    q: "How do I reschedule or cancel?",
    a: "Use your Square booking confirmation link to manage changes, or call/email us and we’ll help.",
  },
  {
    q: "How do I use the 10% promo?",
    a: "Use code VIGOR10 at booking. The discount automatically applies for first-time clients at checkout.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto mt-16 max-w-6xl px-4">
      <h2 className="mb-6 text-center text-3xl font-semibold text-emerald-700">
        Frequently Asked Questions
      </h2>
      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {FAQS.map((item, idx) => (
          <div key={idx} className="p-5">
            <button
              className="flex w-full items-center justify-between text-left"
              onClick={() => setOpen(open === idx ? -1 : idx)}
              aria-expanded={open === idx}
            >
              <span className="mr-4 font-medium">{item.q}</span>
              <span className="text-emerald-700">{open === idx ? "–" : "+"}</span>
            </button>
            {open === idx && (
              <p className="mt-3 text-slate-700">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate bg-slate-400/25">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center">
          <img src="/logo.png" alt="" className="h-14 w-14 opacity-90" />
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight text-white drop-shadow">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/90">
            Eco-friendly residential & office cleaning with transparent flat-rate pricing
            in Los Angeles & Orange County.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={toPricing}
              className="rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 shadow hover:bg-slate-50"
            >
              View Pricing
            </a>
            <a
              href="#services"
              className="rounded-xl border border-white/70 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* À LA CARTE */}
      <section id="services" className="mx-auto mt-14 max-w-6xl px-4">
        <h2 className="mb-2 text-center text-3xl font-semibold text-emerald-700">
          À la Carte Services
        </h2>
        <p className="mb-8 text-center text-slate-600">
          Popular add-ons and task-based services.
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: <IconKitchen />, label: "Kitchen Only", link: toPricing },
            { icon: <IconBath />, label: "Bathrooms Only (per 2)", link: toPricing },
            { icon: <IconBed />, label: "Bedrooms Only (per room)", link: toPricing },
            { icon: <IconLiving />, label: "Living / Common Area", link: toPricing },
            { icon: <IconFridge />, label: "Inside Fridge", link: toPricing },
            { icon: <IconOven />, label: "Inside Oven", link: toPricing },
            { icon: <IconMicrowave />, label: "Microwave", link: toPricing },
            { icon: <IconCarpet />, label: "Carpet Shampoo (per room)", link: toPricing },
            { icon: <IconWindows />, label: "Interior Windows (min. 5)", link: toPricing },
          ].map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="text-emerald-700">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="text-emerald-700">See Pricing →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <div className="mt-16">
        <Testimonials />
      </div>

      {/* FAQ (NEW) */}
      <FAQ />

      {/* Contact */}
      <section id="contact" className="mx-auto mt-16 max-w-6xl px-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="mb-8 text-center text-3xl font-semibold text-emerald-700">
            Contact Us
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Call / Email with icons */}
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="mb-4 flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-700" fill="currentColor">
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1.1-.24 11.6 11.6 0 0 0 3.6.6 1 1 0 0 1 1 1v3.7a1 1 0 0 1-1 1A17.6 17.6 0 0 1 3 6a1 1 0 0 1 1-1h3.7a1 1 0 0 1 1 1c0 1.3.2 2.5.6 3.6a1 1 0 0 1-.24 1.1L6.6 10.8z" />
                </svg>
                <a href="tel:+14242605986" className="text-lg font-semibold hover:underline">
                  (424) 260-5986
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-700" fill="currentColor">
                  <path d="M4 6h16v12H4V6zm0 0l8 6 8-6" />
                </svg>
                <a
                  href="mailto:vigorouscleanco@gmail.com"
                  className="text-lg font-semibold hover:underline"
                >
                  vigorouscleanco@gmail.com
                </a>
              </div>
            </div>

            {/* Area & Hours + CTA */}
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="mb-3 text-xl font-semibold">Service Area & Hours</h3>
              <p className="text-slate-700">
                Los Angeles County & Orange County
                <br />
                <span className="text-slate-500">
                  Mon–Fri: 8:00 AM – 6:00 PM • Sat PM • Sun: Closed
                </span>
              </p>

              <div className="mt-5">
                <a
                  href={bookingLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-600"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

