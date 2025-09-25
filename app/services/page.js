// app/services/page.js
export const metadata = { title: "Services — Vigorous Clean Co." };

const Card = ({ title, points = [] }) => (
  <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    <ul className="mt-3 space-y-2 text-slate-700">
      {points.map((p, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <a href="/" className="text-sm text-emerald-700 hover:underline">← Back to Home</a>
      <h1 className="mt-2 text-4xl font-extrabold text-emerald-700">Our Services</h1>
      <p className="mt-2 max-w-3xl text-slate-600">
        Full-service residential and office cleaning with eco & pet-safe products. Flat-rate pricing, easy online booking.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card
          title="Residential Cleaning"
          points={[
            "Kitchens: counters, sinks, exterior cabinets, appliance exteriors, floors",
            "Bathrooms: toilets, tubs/showers, mirrors, sinks, floors",
            "Bedrooms & living spaces: dusting, surfaces, vacuum/mop, trash",
            "Deep/All-Inclusive available; recurring discounts offered",
          ]}
        />
        <Card
          title="Office Cleaning"
          points={[
            "Desks & surfaces, monitors (exterior), light keyboard wipe",
            "Restrooms: sinks, toilets/urinals, mirrors, floors",
            "Breakrooms/kitchens: counters, sinks, appliance exteriors, floors",
            "Trash & recycling; high-touch sanitizing",
          ]}
        />
        <Card
          title="Rental / Turnover"
          points={[
            "Move-in / move-out cleans",
            "Short-term rental turnovers with checklist",
            "Laundry/linen reset on request (quote)",
            "Flexible scheduling for tight windows",
          ]}
        />
        <Card
          title="À la Carte Add-ons"
          points={[
            "Inside fridge, inside oven, microwave",
            "Interior windows (min. 5)",
            "Carpet shampoo (per room)",
            "Area/priority rooms only",
          ]}
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="/pricing"
          className="inline-flex items-center rounded-lg bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800"
        >
          See Pricing
        </a>
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
          target="_blank" rel="noreferrer"
          className="inline-flex items-center rounded-lg border border-emerald-700 px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50"
        >
          Book Now
        </a>
      </div>

      <div className="mt-10 text-sm">
        Need something not listed? <a href="/pricing#alacarte" className="text-emerald-700 underline">See add-ons</a> or ask in your booking notes.
      </div>
    </div>
  );
}

