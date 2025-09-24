"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";

export default function Page() {
  // ----- Testimonial slider data -----
  const testimonials = [
    { img: "/client1.jpg", name: "Maria G.", quote: "Spotless! Eco products were perfect for our pets." },
    { img: "/client2.jpg", name: "Daniel P.", quote: "On time, flat price as quoted, fantastic results." },
    { img: "/client3.jpg", name: "Rina K.", quote: "Our office is fresh every visit. Great team!" },
    { img: "/client4.jpg", name: "Alex H.", quote: "Booking was easy, quality was excellent." },
    { img: "/client5.jpg", name: "Priya S.", quote: "Attention to detail—our kitchen shines." },
    { img: "/client6.jpg", name: "Ethan L.", quote: "Professional, reliable, and friendly." },
  ];
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="min-h-screen bg-white text-slate-800 relative">
      {/* Subtle full logos in corners */}
      <img
        src="/Vigorous_Clean_Co_fulllogo.PNG"
        alt="Vigorous Clean Co full logo"
        className="hidden sm:block absolute top-4 right-4 w-28 opacity-10 pointer-events-none select-none"
      />
      <img
        src="/Vigorous_Clean_Co_fulllogo.PNG"
        alt="Vigorous Clean Co full logo"
        className="hidden sm:block absolute bottom-4 left-4 w-28 opacity-10 pointer-events-none select-none"
      />

      {/* NAVBAR (only Book Now lives here) */}
      <Navbar />

      {/* Promo bar */}
      <div className="w-full bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-2 text-center text-sm md:text-[15px]">
          🎉 <span className="font-semibold">New clients get 10% off</span> with code{" "}
          <span className="bg-white/20 px-2 py-0.5 rounded-md font-semibold tracking-wide">VIGOR10</span>
          {" "}— discount applied at checkout for first-time clients.
        </div>
      </div>

      {/* HERO (no Book button here to avoid duplicates) */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: 'url("/hero.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/40" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 text-center text-white">
          <img
            src="/Vigorous_Clean_Co_TransparentLogo.png"
            alt="Vigorous Clean Co."
            className="h-16 w-16 mx-auto mb-5 rounded-full shadow-lg"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-95">
            Eco-friendly residential & office cleaning with transparent flat-rate pricing in Los Angeles & Orange County.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-xl bg-white text-emerald-700 px-6 py-3 font-semibold shadow hover:bg-emerald-50 transition"
            >
              View Pricing
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-white/80 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              Our Services
            </a>
          </div>

          <div className="mt-6">
            <p className="inline-block rounded-md bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 shadow">
              🎉 Use code <span className="font-bold">VIGOR10</span> at booking. Discount applied at checkout.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES (no prices) */}
      <section id="services" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Our Services</h2>
          <p className="text-center text-slate-600 mt-2">Residential • Office • Rentals / Turnovers</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Residential Cleaning",
                text:
                  "Kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, mopping, trash removal. Deep add-ons available.",
                img: "/residential.jpg",
              },
              {
                title: "Office Cleaning",
                text:
                  "Desks, floors, restrooms, breakrooms, high-touch sanitizing, trash & recycling. Ideal for recurring schedules.",
                img: "/office.jpg",
              },
              {
                title: "Rental / Turnover",
                text:
                  "Move-in / move-out, short-term rental turnovers with checklists and time-sensitive scheduling.",
                img: "/rental.jpg",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img src={s.img} alt={s.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-700">{s.title}</h3>
                  <p className="mt-2 text-slate-600">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À LA CARTE (no prices) */}
      <section id="alacarte" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">À la Carte Services</h2>
          <p className="text-center text-slate-600 mt-2">Popular add-ons and task-based services.</p>
        </div>
        <div className="mt-8 max-w-6xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3 px-6">
          {[
            "Kitchen Only",
            "Bathrooms Only (per 2)",
            "Bedrooms Only (per room)",
            "Living / Common Area",
            "Inside Fridge",
            "Inside Oven",
            "Microwave",
            "Carpet Shampoo (per room)",
            "Interior Windows (min. 5)",
          ].map((name, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-5 flex items-center justify-between"
            >
              <span className="font-medium">{name}</span>
              <a href="/pricing" className="text-emerald-700 font-semibold hover:underline">
                See Pricing →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER (6 clients) */}
      <section id="reviews" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Loved by Clients</h2>
        </div>

        <div className="relative mt-8 max-w-4xl mx-auto">
          {/* Viewport */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${index * 100}%)`, width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm text-center">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-16 w-16 rounded-full object-cover mx-auto mb-3 border border-slate-200"
                    />
                    <div className="flex gap-1 justify-center text-amber-400 mb-3" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                          <path d="M10 15.27l5.18 3.05-1.64-5.81L18 8.63l-6-.09L10 3 8 8.54l-6 .09 4.46 3.88L4.82 18.3 10 15.27z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-slate-700">{t.quote}</p>
                    <p className="mt-3 text-sm text-slate-500">— {t.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-emerald-600 text-white rounded-full h-10 w-10 flex items-center justify-center shadow hover:bg-emerald-700"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-emerald-600 text-white rounded-full h-10 w-10 flex items-center justify-center shadow hover:bg-emerald-700"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-emerald-600" : "bg-slate-300"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — aesthetic card, no extra Book button */}
      <section id="contact" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold text-emerald-700">Contact Us</h2>
            <p className="mt-2 text-slate-600">We’d love to help. Reach out and we’ll respond quickly.</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-6 text-left">
              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-emerald-700">Call or Email</h3>
                <p className="mt-2">
                  Phone:{" "}
                  <a href="tel:14242605986" className="text-emerald-700 font-semibold">
                    (424) 260-5986
                  </a>
                  <br />
                  Email:{" "}
                  <a href="mailto:vigorouscleanco@gmail.com" className="text-emerald-700 font-semibold">
                    vigorouscleanco@gmail.com
                  </a>
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 p-5">
                <h3 className="font-semibold text-emerald-700">Service Area & Hours</h3>
                <p className="mt-2 text-slate-600">
                  Los Angeles County & Orange County
                  <br />
                  Mon–Fri: 8:00 AM – 6:00 PM • Sat: 9:00 AM – 2:00 PM • Sun: Closed
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              First-time clients: use <span className="font-semibold">VIGOR10</span> for 10% off. Applied at checkout.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER with IG/TikTok icons */}
      <footer className="bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold">Vigorous Clean Co.</span> — All Rights Reserved
          </p>
          <p className="text-emerald-50">Serving Los Angeles County & Orange County</p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              {/* IG icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6zM17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-90"
            >
              {/* TikTok icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 fill-white" aria-hidden="true">
                <path d="M168 24a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8 56 56 0 0 0 56 56 8 8 0 0 1 8 8v16a8 8 0 0 1-8 8 71.9 71.9 0 0 1-64-36.9V176a64 64 0 1 1-32-55.4V24zm-40 200a40 40 0 1 0 0-80 40 40 0 0 0 0 80z"/>
              </svg>
              <span>TikTok</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
