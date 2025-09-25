// app/services/page.js
export const metadata = { title: "Services — Vigorous Clean Co." };

const Card = ({ title, desc }) => (
  <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
    <h3 className="font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-slate-600">{desc}</p>
  </div>
);

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-extrabold text-emerald-700">Our Services</h1>
      <p className="mt-3 text-slate-600">
        Residential • Office • Rentals/Turnovers • À la Carte
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Residential Cleaning"
          desc="Kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, mopping, trash. Deep clean available."
        />
        <Card
          title="Office Cleaning"
          desc="Desks & surfaces, restrooms, breakrooms, floors, high-touch sanitizing, trash & recycling."
        />
        <Card
          title="Rental / Turnover"
          desc="Move-in/move-out and short-term rental turnovers with checklists and tight timelines."
        />
        <Card
          title="À la Carte Add-ons"
          desc="Inside fridge/oven, microwave, interior windows, carpet shampoo (per room), and more."
        />
      </div>

      <div className="mt-8 flex gap-3">
        <a href="/pricing" className="rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">
          See Pricing
        </a>
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-emerald-700 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
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


