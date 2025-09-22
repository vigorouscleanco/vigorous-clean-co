"use client";

export default function Page() {
  const bookingUrl =
    "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section id="home" className="text-center py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-700">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Eco-friendly cleaning with transparent flat-rate pricing across Los Angeles County & Orange County.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
            >
              Book Now
            </a>
            <a
              href="#pricing"
              className="inline-block rounded-lg border border-emerald-600 px-6 py-3 text-emerald-700 font-semibold hover:bg-emerald-50"
            >
              See Pricing
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="rounded-xl border p-4">Flat-rate • No hidden fees</div>
            <div className="rounded-xl border p-4">Eco & pet-safe products</div>
            <div className="rounded-xl border p-4">Online booking & reminders</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-emerald-700 text-center">Our Services</h2>
          <p className="text-center text-gray-600 mt-2">Residential • Office • Rentals</p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-emerald-600">Residential Cleaning</h3>
              <p className="text-gray-600 mt-2">
                Kitchens, bathrooms, bedrooms, living spaces, dusting, mopping, vacuuming, trash removal.
              </p>
            </div>

            <div className="border rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-emerald-600">Office Cleaning</h3>
              <p className="text-gray-600 mt-2">
                Desks, floors, restrooms, kitchens/breakrooms, high-touch surfaces, trash & recycling.
              </p>
            </div>

            <div className="border rounded-xl shadow-sm p-6">
              <h3 className="text-xl font-semibold text-emerald-600">Rental / Turnover</h3>
              <p className="text-gray-600 mt-2">
                Move-in / move-out, Airbnb turnovers, and special requests with checklists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Pricing */}
      <section id="pricing" className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
            Residential Pricing (Per Day)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-300 text-left bg-white">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 border border-slate-300">Home Size</th>
                  <th className="p-3 border border-slate-300">Standard</th>
                  <th className="p-3 border border-slate-300">All-Inclusive (Deep)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-300">0–500 sq ft</td>
                  <td className="p-3 border border-slate-300">$85</td>
                  <td className="p-3 border border-slate-300">$100</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-300">501–1,000 sq ft</td>
                  <td className="p-3 border border-slate-300">$150</td>
                  <td className="p-3 border border-slate-300">$175</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-300">1,001–1,500 sq ft</td>
                  <td className="p-3 border border-slate-300">$195</td>
                  <td className="p-3 border border-slate-300">$225</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-300">1,501–2,000 sq ft</td>
                  <td className="p-3 border border-slate-300">$250</td>
                  <td className="p-3 border border-slate-300">$275</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-300">2,001–2,500 sq ft</td>
                  <td className="p-3 border border-slate-300">$300</td>
                  <td className="p-3 border border-slate-300">$325</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-300">2,501–3,500 sq ft</td>
                  <td className="p-3 border border-slate-300">Custom Quote (1 cleaner)</td>
                  <td className="p-3 border border-slate-300">Custom Quote (1 cleaner)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-300">3,501–5,000 sq ft</td>
                  <td className="p-3 border border-slate-300">Custom Quote (2 cleaners mandatory)</td>
                  <td className="p-3 border border-slate-300">Custom Quote (2 cleaners mandatory)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="text-sm text-gray-600 mt-4 space-y-2">
            <li>• If cleaning requires multiple days for one cleaner, each additional full day is billed at the same daily rate.</li>
            <li>• Short wrap-up day available at ~60% of the daily rate (half-day finish).</li>
            <li>• Recurring discounts: Weekly 20% • Bi-weekly 15% • Monthly 10%.</li>
          </ul>
        </div>
      </section>

      {/* À la Carte */}
      <section id="alacarte" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-700 text-center">
            À la Carte Services
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Flat, task-based pricing regardless of home size (oversized areas may require a custom quote).
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { name: "Kitchen Only", price: "$75" },
              { name: "Bathrooms Only (per 2)", price: "$85" },
              { name: "Bedrooms Only (per room)", price: "$25" },
              { name: "Living / Common Area", price: "$50" },
              { name: "Inside Fridge", price: "$40" },
              { name: "Inside Oven", price: "$40" },
              { name: "Microwave", price: "$15" },
              { name: "Carpet Shampoo (per room)", price: "$45" },
              { name: "Interior Windows (min. 5)", price: "$10 / window" },
            ].map((item, idx) => (
              <div key={idx} className="rounded-xl border p-5 bg-white flex items-center justify-between">
                <span className="font-medium">{item.name}</span>
                <span className="text-slate-700">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Pricing */}
      <section id="offices" className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
            Office Cleaning Pricing (Per Visit)
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border border-slate-300 text-left bg-white">
              <thead className="bg-slate-100">
                <tr>
                  <th className="p-3 border border-slate-300">Office Size</th>
                  <th className="p-3 border border-slate-300">Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="p-3 border border-slate-300">0–1,000 sq ft</td><td className="p-3 border border-slate-300">$200 (1 cleaner)</td></tr>
                <tr><td className="p-3 border border-slate-300">1,001–2,000 sq ft</td><td className="p-3 border border-slate-300">$300 (1 cleaner)</td></tr>
                <tr><td className="p-3 border border-slate-300">2,001–3,500 sq ft</td><td className="p-3 border border-slate-300">$450 (1 cleaner)</td></tr>
                <tr><td className="p-3 border border-slate-300">3,501–5,000 sq ft</td><td className="p-3 border border-slate-300">Custom Quote (2 cleaners mandatory)</td></tr>
                <tr><td className="p-3 border border-slate-300">5,001–10,000 sq ft</td><td className="p-3 border border-slate-300">Custom Quote (2–3 cleaners recommended)</td></tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-3 text-center">
            Recurring office discounts: 2×/wk 10% • 3×/wk 15% • 4×/wk 20% • 5×/wk 25%.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-700 text-center">FAQs</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">Do you charge by the hour?</h3>
              <p className="mt-2 text-gray-600">No — we charge flat daily rates by square footage, so you always know the price upfront.</p>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">What if cleaning takes multiple days?</h3>
              <p className="mt-2 text-gray-600">Each additional day is billed at the same daily rate. If the last day is short, we offer a half-day at ~60% of the daily rate.</p>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">How many cleaners come?</h3>
              <p className="mt-2 text-gray-600">One cleaner for homes up to 3,500 sq ft. For 3,500+ sq ft homes, two cleaners are mandatory. Larger offices may need 2–3+.</p>
            </div>
            <div className="rounded-xl border p-5">
              <h3 className="font-semibold">Are your products safe?</h3>
              <p className="mt-2 text-gray-600">Yes. We use non-toxic, biodegradable cleaners that are safe for kids and pets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Call{" "}
            <a href="tel:4242605986" className="text-emerald-700 font-semibold">
              (424) 260-5986
            </a>{" "}
            or email{" "}
            <a href="mailto:vigorouscleanco@gmail.com" className="text-emerald-700 font-semibold">
              vigorouscleanco@gmail.com
            </a>
            .
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
          >
            Book Online
          </a>
        </div>
      </section>

      {/* Footer (always at the bottom) */}
      <footer className="bg-emerald-600 text-white text-center py-8">
        <p>© {new Date().getFullYear()} Vigorous Clean Co. — All Rights Reserved</p>
        <p className="mt-2 text-sm">Serving Los Angeles County & Orange County</p>
      </footer>
    </main>
  );
}
