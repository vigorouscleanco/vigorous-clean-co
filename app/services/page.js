// app/services/page.js
export const metadata = { title: "Services — Vigorous Clean Co." };

const Card = ({ title, desc }) => (
  <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6 shadow-sm">
    <h3 className="font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-600 mt-2">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-slate-900">Our Services</h1>
      <p className="text-slate-700 mt-2">
        Residential • Office • Rentals / Turnovers • À la Carte
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card
          title="Residential Cleaning"
          desc="Kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, mopping, trash removal. Deep clean & recurring discounts available."
        />
        <Card
          title="Office Cleaning"
          desc="Desks, floors, restrooms, breakrooms, high-touch sanitizing, trash & recycling. Ideal for recurring schedules."
        />
        <Card
          title="Rental / Turnover"
          desc="Move-in/move-out and short-term rental turnovers with checklists and time-sensitive scheduling."
        />
      </div>

      <div className="mt-10">
        <a
          href="/pricing"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 text-white px-5 py-3 hover:bg-emerald-800"
        >
          See Pricing
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}

