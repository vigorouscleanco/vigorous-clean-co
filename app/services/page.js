// app/services/page.js
"use client";

import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <a href="/" className="inline-flex items-center gap-2 text-sm text-emerald-700 hover:underline">← Back to Home</a>
          <h1 className="mt-2 text-4xl font-bold text-emerald-700">Our Services</h1>
          <p className="mt-2 max-w-2xl text-slate-600">Full-service residential & office cleaning. Eco & pet-safe products by default.</p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Residential */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-700">Residential Cleaning</h2>
          <p className="mt-1 text-slate-700">Standard & deep-clean options. One cleaner per home up to 3,500 sq ft.</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Kitchens: counters, sinks, exterior cabinets, appliances, floors</li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Bathrooms: toilets, tubs/showers, mirrors, sinks, floors</li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Bedrooms & Living Areas: dusting, surfaces, vacuuming, mopping</li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Trash removal, spot-cleaning doors & light switches</li>
          </ul>

          <h3 className="mt-6 font-semibold">À la Carte Add-ons</h3>
          <p className="text-slate-700">Inside fridge, inside oven, microwave, interior windows, carpet shampoo (per room), and more.</p>

          <div className="mt-4 flex gap-3">
            <a href="/pricing#residential" className="rounded-lg bg-emerald-700 px-5 py-2 text-white font-semibold hover:bg-emerald-800">View Residential Pricing</a>
            <a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noreferrer" className="rounded-lg border border-emerald-700 px-5 py-2 font-semibold text-emerald-700 hover:bg-emerald-50">Book Now</a>
          </div>
        </section>

        {/* Office */}
        <section>
          <h2 className="text-2xl font-bold text-emerald-700">Office Cleaning</h2>
          <p className="mt-1 text-slate-700">Desks, restrooms, breakrooms, floors, high-touch sanitizing, trash & recycling.</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Desk & surface dust/wipe, monitors (exterior), keyboards (light wipe)</li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Restrooms: sinks, toilets/urinals, mirrors, floors, consumables refill (by request)</li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Breakrooms/kitchens: counters, sinks, appliance exteriors, floors</li>
            <li className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">Trash & recycling collection</li>
          </ul>

          <div className="mt-4 flex gap-3">
            <a href="/pricing#office" className="rounded-lg bg-emerald-700 px-5 py-2 text-white font-semibold hover:bg-emerald-800">View Office Pricing</a>
            <a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noreferrer" className="rounded-lg border border-emerald-700 px-5 py-2 font-semibold text-emerald-700 hover:bg-emerald-50">Book Now</a>
          </div>
        </section>

        <div className="mt-10 text-center text-sm">
          <a href="/" className="text-emerald-700 hover:underline">← Back to Home</a>
        </div>
      </main>
    </>
  );
}

