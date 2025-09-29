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
  // 2 cleaners mandatory beyond ~3,500 sq ft
  { label: "3,501–4,000 sq ft", baseDayRate: 499, daysRecommended: 1, twoCleaners: true },
  { label: "4,001–4,500 sq ft", baseDayRate: 559, daysRecommended: 1, twoCleaners: true },
  { label: "4,501–5,000 sq ft", baseDayRate: 619, daysRecommended: 1, twoCleaners: true },
];

const FREQUENCY_DISCOUNTS: Record<string, number> = {
  OneTime: 0,
  Monthly: 0.05,
  Biweekly: 0.08,
  Weekly: 0.12,
};

const SECOND_CLEANER_FEE = 89; // per day when required

function formatUSD(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n);
}

function calcPrice(dayRate: number, days: number, twoCleaners?: boolean) {
  const base = dayRate * days;
  const extra = twoCleaners ? SECOND_CLEANER_FEE * days : 0;
  return base + extra;
}

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="text-center mb-12">
        <p className="text-sm tracking-wide uppercase text-neutral-500">Eco‑friendly • Flat‑rate • LA & OC</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Simple, flat‑rate pricing by square footage</h1>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
          Add‑ons are included (see list below). We charge per day, not per hour.
          Final price depends on size and condition. Online booking takes 2 minutes.
        </p>
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
          className="inline-block mt-6 rounded-2xl px-5 py-3 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition"
        >
          Book Now
        </a>
      </section>

      {/* Residential / Home Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Homes & Apartments</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TIERS.map((t) => (
            <div key={t.label} className="rounded-2xl border border-neutral-200 p-5 shadow-sm bg-white">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{t.label}</h3>
                {t.twoCleaners && (
                  <span className="text-[11px] rounded-full bg-neutral-100 px-2 py-1 text-neutral-700">
                    2 cleaners required
                  </span>
                )}
              </div>
              <p className="mt-2 text-3xl font-bold">
                {formatUSD(t.baseDayRate)}
                <span className="ml-1 text-sm font-normal text-neutral-500">per day</span>
              </p>
              <p className="mt-1 text-sm text-neutral-600">Recommended: {t.daysRecommended} day{t.daysRecommended > 1 ? "s" : ""}</p>

              {/* Multi‑day options */}
              <div className="mt-4 space-y-2">
                {[1, 2, 3].map((d) => {
                  const price = calcPrice(t.baseDayRate, d, t.twoCleaners && d >= 1);
                  return (
                    <div key={d} className="flex items-center justify-between rounded-xl border border-neutral-200 px-3 py-2">
                      <span className="text-sm">{d} day{d > 1 ? "s" : ""}</span>
                      <span className="text-sm font-medium">{formatUSD(price)}</span>
                    </div>
                  );
                })}
              </div>

              {/* Recurring discounts */}
              <div className="mt-4 rounded-xl bg-neutral-50 p-3">
                <p className="text-xs font-medium text-neutral-700 mb-2">Recurring discounts</p>
                <ul className="text-xs text-neutral-600 space-y-1">
                  {Object.entries(FREQUENCY_DISCOUNTS).map(([k, v]) => (
                    <li key={k} className="flex items-center justify-between">
                      <span>{k}</span>
                      <span>–{Math.round(v * 100)}%</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-emerald-600 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                Book this size
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Office Pricing */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Offices</h2>
        <div className="rounded-2xl border border-neutral-200 p-5 bg-white shadow-sm">
          <p className="text-neutral-600 mb-4">
            Office pricing scales by square footage and frequency. Use the same tiers as above or
            contact us for a tailored plan (after‑hours available).
          </p>
          <ul className="text-sm text-neutral-700 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <li className="rounded-xl border border-neutral-200 p-3">≤ 1,500 sq ft — from {formatUSD(199)}/day</li>
            <li className="rounded-xl border border-neutral-200 p-3">1,501–3,000 sq ft — from {formatUSD(279)}/day</li>
            <li className="rounded-xl border border-neutral-200 p-3">3,001–5,000 sq ft — from {formatUSD(349)}/day (2 cleaners)</li>
          </ul>
          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
            className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Get an office quote
          </a>
        </div>
      </section>

      {/* What’s included */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What’s included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
            <h3 className="font-semibold mb-2">Standard (included)</h3>
            <ul className="list-disc ml-5 text-sm text-neutral-700 space-y-1">
              <li>Kitchens, baths, bedrooms, living areas</li>
              <li>Dusting, surfaces, floors, trash & recycling</li>
              <li>High‑touch sanitizing</li>
              <li>Eco & pet‑safe products</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
            <h3 className="font-semibold mb-2">All‑inclusive add‑ons (no extra fees)</h3>
            <ul className="list-disc ml-5 text-sm text-neutral-700 space-y-1">
              <li>Inside fridge, oven, and microwave</li>
              <li>Interior windows only (min. 5)</li>
              <li>Cabinets & drawers (exteriors; interiors on request)</li>
              <li>Move‑in/out detailing and rental turnovers</li>
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          * We do not clean exterior windows. Two cleaners are mandatory for spaces above ~3,500 sq ft. Prices may vary for heavy build‑up or special conditions.
        </p>
      </section>

      {/* FAQ / Notes */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-4">Good to know</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
            <h3 className="font-semibold">How do day rates work?</h3>
            <p className="text-sm text-neutral-700 mt-2">
              We charge a simple day rate. Whether we’re on‑site 4, 6, or 8 hours, the price is the same—our goal is spotless results.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-5 bg-white">
            <h3 className="font-semibold">Recurring savings</h3>
            <p className="text-sm text-neutral-700 mt-2">
              Save more when you schedule weekly, biweekly, or monthly service. Discounts apply automatically to day rates.
            </p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <a
          href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
          className="inline-block rounded-2xl px-6 py-3 text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Book Online
        </a>
        <p className="mt-3 text-sm text-neutral-600">
          First‑time clients: use <span className="font-semibold">VIGOR10</span> for 10% off.
        </p>
      </div>
    </main>
  );
}

