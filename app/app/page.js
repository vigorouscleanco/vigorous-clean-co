"use client";
import Navbar from "../components/Navbar";

export default function Page() {
  const bookingLink = process.env.NEXT_PUBLIC_BOOKING_URL || "#";
  const phone = process.env.NEXT_PUBLIC_PHONE || "(xxx) xxx-xxxx";
  const email = process.env.NEXT_PUBLIC_EMAIL || "hello@yourdomain.com";

  const tiers = [
    { size: "0–500 sq ft", standard: "$85 / day", deep: "$100 / day" },
    { size: "501–1,000 sq ft", standard: "$150 / day", deep: "$175 / day" },
    { size: "1,001–1,500 sq ft", standard: "$195 / day", deep: "$225 / day" },
    { size: "1,501–2,000 sq ft", standard: "$250 / day", deep: "$275 / day" },
    { size: "2,001–2,500 sq ft", standard: "$300 / day", deep: "$325 / day" },
    { size: "2,501–3,500 sq ft", standard: "Custom Quote (1 cleaner)", deep: "Custom Quote (1 cleaner)" },
    { size: "3,501–5,000 sq ft", standard: "Custom Quote (2 cleaners mandatory)", deep: "Custom Quote (2 cleaners mandatory)" },
  ];

  const officeRows = [
    { size: "0–1,000 sq ft", rate: "$200 per visit (1 cleaner)" },
    { size: "1,001–2,000 sq ft", rate: "$300 per visit (1 cleaner)" },
    { size: "2,001–3,500 sq ft", rate: "$450 per visit (1 cleaner)" },
    { size: "3,501–5,000 sq ft", rate: "Custom Quote (2 cleaners mandatory)" },
    { size: "5,001–10,000 sq ft", rate: "Custom Quote (2–3 cleaners recommended)" },
  ];

  const alacarte = [
    { name: "Kitchen Only", price: "$75" },
    { name: "Bathrooms Only (per 2)", price: "$85" },
    { name: "Bedrooms Only (per room)", price: "$25" },
    { name: "Living / Common Area", price: "$50" },
    { name: "Inside Fridge", price: "$40" },
    { name: "Inside Oven", price: "$40" },
    { name: "Microwave", price: "$15" },
    { name: "Carpet Shampoo (per room)", price: "$45" },
    { name: "Interior Windows (min. 5)", price: "$10 / window" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar bookingLink={bookingLink} />

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Space, <span className="text-emerald-600">Sparkling with Vigor</span>.
            </h1>
            <p className="mt-4 text-slate-600">
              Eco & pet-friendly cleaning across Los Angeles and Orange County. Transparent flat-rate pricing.
              One dedicated cleaner for smaller homes — additional staff for larger spaces to finish faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={bookingLink} target="_blank" className="rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-700">Book a Cleaning</a>
              <a href="#pricing" className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold hover:border-emerald-400 hover:text-emerald-700">See Pricing</a>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Pricing */}
      <section id="pricing" className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Residential Pricing</h2>
          <p className="mt-2 text-slate-600">
            Charged per day and by square footage. One cleaner per home up to 3,500 sq ft. For 3,500+ sq ft,
            <span className="font-semibold"> 2 cleaners are mandatory</span>.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-600">
                  <th className="py-3 pr-4">Home Size</th>
                  <th className="py-3 pr-4">Standard</th>
                  <th className="py-3 pr-4">All-Inclusive (Deep)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {tiers.map((t, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4">{t.size}</td>
                    <td className="py-3 pr-4">{t.standard}</td>
                    <td className="py-3 pr-4">{t.deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* À la carte */}
      <section id="alacarte" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">À la Carte Services</h2>
          <p className="mt-2 text-slate-600">Flat, task-based pricing regardless of home size.</p>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alacarte.map((i, idx) => (
              <div key={idx} className="rounded-2xl border border-slate-200 p-5 bg-white flex items-center justify-between">
                <span className="font-medium">{i.name}</span>
                <span className="text-slate-700">{i.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Pricing */}
      <section id="offices" className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Office Cleaning</h2>
          <p className="mt-2 text-slate-600">Per-visit all-inclusive pricing, ideal for recurring service.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-600">
                  <th className="py-3 pr-4">Office Size</th>
                  <th className="py-3 pr-4">Rate (Per Visit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {officeRows.map((r, i) => (
                  <tr key={i}>
                    <td className="py-3 pr-4">{r.size}</td>
                    <td className="py-3 pr-4">{r.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-emerald-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-2">Call us at {phone} or email {email} to schedule your cleaning today!</p>
          <a href={bookingLink} target="_blank" className="mt-4 inline-block rounded-2xl bg-white px-5 py-3 text-emerald-700 font-semibold shadow hover:bg-emerald-50">Book Now</a>
        </div>
      </section>
    </div>
  );
}
