// app/pricing/page.js

export const metadata = {
  title: "Pricing | Vigorous Clean Co.",
  description:
    "Simple, flat-rate pricing for eco-friendly residential, office, and move-in/move-out cleaning in Los Angeles & Orange County.",
};

const BOOKING_URL =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"; // ← use your real link

function Check() {
  return (
    <svg
      className="h-4 w-4 text-emerald-600"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
    </svg>
  );
}

function Bullet({ children }) {
  return (
    <li className="flex gap-2 items-start">
      <Check />
      <span className="text-slate-700">{children}</span>
    </li>
  );
}

function Card({ badge, title, price, note, bullets = [] }) {
  return (
    <div className="rounded-2xl bg-white shadow-md ring-1 ring-slate-200 overflow-hidden">
      <div className="bg-emerald-600 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            {badge}
          </span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold leading-none">${price}</div>
          <div className="text-xs opacity-90 mt-1">starting</div>
        </div>
      </div>

      <div className="px-6 py-5">
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <Bullet key={i}>{b}</Bullet>
          ))}
        </ul>

        {note && <p className="mt-4 text-sm text-slate-500">{note}</p>}

        <div className="mt-6">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-slate-50">
      {/* Top banner */}
      <div className="bg-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            <p className="text-sm">
              🎉 New clients get <strong>10% off</strong> with code{" "}
              <span className="inline-flex rounded-full bg-white/15 px-2 py-0.5">
                VIGOR10
              </span>
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-1.5 text-emerald-700 font-semibold shadow hover:bg-slate-50"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Page header */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Simple, flat-rate pricing.
        </h1>
        <p className="mt-3 text-slate-600 max-w-2xl">
          Eco-friendly cleaning with transparent, starting rates. Book online in
          minutes — no hidden fees. Serving Los Angeles & Orange County.
        </p>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            badge="Residential"
            title="Home Cleaning"
            price={149}
            bullets={[
              "Standard or deep cleaning for apartments, condos & homes",
              "Kitchen • baths • bedrooms • living areas",
              "Eco-safe products; add-ons available",
              "Flexible scheduling (8am–8pm, 7 days)",
            ]}
            note="Final total depends on size, condition, and selected add-ons."
          />

          <Card
            badge="Office"
            title="Office Cleaning"
            price={199}
            bullets={[
              "Desks • floors • restrooms • breakrooms",
              "Touch-points sanitizing, trash & recycling",
              "Daily, weekly, or custom frequency",
              "After-hours availability",
            ]}
            note="Pricing scales by square footage and frequency."
          />

          <Card
            badge="Move In / Move Out"
            title="Turnover Cleaning"
            price={249}
            bullets={[
              "Top-to-bottom detail for moves & turnovers (incl. short-term rentals)",
              "Checklist available for inspections",
              "Inside cabinets/drawers & appliances by request",
              "Photos available upon completion",
            ]}
            note="Final rate depends on size, condition, and add-ons you choose."
          />
        </div>

        {/* A-la-carte link */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-slate-600">
            Need task-based add-ons? See our{" "}
            <a
              href="/services"
              className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
            >
              À la carte services
            </a>
            .
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-emerald-700"
          >
            Book Online
          </a>
        </div>
      </section>

      {/* Small reassurance strip */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900">
              Flat-rate & Transparent
            </div>
            <div className="text-sm text-slate-600 mt-1">
              No hidden fees — clear, up-front starting rates.
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900">
              Eco & Pet-Safe Products
            </div>
            <div className="text-sm text-slate-600 mt-1">
              Better for your family, team, and the planet.
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-slate-900">
              Easy Online Booking
            </div>
            <div className="text-sm text-slate-600 mt-1">
              Reserve in minutes. Email/SMS reminders included.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

