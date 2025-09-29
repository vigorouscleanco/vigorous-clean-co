// app/pricing/page.jsx — polished visual design
// Tailwind only. Drop-in replacement for your current app/pricing/page.jsx

export const metadata = {
  title: "Pricing | Vigorous Clean Co.",
  description:
    "Transparent, flat‑rate pricing by square footage for homes and offices. Eco & pet‑safe. Book online in minutes.",
  openGraph: {
    title: "Pricing | Vigorous Clean Co.",
    description:
      "Transparent, flat‑rate pricing by square footage for homes and offices. Eco & pet‑safe. Book online in minutes.",
    url: "https://vigorouscleanco.com/pricing",
    siteName: "Vigorous Clean Co.",
    type: "website",
  },
};

const TIERS = [
  { label: "0–500 sq ft", baseDayRate: 149, daysRecommended: 1 },
  { label: "501–1,000 sq ft", baseDayRate: 189, daysRecommended: 1 },
  { label: "1,001–1,500 sq ft", baseDayRate: 229, daysRecommended: 1 },
  { label: "1,501–2,000 sq ft", baseDayRate: 269, daysRecommended: 1 },
  { label: "2,001–2,500 sq ft", baseDayRate: 319, daysRecommended: 1 },
  { label: "2,501–3,000 sq ft", baseDayRate: 369, daysRecommended: 1 },
  { label: "3,001–3,500 sq ft", baseDayRate: 429, daysRecommended: 1 },
  { label: "3,501–4,000 sq ft", baseDayRate: 499, daysRecommended: 1, twoCleaners: true },
  { label: "4,001–4,500 sq ft", baseDayRate: 559, daysRecommended: 1, twoCleaners: true },
  { label: "4,501–5,000 sq ft", baseDayRate: 619, daysRecommended: 1, twoCleaners: true },
];

const FREQUENCY_DISCOUNTS = {
  OneTime: 0,
  Monthly: 0.05,
  Biweekly: 0.08,
  Weekly: 0.12,
};

const SECOND_CLEANER_FEE = 89; // per day when required

function formatUSD(n) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}

function calcPrice(dayRate, days, twoCleaners) {
  const base = dayRate * days;
  const extra = twoCleaners ? SECOND_CLEANER_FEE * days : 0;
  return base + extra;
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" aria-hidden="true" {...props}>
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-3 py-1 text-[11px] font-medium text-emerald-700 shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" /> Eco‑friendly • LA & OC
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Flat‑rate pricing by square footage
            </h1>
            <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
              We charge per day, not per hour. Add‑ons are included. Book online in minutes.
            </p>
            <a
              href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Residential grid */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Homes & Apartments</h2>
            <p className="mt-1 text-sm text-neutral-600">Choose your size. See 1–3 day totals and recurring savings.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TIERS.map((t) => (
            <div
              key={t.label}
              className="group rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm ring-1 ring-transparent transition hover:shadow-md hover:ring-emerald-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-neutral-900">{t.label}</h3>
                {t.twoCleaners && (
                  <span className="text-[11px] rounded-full bg-neutral-50 px-2 py-1 text-neutral-700 border border-neutral-200">
                    2 cleaners
                  </span>
                )}
              </div>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-bold tracking-tight">{formatUSD(t.baseDayRate)}</span>
                <span className="mb-1 text-sm text-neutral-500">/ day</span>
              </div>
              <p className="mt-1 text-xs text-neutral-600">Recommended: {t.daysRecommended} day{t.daysRecommended > 1 ? "s" : ""}</p>

              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((d) => {
                  const price = calcPrice(t.baseDayRate, d, t.twoCleaners && d >= 1);
                  return (
                    <div
                      key={d}
                      className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm"
                    >
                      <span>{d} day{d > 1 ? "s" : ""}</span>
                      <span className="font-medium">{formatUSD(price)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-3">
                <p className="text-xs font-medium text-neutral-700 mb-2">Recurring discounts</p>
                <ul className="text-xs text-neutral-600 space-y-1">
                  {Object.entries(FREQUENCY_DISCOUNTS).map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between">
                      <span>{k}</span>
                      <span className="font-medium">–{Math.round(v * 100)}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-emerald-600 bg-white py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Book this size
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Offices</h2>
              <p className="mt-1 text-sm text-neutral-600">
                Same simple day‑rate model. After‑hours available. 2 cleaners required above ~3,500 sq ft.
              </p>
            </div>
            <a
              href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Get an office quote
            </a>
          </div>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-neutral-800">
            <li className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">≤ 1,500 sq ft — from {formatUSD(199)}/day</li>
            <li className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">1,501–3,000 sq ft — from {formatUSD(279)}/day</li>
            <li className="rounded-2xl border border-neutral-200 bg-neutral-50 p-3">3,001–5,000 sq ft — from {formatUSD(349)}/day (2 cleaners)</li>
          </ul>
        </div>
      </section>

      {/* Included */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold">What’s included</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">Standard (included)</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {[
                "Kitchens, baths, bedrooms, living areas",
                "Dusting, surfaces, floors, trash & recycling",
                "High‑touch sanitizing",
                "Eco & pet‑safe products",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold">All‑inclusive add‑ons (no extra fees)</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-700">
              {[
                "Inside fridge, oven, and microwave",
                "Interior windows only (min. 5)",
                "Cabinets & drawers (exteriors; interiors on request)",
                "Move‑in/out detailing and rental turnovers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          * We do not clean exterior windows. Prices may vary for heavy build‑up or special conditions.
        </p>
        <div className="mt-8 text-center">
          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Book Online
          </a>
          <p className="mt-3 text-sm text-neutral-600">
            First‑time clients: use <span className="font-semibold">VIGOR10</span> for 10% off.
          </p>
        </div>
      </section>
    </main>
  );
}

