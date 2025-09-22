"use client";

import Navbar from "./components/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-emerald-700">
          Welcome to Vigorous Clean Co.
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Eco-friendly cleaning services with flat-rate pricing in LA & Orange County.
        </p>
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
        >
          Book Now
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-emerald-700 text-center">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Residential • Office • Rentals
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="border rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-emerald-600">
              Residential Cleaning
            </h3>
            <p className="text-gray-600 mt-2">
              Keep your home fresh and spotless with eco & pet-friendly products.
            </p>
          </div>

          <div className="border rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-emerald-600">
              Office Cleaning
            </h3>
            <p className="text-gray-600 mt-2">
              A healthier, cleaner workplace with flexible scheduling.
            </p>
          </div>

          <div className="border rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-emerald-600">
              Rental Cleaning
            </h3>
            <p className="text-gray-600 mt-2">
              Perfect for move-ins, move-outs, and Airbnb turnovers.
            </p>
          </div>
        </div>
      </section>

      {/* Residential Pricing */}
      <section id="pricing" className="py-16 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
            Residential Pricing (Per Day)
          </h2>
          <table className="w-full border border-slate-300 text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3 border border-slate-300">Home Size</th>
                <th className="p-3 border border-slate-300">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-300">0–500 sq ft</td><td className="p-3 border border-slate-300">$100</td></tr>
              <tr><td className="p-3 border border-slate-300">501–1,000 sq ft</td><td className="p-3 border border-slate-300">$175</td></tr>
              <tr><td className="p-3 border border-slate-300">1,001–1,500 sq ft</td><td className="p-3 border border-slate-300">$225</td></tr>
              <tr><td className="p-3 border border-slate-300">1,501–2,000 sq ft</td><td className="p-3 border border-slate-300">$275</td></tr>
              <tr><td className="p-3 border border-slate-300">2,001–2,500 sq ft</td><td className="p-3 border border-slate-300">$325</td></tr>
              <tr><td className="p-3 border border-slate-300">2,501+ sq ft</td><td className="p-3 border border-slate-300">Custom Quote</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* À la Carte Services */}
      <section id="alacarte" className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-emerald-700 text-center">
          À la Carte Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
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
            <div
              key={idx}
              className="border rounded-xl shadow-sm p-5 flex items-center justify-between"
            >
              <span className="font-medium">{item.name}</span>
              <span className="text-slate-700">{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Office Pricing */}
      <section id="offices" className="py-16 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4 text-center">
            Office Cleaning Pricing
          </h2>
          <table className="w-full border border-slate-300 text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-3 border border-slate-300">Office Size</th>
                <th className="p-3 border border-slate-300">Rate</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-slate-300">0–1,000 sq ft</td><td className="p-3 border border-slate-300">$200</td></tr>
              <tr><td className="p-3 border border-slate-300">1,001–2,000 sq ft</td><td className="p-3 border border-slate-300">$300</td></tr>
              <tr><td className="p-3 border border-slate-300">2,001–3,500 sq ft</td><td className="p-3 border border-slate-300">$450</td></tr>
              <tr><td className="p-3 border border-slate-300">3,501+ sq ft</td><td className="p-3 border border-slate-300">Custom Quote</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-emerald-700 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-6">
          Call{" "}
          <a
            href="tel:4242605986"
            className="text-emerald-700 font-semibold"
          >
            (424) 260-5986
          </a>{" "}
          or email{" "}
          <a
            href="mailto:vigorouscleanco@gmail.com"
            className="text-emerald-700 font-semibold"
          >
            vigorouscleanco@gmail.com
          </a>
          .
        </p>
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700"
        >
          Book Online
        </a>
      </section>
    </>
  );
}
