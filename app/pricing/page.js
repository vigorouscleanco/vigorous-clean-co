// app/pricing/page.js
export const metadata = { title: "Pricing — Vigorous Clean Co." };

const bookingUrl =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services?promo=VIGOR10&utm_source=pricing";

const Section = ({ id, title, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-2xl font-bold text-emerald-700">{title}</h2>
    <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <div className="p-0">{children}</div>
    </div>
  </section>
);

export default function PricingPage() {
  return (
    <div className="min-h-[60vh]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <a href="/" className="mb-4 inline-flex items-center gap-2 text-sm text-emerald-700 hover:underline">
            ← Back to Home
          </a>
          <h1 className="text-4xl font-bold text-emerald-700">Pricing</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            Transparent, flat-rate pricing. New clients use <strong>VIGOR10</strong> for <strong>10% off</strong>
            &nbsp;(applied at checkout).
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-800"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Residential */}
      <Section id="residential" title="Residential (Per Day · One Cleaner up to 3,500 sq ft)">
        <table className="w-full text-left text-sm">
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

        <div className="px-4 py-4">
          <ul className="space-y-1 text-sm text-slate-600">
            <li>• <strong>Multi-day</strong>: extra full days at the same daily rate; short wrap-up ≈ <strong>60%</strong> of daily.</li>
            <li>• <strong>Recurring</strong> discounts: Weekly <strong>20%</strong> • Bi-weekly <strong>15%</strong> • Monthly <strong>10%</strong>.</li>
            <li>• <strong>3,500+ sq ft</strong>: two cleaners mandatory for time & quality.</li>
          </ul>
        </div>
      </Section>

      {/* Office */}
      <Section id="office" title="Office (Per Visit)">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-600">
              <th className="py-3 px-4">Office Size</th>
              <th className="py-3 px-4">Rate</th>
              <th className="py-3 px-4">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {[
              ["0–1,000 sq ft", "$200", "1 cleaner"],
              ["1,001–2,000 sq ft", "$300", "1 cleaner"],
              ["2,001–3,500 sq ft", "$450", "1 cleaner"],
              ["3,501–5,000 sq ft", "Custom Quote", "2 cleaners mandatory"],
              ["5,001–10,000 sq ft", "Custom Quote", "2–3 cleaners recommended"],
            ].map((row, i) => (
              <tr key={i}>
                <td className="py-3 px-4">{row[0]}</td>
                <td className="py-3 px-4">{row[1]}</td>
                <td className="py-3 px-4">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="px-4 py-4">
          <p className="text-sm text-slate-600">
            Recurring: 2×/wk <strong>10%</strong> • 3×/wk <strong>15%</strong> • 4×/wk <strong>20%</strong> • 5×/wk <strong>25%</strong>.
          </p>
        </div>
      </Section>

      {/* À la Carte */}
      <Section id="alacarte" title="À la Carte (Add-Ons)">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-600">
              <th className="py-3 px-4">Service</th>
              <th className="py-3 px-4">Rate</th>
            </tr>
          </thead>
        </table>
        <div className="px-4 pb-4">
          <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
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
            ].map(([label, price]) => (
              <li key={label} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 ring-1 ring-slate-200">
                <span>{label}</span>
                <span className="font-semibold text-emerald-700">{price}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Notes / Policies */}
      <section id="policies" className="mx-auto max-w-6xl px-4 pb-16">
        <h3 className="text-xl font-semibold text-slate-900">Notes & Policies</h3>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-slate-700">
          <li>Prices reflect typical conditions. Heavy buildup, post-construction, or unusual requests may require a custom quote.</li>
          <li>Parking fees (if any) are billed at cost.</li>
          <li>We bring eco & pet-safe supplies. Tell us about sensitivities in your booking notes.</li>
          <li>Rescheduling/cancellations: Please give at least 24 hours’ notice when possible.</li>
        </ul>

        <div className="mt-8">
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-800"
          >
            Book Your Cleaning
          </a>
        </div>

        <div className="mt-6 text-sm">
          <a href="/" className="text-emerald-700 hover:underline">← Back to Home</a>
        </div>
      </section>
    </div>
  );
}

