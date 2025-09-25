// app/pricing/page.js
export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-emerald-700">Pricing</h1>
      <p className="mt-3 text-slate-600">
        Transparent flat-rate pricing. Add à la carte as needed.
      </p>

      {/* Residential */}
      <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">Residential (Per Day)</h2>
        <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
          <li>0–500 sq ft</li>
          <li>501–1,000 sq ft</li>
          <li>1,001–1,500 sq ft</li>
          <li>1,501–2,000 sq ft</li>
          <li>2,001–2,500 sq ft</li>
          <li>2,501+ sq ft — Custom Quote</li>
        </ul>
        <p className="mt-3 text-sm text-slate-500">
          Deep add-ons available. Recurring discounts apply.
        </p>
      </div>

      {/* Office */}
      <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">Office (Per Visit)</h2>
        <p className="mt-3 text-slate-700">
          Priced by square footage and schedule. 3,500+ sq ft requires two cleaners.
        </p>
      </div>

      {/* À la Carte */}
      <div className="mt-6 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">À la Carte</h2>
        <ul className="mt-3 grid gap-2 text-slate-700 sm:grid-cols-2">
          <li>Kitchen Only</li>
          <li>Bathrooms Only (per 2)</li>
          <li>Bedrooms Only (per room)</li>
          <li>Living / Common Area</li>
          <li>Inside Fridge</li>
          <li>Inside Oven</li>
          <li>Microwave</li>
          <li>Carpet Shampoo (per room)</li>
          <li>Interior Windows (min. 5)</li>
        </ul>
      </div>

      <div className="mt-8">
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          Book Now
        </a>
      </div>

      <div className="mt-8 text-sm">
        <a href="/" className="text-emerald-700 hover:underline">← Back to Home</a>
      </div>
    </section>
  );
}


