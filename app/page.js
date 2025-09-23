"use client";

export default function Page() {
  const bookingUrl =
    "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section id="home" className="px-6 py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-emerald-700">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700">
            Eco-friendly residential & office cleaning with transparent flat-rate pricing in Los Angeles & Orange County.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
            >
              Book Now
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-600 px-6 py-3 text-emerald-700 font-semibold hover:bg-emerald-50 transition"
            >
              View Pricing
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">Flat-rate • No hidden fees</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">Eco & pet-safe products</div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">Online booking & reminders</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Our Services</h2>
          <p className="text-center text-slate-600 mt-2">Residential • Office • Rentals/Turnovers</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Residential Cleaning",
                text:
                  "Kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, mopping, trash removal. Deep add-ons available.",
              },
              {
                title: "Office Cleaning",
                text:
                  "Desks, floors, restrooms, breakrooms, high-touch sanitizing, trash & recycling. Ideal for recurring schedules.",
              },
              {
                title: "Rental / Turnover",
                text:
                  "Move-in / move-out, short-term rental turnovers with checklists and time-sensitive scheduling.",
              },
            ].map((c, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition"
              >
                <h3 className="text-xl font-semibold text-emerald-600">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESIDENTIAL PRICING */}
      <section id="pricing" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Residential Pricing (Per Day)</h2>
          <p className="text-center text-slate-600 mt-2">
            One cleaner per home up to <span className="font-semibold">3,500 sq ft</span>. For 3,500+ sq ft,&nbsp;
            <span className="font-semibold">2 cleaners are mandatory</span>.
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

          {/* Policies */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <span className="font-semibold">Multi-Day:</span> If one cleaner needs more than a day, each additional
              full day bills at the same daily rate. Short wrap-up day available at ~60%.
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <span className="font-semibold">Recurring Discounts:</span> Weekly 20% • Bi-weekly 15% • Monthly 10%.
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              <span className="font-semibold">All-Inclusive:</span> Includes inside fridge/oven, interior windows,
              carpet shampoo (per room), and detailed dusting.
            </div>
          </div>
        </div>
      </section>

      {/* A LA CARTE */}
      <section id="alacarte" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">À la Carte Services</h2>
          <p className="text-center text-slate-600 mt-2">
            Flat, task-based pricing regardless of home size (oversized areas may require a custom quote).
          </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Kitchen Only", "$75"],
              ["Bathrooms Only (per 2)", "$85"],
              ["Bedrooms Only (per room)", "$25"],
              ["Living / Common Area", "$50"],
              ["Inside Fridge", "$40"],
              ["Inside Oven", "$40"],
              ["Microwave", "$15"],
              ["Carpet Shampoo (per room)", "$45"],
              ["Interior Windows (min. 5)", "$10 / window"],
            ].map(([name, price], i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 flex items-center justify-between">
                <span className="font-medium">{name}</span>
                <span className="text-slate-700">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICE PRICING */}
      <section id="offices" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">Office Cleaning (Per Visit)</h2>
          <p className="text-center text-slate-600 mt-2">
            Perfect for recurring schedules. 3,500+ sq ft requires 2 cleaners; 5,000–10,000 sq ft → 2–3 recommended.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm bg-white rounded-2xl border border-slate-200">
              <thead>
                <tr className="text-slate-600">
                  <th className="py-3 px-4">Office Size</th>
                  <th className="py-3 px-4">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {[
                  ["0–1,000 sq ft", "$200 (1 cleaner)"],
                  ["1,001–2,000 sq ft", "$300 (1 cleaner)"],
                  ["2,001–3,500 sq ft", "$450 (1 cleaner)"],
                  ["3,501–5,000 sq ft", "Custom Quote (2 cleaners mandatory)"],
                  ["5,001–10,000 sq ft", "Custom Quote (2–3 cleaners recommended)"],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="py-3 px-4">{row[0]}</td>
                    <td className="py-3 px-4">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-center text-sm text-slate-600">
            Recurring discounts: 2×/wk 10% • 3×/wk 15% • 4×/wk 20% • 5×/wk 25%.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">What Clients Say</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["“Spotless! The eco products are a big plus for our pets.”", "— Maria G."],
              ["“Showed up on time and the flat price was exactly as quoted.”", "— Daniel P."],
              ["“Office looks and smells fresh every visit. Highly recommend.”", "— Rina K."],
            ].map(([quote, by], i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700">{quote}</p>
                <p className="mt-3 text-sm text-slate-500">{by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-700 text-center">FAQs</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              [
                "Do you charge by the hour?",
                "No — pricing is flat per day and by square footage, so you always know the cost upfront.",
              ],
              [
                "What if the job takes multiple days?",
                "Each full extra day is billed at the same daily rate. A short wrap-up day is ~60% of the daily rate.",
              ],
              [
                "How many cleaners come?",
                "One cleaner for homes up to 3,500 sq ft. For 3,500+ sq ft, two cleaners are mandatory. Larger offices may require 2–3+.",
              ],
              [
                "Are your products safe?",
                "Yes — we use eco-friendly, non-toxic products that are safe for children and pets.",
              ],
            ].map(([q, a], i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-semibold">{q}</h3>
                <p className="mt-2 text-slate-600">{a}</p>
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
            .
          </p>

          <div className="mt-6">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-700 transition"
            >
              Book Online
            </a>
          </div>

          {/* OPTIONAL: Embed Square (uncomment to show booking inline) */}
          {/*
          <div className="mt-10">
            <iframe
              src="https://squareup.com/appointments/buyer/widget/0d8cas6ix7qhc2/L9K9470312P89"
              style={{ border: "none", width: "100%", height: "900px" }}
              allowFullScreen
            />
          </div>
          */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-center">
              © {new Date().getFullYear()} <span className="font-semibold">Vigorous Clean Co.</span> — All Rights Reserved
            </p>
            <p className="text-sm text-emerald-50">Serving Los Angeles County & Orange County</p>

            {/* Socials with icons */}
            <div className="mt-2 flex items-center gap-6">
              <a
                href="https://www.instagram.com/vigorouss.co"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-90"
              >
                {/* Instagram icon */}
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
        </div>
      </footer>
    </main>
  );
}
