"use client";

import { useState } from "react";

const REVIEWS = [
  { name: "Marissa G.", city: "Santa Monica", text: "Five stars! My apartment looks brand new. They were on time, friendly, and eco-products smelled great." },
  { name: "Diego R.", city: "Downtown LA", text: "Booked a deep clean after a remodel—wow. Dust gone, floors shining. Transparent flat rates = no surprises." },
  { name: "Sophie L.", city: "West Hollywood", text: "I manage three rentals. Turnovers are smooth and consistent now. Huge time saver, guests keep complimenting cleanliness." },
  { name: "Ken P.", city: "Pasadena", text: "Office clean is spotless every week. Team is professional, detail-oriented, and easy to schedule with." },
  { name: "Nina B.", city: "Culver City", text: "Inside fridge + oven add-ons were worth it. Everything gleamed like new. Booking online was super simple." },
  { name: "Alicia M.", city: "Long Beach", text: "Great value and reliable. Love that they use pet-safe products. My place feels fresh without harsh smells." },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const prev = () => setI((i - 1 + REVIEWS.length) % REVIEWS.length);
  const next = () => setI((i + 1) % REVIEWS.length);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16" id="testimonials">
      <h2 className="text-3xl font-bold text-emerald-700 text-center">Loved by Clients</h2>

      <div className="relative mt-8 rounded-2xl border bg-white shadow-sm p-8">
        <div className="text-emerald-600 text-xl mb-3">★★★★★</div>
        <p className="text-lg leading-relaxed text-slate-800">{REVIEWS[i].text}</p>
        <p className="mt-4 font-semibold text-slate-900">
          {REVIEWS[i].name} <span className="text-slate-500">• {REVIEWS[i].city}</span>
        </p>

        {/* controls */}
        <button
          aria-label="Previous"
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-600 text-white grid place-items-center hover:bg-emerald-700"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-emerald-600 text-white grid place-items-center hover:bg-emerald-700"
        >
          ›
        </button>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-emerald-600" : "bg-slate-300"}`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

