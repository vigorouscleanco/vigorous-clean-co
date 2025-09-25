// app/pricing/page.js
export const metadata = { title: "Pricing — Vigorous Clean Co." };

const Section = ({ title, children }) => (
  <section className="max-w-6xl mx-auto px-4 py-10">
    <h2 className="text-2xl font-bold text-emerald-700 mb-4">{title}</h2>
    <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">{children}</div>
  </section>
);

export default function Pricing() {
  return (
    <div className="min-h-[60vh]">
      <header className="bg-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-4xl font-extrabold text-slate-900">Pricing</h1>
          <p className="text-slate-700 mt-2">
            Flat-rate by square footage. Add à la carte as needed.
          </p>
          <div className="mt-4">
            <a
              href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 text-white px-5 py-2 rounded-lg hover:bg-emerald-800"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>

      <Section title="Residential Cleaning">
        <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
          <li>0–500 sq ft</li>
          <li>501–1,000 sq ft</li>
          <li>1,001–1,500 sq ft</li>
          <li>1,501–2,000 sq ft</li>
          <li>2,001–2,500 sq ft</li>
          <li>2,501+ sq ft — Custom Quote</li>
        </ul>
        <p className="text-sm text-slate-500 mt-4">
          Deep clean add-on available at booking. Recurring discounts apply.
        </p>
      </Section>

      <Section title="Office Cleaning">
        <p className="text-slate-700">
          Offices priced by square footage and schedule. Multi-day jobs may
          require additional cleaners. For spaces over 3,500 sq ft, we
          automatically assign a second cleaner.
        </p>
      </Section>

      <Section title="À la Carte">
        <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
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
      </Section>
    </div>
  );
}

