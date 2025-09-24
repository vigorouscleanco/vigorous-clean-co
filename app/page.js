"use client";

import Navbar from "./components/Navbar";

export default function Page() {
  const bookingUrl =
    "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services?promo=VIGOR10&utm_source=site&utm_campaign=promo10";

  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
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

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white text-emerald-700 px-6 py-3 font-semibold shadow hover:bg-emerald-50 transition"
            >
              Book Now
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/80 px-6 py-3 font-semibold hover:bg-white/10 transition"
            >
              View Pricing
            </a>
          </div>

          {/* 🎉 Promo Banner */}
          <div className="mt-6">
            <p className="inline-block rounded-md bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800 shadow">
              🎉 New Clients: Use code <span className="font-bold">VIGOR10</span> at booking.  
              Discount applied at checkout for first-time clients!
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Our Services</h2>
          <p className="text-center text-slate-600 mt-2">Residential • Office • Rentals / Turnovers</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Residential Cleaning",
                text: "Kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, mopping, trash removal. Deep add-ons available.",
                img: "/residential.jpg",
              },
              {
                title: "Office Cleaning",
                text: "Desks, floors, restrooms, breakrooms, high-touch sanitizing, trash & recycling. Ideal for recurring schedules.",
                img: "/office.jpg",
              },
              {
                title: "Rental / Turnover",
                text: "Move-in / move-out, short-term rental turnovers with checklists and time-sensitive scheduling.",
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

      {/* PRICING */}
      <section id="pricing" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Residential Pricing (Per Day)</h2>
          <p className="text-center text-slate-600 mt-2">
            One cleaner per home up to <span className="font-semibold">3,500 sq ft</span>.  
            For 3,500+ sq ft, <span className="font-semibold">2 cleaners are mandatory</span>.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm bg-white rounded-2xl border border-slate-200">
              <thead>
                <tr className="text-slate-600">
                  <th className="py-3 px-4">Home Size</th>
                  <th className="py-3 px-4">Standard</th>
                  <th className="py-3 px-4">All-Inclusive (Deep)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["0–500 sq ft", "$85", "$100"],
                  ["501–1,000 sq ft", "$150", "$175"],
                  ["1,001–1,500 sq ft", "$195", "$225"],
                  ["1,501–2,000 sq ft", "$250", "$275"],
                  ["2,001–2,500 sq ft", "$300", "$325"],
                  ["2,501–3,500 sq ft", "Custom Quote (1 cleaner)", "Custom Quote (1 cleaner)"],
                  ["3,501–5,000 sq ft", "Custom Quote (2 cleaners mandatory)", "Custom Quote (2 cleaners mandatory)"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 px-4">{row[0]}</td>
                    <td className="py-3 px-4">{row[1]}</td>
                    <td className="py-3 px-4">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
            >
              Book Your Cleaning
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Loved by Clients</h2>
          <p className="text-center text-slate-600 mt-2">Real reviews from happy customers.</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                img: "/review1.jpg",
                quote: "Spotless! The eco products are a big plus for our pets. The team was polite, quick, and thorough.",
                by: "Maria G.",
              },
              {
                img: "/review2.jpg",
                quote: "Showed up on time, price was exactly as quoted, and the results were fantastic. Highly recommend.",
                by: "Daniel P.",
              },
              {
                img: "/review3.jpg",
                quote: "Office looks and smells fresh after every visit. Easy online booking and reminders are a lifesaver.",
                by: "Rina K.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center text-center"
              >
                <img src={r.img} alt={r.by} className="h-16 w-16 rounded-full object-cover mb-3 border border-slate-200" />
                <div className="flex gap-1 text-amber-400 mb-3" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
                      <path d="M10 15.27l5.18 3.05-1.64-5.81L18 8.63l-6-.09L10 3 8 8.54l-6 .09 4.46 3.88L4.82 18.3 10 15.27z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-3 text-slate-700">{r.quote}</p>
                <p className="mt-3 text-sm text-slate-500">{r.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-emerald-700">Contact Us</h2>
          <p className="mt-2 text-slate-700">
            Call{" "}
            <a href="tel:14242605986" className="text-emerald-700 font-semibold">
              (424) 260-5986
            </a>{" "}
            or email{" "}
            <a href="mailto:vigorouscleanco@gmail.com" className="text-emerald-700 font-semibold">
              vigorouscleanco@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold">Vigorous Clean Co.</span> — All Rights Reserved
          </p>
          <p className="text-emerald-50">Serving Los Angeles County & Orange County</p>
          <div className="mt-3 flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-90"
            >
              Instagram
            </a>
            <a
              href="https://www.tiktok.com/@vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:opacity-90"
            >
              TikTok
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
