// app/page.js
'use client';

import { useState, useEffect } from 'react';

const BOOKING =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  'https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services';

/* ---------- Small SVG Icon helpers (inline, correct for each service) ---------- */
const Star = () => (
  <svg viewBox="0 0 20 20" className="w-4 h-4 fill-amber-400">
    <path d="M10 15l-5.878 3.09L5.5 11.545.999 7.41l6.06-.88L10 1l2.94 5.53 6.06.88-4.5 4.135 1.378 6.545z"/>
  </svg>
);

const IconMicrowave = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="6" width="20" height="12" rx="2"/><rect x="6" y="9" width="8" height="6" rx="1"/>
    <circle cx="18" cy="12" r="1"/><circle cx="18" cy="15" r="1"/>
  </svg>
);

const IconOven = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="4" width="18" height="16" rx="2"/><rect x="6" y="10" width="12" height="7" rx="1"/>
    <line x1="7.5" y1="7" x2="9" y2="7"/><line x1="10.5" y1="7" x2="12" y2="7"/><line x1="13.5" y1="7" x2="15" y2="7"/>
  </svg>
);

const IconFridge = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="7" y="2" width="10" height="20" rx="2"/><line x1="7" y1="10" x2="17" y2="10"/>
    <line x1="9" y1="13" x2="9" y2="15"/>
  </svg>
);

const IconCarpet = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M3 14h18"/>
  </svg>
);

const IconKitchen = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2"/><rect x="6" y="8" width="5" height="4"/>
    <rect x="13" y="8" width="5" height="7"/><circle cx="8.5" cy="15.5" r="1"/><circle cx="11" cy="15.5" r="1"/>
  </svg>
);

const IconWindows = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="4" width="16" height="16" rx="2"/><line x1="12" y1="4" x2="12" y2="20"/>
    <line x1="4" y1="12" x2="20" y2="12"/>
  </svg>
);

const IconBed = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="10" width="18" height="7" rx="2"/><rect x="5" y="7" width="6" height="3" rx="1"/>
  </svg>
);

const IconBath = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="12" width="18" height="6" rx="3"/><path d="M6 12V7a3 3 0 0 1 6 0v5"/>
  </svg>
);

const IconLiving = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="4" y="11" width="16" height="6" rx="2"/><path d="M7 11V9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v2"/>
  </svg>
);

/* --------------------- Fake reviews (6) --------------------- */
const REVIEWS = [
  { name: 'Alex M.', text: 'Showed up on time and left our office spotless. Booking was super easy!', city: 'DTLA' },
  { name: 'Rita P.', text: 'Love that they use eco products—place smells fresh, not chemical.', city: 'Santa Monica' },
  { name: 'James K.', text: 'They handled our move-out clean like pros. Got our full deposit back.', city: 'Culver City' },
  { name: 'Nadia V.', text: 'Reliable, detailed, and friendly. My go-to for Airbnb turnovers.', city: 'Silver Lake' },
  { name: 'Trevor H.', text: 'Transparent pricing. No surprises. Highly recommend.', city: 'Pasadena' },
  { name: 'Maya S.', text: 'Great communication and the results were fantastic.', city: 'West Hollywood' },
];

export default function HomePage() {
  /* simple auto-advancing carousel */
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % REVIEWS.length), 4200);
    return () => clearInterval(id);
  }, []);

  const alacarte = [
    { icon: <IconKitchen/>, label: 'Kitchen Only', href: '/pricing' },
    { icon: <IconBath/>, label: 'Bathrooms Only (per 2)', href: '/pricing' },
    { icon: <IconBed/>, label: 'Bedrooms Only (per room)', href: '/pricing' },
    { icon: <IconLiving/>, label: 'Living / Common Area', href: '/pricing' },
    { icon: <IconFridge/>, label: 'Inside Fridge', href: '/pricing' },
    { icon: <IconOven/>, label: 'Inside Oven', href: '/pricing' },
    { icon: <IconMicrowave/>, label: 'Microwave', href: '/pricing' },
    { icon: <IconCarpet/>, label: 'Carpet Shampoo (per room)', href: '/pricing' },
    { icon: <IconWindows/>, label: 'Interior Windows (min. 5)', href: '/pricing' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="relative bg-emerald-900">
        <div className="absolute inset-0 opacity-10"
             style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, white, transparent 40%)' }}/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 text-center text-white">
          <img src="/logo-mark.png" alt="" className="h-14 w-14 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-emerald-50/90">
            Eco-friendly residential & office cleaning with transparent flat-rate pricing in
            Los Angeles & Orange County.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/pricing"
              className="rounded-xl bg-white text-emerald-700 font-semibold px-5 py-3 shadow hover:shadow-md"
            >
              View Pricing
            </a>
            <a
              href={BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 text-white font-semibold px-5 py-3 border border-emerald-400 hover:bg-emerald-500"
            >
              Book Now
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
            <div className="rounded-xl bg-emerald-800/60 px-4 py-2">Flat-rate • No hidden fees</div>
            <div className="rounded-xl bg-emerald-800/60 px-4 py-2">Eco & pet-safe products</div>
            <div className="rounded-xl bg-emerald-800/60 px-4 py-2">Online booking & reminders</div>
          </div>
        </div>
      </section>

      {/* A LA CARTE */}
      <section className="py-16 bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-6">À la Carte Services</h2>
          <p className="text-center text-emerald-900/70 max-w-2xl mx-auto mb-10">
            Popular add-ons and task-based services. Tap to see pricing & details.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alacarte.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-emerald-100 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                    {s.icon}
                  </div>
                  <span className="font-medium">{s.label}</span>
                </div>
                <span className="text-emerald-700 opacity-80 group-hover:translate-x-0.5 transition">
                  See Pricing →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Loved by Clients</h2>

          <div className="relative rounded-3xl ring-1 ring-emerald-100 bg-white p-8 sm:p-12">
            {/* stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} />)}
            </div>

            <blockquote className="text-center max-w-3xl mx-auto">
              <p className="text-lg text-emerald-900/90">“{REVIEWS[i].text}”</p>
              <footer className="mt-4 text-emerald-900/70">
                — <b>{REVIEWS[i].name}</b>, {REVIEWS[i].city}
              </footer>
            </blockquote>

            {/* dots */}
            <div className="mt-8 flex justify-center gap-2">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-2 w-2 rounded-full ${idx === i ? 'bg-emerald-600' : 'bg-emerald-200'}`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT (icons only) */}
      <section className="py-14 bg-emerald-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="rounded-3xl bg-white p-8 sm:p-10 ring-1 ring-emerald-100 grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <p className="text-emerald-900/70">
                We’d love to help. Reach out and we’ll respond quickly.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <a href="tel:+14242605986" className="inline-flex items-center gap-3">
                <span className="p-2 rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  {/* phone icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.4 19.4 0 0 1 3.15 12.8 19.8 19.8 0 0 1 .08 4.18 2 2 0 0 1 2.05 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.1 9.9a16 16 0 0 0 8 8l1.27-1.2a2 2 0 0 1 2.12-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <span className="font-medium">(424) 260-5986</span>
              </a>

              <a href="mailto:vigorouscleanco@gmail.com" className="inline-flex items-center gap-3">
                <span className="p-2 rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  {/* mail icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>
                  </svg>
                </span>
                <span className="font-medium">vigorouscleanco@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

