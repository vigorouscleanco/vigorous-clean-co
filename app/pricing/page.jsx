export const metadata = { title: "Pricing — Vigorous Clean Co." };

const residentialStandard = [
  { range: "0–500 sq ft", price: "$85 / day" },
  { range: "501–1,000 sq ft", price: "$150 / day" },
  { range: "1,001–1,500 sq ft", price: "$195 / day" },
  { range: "1,501–2,000 sq ft", price: "$250 / day" },
  { range: "2,001–2,500 sq ft", price: "$300 / day" },
  { range: "2,501–3,500 sq ft", price: "Custom Quote (1 cleaner)" },
  { range: "3,501–5,000 sq ft", price: "Custom Quote (2 cleaners mandatory)" },
  { range: "5,001–7,500 sq ft", price: "Custom Quote (3 cleaners recommended)" },
  { range: "7,501+ sq ft", price: "Custom Quote (4+ cleaners)" },
];

const residentialAllIn = [
  { range: "0–500 sq ft", price: "$100 / day" },
  { range: "501–1,000 sq ft", price: "$175 / day" },
  { range: "1,001–1,500 sq ft", price: "$225 / day" },
  { range: "1,501–2,000 sq ft", price: "$275 / day" },
  { range: "2,001–2,500 sq ft", price: "$325 / day" },
];

const aLaCarte = [
  { item: "Kitchen Only", price: "$75" },
  { item: "Bathrooms Only (per 2)", price: "$85" },
  { item: "Bedrooms Only (per room)", price: "$25" },
  { item: "Living Room / Common Area", price: "$50" },
  { item: "Inside Fridge", price: "$40" },
  { item: "Inside Oven", price: "$40" },
  { item: "Microwave", price: "$15" },
  { item: "Carpet Shampoo (per room)", price: "$45" },
  { item: "Interior Windows (min 5)", price: "$10 / window" },
];

const officePerVisit = [
  { range: "0–1,000 sq ft", price: "$200 per visit (1 cleaner)" },
  { range: "1,001–2,000 sq ft", price: "$300 per visit (1 cleaner)" },
  { range: "2,001–3,500 sq ft", price: "$450 per visit (1 cleaner)" },
  { range: "3,501–5,000 sq ft", price: "Custom Quote (2 cleaners mandatory)" },
  { range: "5,001–10,000 sq ft", price: "Custom Quote (2–3 cleaners recommended)" },
  { range: "10,001–20,000 sq ft", price: "Custom Quote (3–5 cleaners recommended)" },
  { range: "20,000+ sq ft", price: "Custom Quote (5–10+ cleaners required)" },
];

export default function PricingPage() {
  return (
    <div className="container-app py-14">
      <h1 className="text-3xl font-semibold">Simple Square-Foot Pricing</h1>
      <p className="text-gray-600 mt-4 max-w-3xl">
        Flat daily rates — never hourly. Each day is one cleaner (up to ~8 hours).
        Larger spaces may require multiple days or additional cleaners.
      </p>

      {/* Residential */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Residential (Per Day)</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Standard</h3>
            <ul className="mt-3 space-y-2">
              {residentialStandard.slice(0,5).map((t) => (
                <li key={t.range} className="flex items-center justify-between">
                  <span className="text-gray-700">{t.range}</span><span className="font-medium">{t.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-gray-600">
              {residentialStandard.slice(5).map((t) => (
                <div key={t.range} className="flex items-center justify-between">
                  <span>{t.range}</span><span className="font-medium">{t.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">All-Inclusive (Deep Clean)</h3>
            <ul className="mt-3 space-y-2">
              {residentialAllIn.map((t) => (
                <li key={t.range} className="flex items-center justify-between">
                  <span className="text-gray-700">{t.range}</span><span className="font-medium">{t.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-gray-500">
              All-Inclusive adds inside fridge & oven, carpet shampoo, and interior windows.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-grayLight p-6">
          <h4 className="font-semibold">À la Carte (task-based)</h4>
          <ul className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-gray-700">
            {aLaCarte.map((x) => (
              <li key={x.item} className="flex items-center justify-between rounded-lg bg-white border border-gray-100 px-3 py-2">
                <span>{x.item}</span><span className="font-medium">{x.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-2xl bg-white border border-gray-100 p-6">
          <h4 className="font-semibold">Recurring Discounts</h4>
          <ul className="text-gray-700 mt-2 list-disc list-inside">
            <li>Weekly: <b>20% off</b> each visit</li>
            <li>Bi-weekly: <b>15% off</b> each visit</li>
            <li>Monthly: <b>10% off</b> each visit</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">
            If a home requires multiple days, each additional day is billed at the same daily rate (half-day possible when finishing early).
          </p>
        </div>
      </section>

      {/* Office */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Office (Per Visit, All-Inclusive)</h2>
        <div className="mt-4 rounded-2xl border border-gray-100 p-6">
          <ul className="space-y-2">
            {officePerVisit.map((t) => (
              <li key={t.range} className="flex items-center justify-between">
                <span className="text-gray-700">{t.range}</span><span className="font-medium">{t.price}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-sm text-gray-600">
            Includes trash, bathrooms, breakroom/kitchenette, vacuum/mop, dusting, disinfecting high-touch surfaces, and interior glass.
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Recurring: 2 days/week <b>10% off</b>, 3 days/week <b>15% off</b>, 4 days/week <b>20% off</b>, 5 days/week <b>25% off</b>.
          </div>
        </div>
      </section>

      {/* Booking + disclaimer */}
      <div className="mt-10 flex flex-wrap gap-3">
        <a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noopener" className="rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition">
          Book Your Clean
        </a>
        <a href="mailto:vigorouscleanco@gmail.com" className="rounded-2xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition">
          vigorouscleanco@gmail.com
        </a>
      </div>

      <p className="mt-6 text-xs text-gray-500">
        <b>Disclaimer:</b> Vigorous Clean Co. is not liable for pre-existing damage, normal wear and tear, or items not disclosed as fragile.
        Services are provided on a best-effort basis; access, utilities, and safe working conditions must be provided by the client.
        Specialty or hazardous tasks are excluded unless agreed in writing.
      </p>
    </div>
  );
}
