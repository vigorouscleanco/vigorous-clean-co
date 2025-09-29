// app/pricing/page.js

export const metadata = {
  title: 'Pricing | Vigorous Clean Co.',
  description:
    'Flat-rate, transparent pricing for eco-friendly residential, office, and move-in/move-out cleaning across Los Angeles & Orange County.',
};

// EDIT THIS ONCE IF YOUR BOOKING LINK CHANGES
const BOOKING_URL =
  'https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services';

// Starting prices (easy to tweak)
const PRICES = {
  residentialFrom: 149,
  officeFrom: 199,
  moveFrom: 249,
  alaCarte: {
    kitchen: 79,
    bathrooms2: 89,
    bedroom: 35,
    fridge: 35,
    oven: 35,
    windowsEach: 10, // min 5
    carpetRoom: 79,
    microwave: 20,
  },
};

// Minimal inline icons (no libraries)
const Icon = {
  Home: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5 12 4l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  ),
  Office: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 21h16V6a1 1 0 0 0-1-1h-7v6H4v10Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 11v10M12 11v10M15.5 8.5h3M15.5 12h3M15.5 15.5h3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Move: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 16V9h10v7H3Zm10 0h4l4-4V9h-8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  ),
  Kitchen: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h16v5H4zM4 9h16v11H4z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M8 4v16M16 4v16" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Bath: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 12V7a3 3 0 1 1 6 0v5" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Bed: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 18v-4a2 2 0 0 1 2-2h14v6M3 18h18" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 12h4v2H6z" fill="currentColor"/>
    </svg>
  ),
  Fridge: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 10h12M9 7v3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Oven: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7 8h2M11 8h2M15 8h2" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Windows: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="1.8" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Carpet: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="8" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M6 10h12M6 14h12" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Microwave: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/>
      <rect x="7" y="9" width="8" height="6" stroke="currentColor" strokeWidth="1.6"/>
      <circle cx="17.5" cy="12" r="1" fill="currentColor"/>
      <circle cx="17.5" cy="15" r="1" fill="currentColor"/>
    </svg>
  ),
};

function Price({ amount }) {
  return (
    <div className="mt-3 flex items-end gap-1">
      <span className="text-4xl font-extrabold tracking-tight text-slate-900">${amount}</span>
      <span className="mb-1 text-slate-500">starting</span>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
      {children}
    </span>
  );
}

function PlanCard({ icon, title, price, bullets }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <Price amount={price} />
      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-6">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          Book Online
        </a>
      </div>
    </div>
  );
}

function AlaCard({ icon, label, price, note }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:shadow-md">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
        {icon}
      </span>
      <div className="flex-1">
        <p className="font-medium text-slate-900">{label}</p>
        {note ? <p className="text-sm text-slate-500">{note}</p> : null}
      </div>
      <div className="text-right">
        <div className="text-sm text-slate-500">from</div>
        <div className="text-lg font-semibold text-slate-900">${price}</div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-gradient-to-b from-emerald-50/40 to-white">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-10 sm:pt-14">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-emerald-500 p-[1px] shadow-sm">
          <div className="rounded-3xl bg-white/95 px-6 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto max-w-3xl text-center">
              <Tag>Los Angeles & Orange County</Tag>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Simple, flat-rate pricing.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Eco-friendly cleaning with transparent, starting rates. Book online in minutes — no hidden fees.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700"
                >
                  Book Now
                </a>
                <a
                  href="tel:+14242605986"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
                >
                  Call (424) 260-5986
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core packages */}
      <section className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-3">
        <PlanCard
          icon={Icon.Home}
          title="Residential Cleaning"
          price={PRICES.residentialFrom}
          bullets={[
            'Standard & deep clean options',
            'Kitchens • baths • bedrooms • living areas',
            'Eco-friendly supplies on request',
          ]}
        />
        <PlanCard
          icon={Icon.Office}
          title="Office Cleaning"
          price={PRICES.officeFrom}
          bullets={[
            'Desks • floors • restrooms • breakrooms',
            'Touch-points • trash & recycling',
            'Flexible daily or weekly schedules',
          ]}
        />
        <PlanCard
          icon={Icon.Move}
          title="Move-In / Move-Out"
          price={PRICES.moveFrom}
          bullets={[
            'Top-to-bottom detail for move days',
            'Appliance interiors by request',
            'Inside cabinets • drawers • closets',
          ]}
        />
      </section>

      {/* À la carte */}
      <section className="mx-auto mt-14 max-w-6xl px-4">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">À la Carte Services</h2>
          <a href="/services" className="text-emerald-700 hover:text-emerald-800">
            See all services →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AlaCard icon={Icon.Kitchen}   label="Kitchen Only"                 price={PRICES.alaCarte.kitchen} />
          <AlaCard icon={Icon.Bath}      label="Bathrooms Only (per 2)"       price={PRICES.alaCarte.bathrooms2} />
          <AlaCard icon={Icon.Bed}       label="Bedrooms Only (per room)"     price={PRICES.alaCarte.bedroom} />
          <AlaCard icon={Icon.Fridge}    label="Inside Fridge"                price={PRICES.alaCarte.fridge} />
          <AlaCard icon={Icon.Oven}      label="Inside Oven"                  price={PRICES.alaCarte.oven} />
          <AlaCard icon={Icon.Windows}   label="Interior Windows (min 5)"     price={PRICES.alaCarte.windowsEach} note="$10 each" />
          <AlaCard icon={Icon.Carpet}    label="Carpet Shampoo (per room)"    price={PRICES.alaCarte.carpetRoom} />
          <AlaCard icon={Icon.Microwave} label="Microwave"                    price={PRICES.alaCarte.microwave} />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Prices shown are starting estimates and may vary by size, condition, and add-ons. You’ll see a clear quote during booking —
          no surprises.
        </p>
      </section>

      {/* FAQ */}
      <section className="mx-auto mt-16 max-w-6xl px-4 pb-16">
        <h2 className="text-2xl font-semibold text-slate-900">Pricing FAQs</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <details className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do you bring your own supplies?
            </summary>
            <p className="mt-2 text-slate-600">
              Yes. We bring all standard supplies. If you prefer green products, let us know while booking —
              we’re happy to use eco-friendly options.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do you service my area?
            </summary>
            <p className="mt-2 text-slate-600">
              We cover Los Angeles & Orange County. Add your address during booking and we’ll confirm availability right away.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              How are prices calculated?
            </summary>
            <p className="mt-2 text-slate-600">
              Rates are based on size, scope, and condition. You’ll see a clear quote (and any add-ons) before you confirm.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm">
            <summary className="cursor-pointer list-none font-medium text-slate-900">
              Do I need to be home?
            </summary>
            <p className="mt-2 text-slate-600">
              Not required. Many clients provide access codes or key boxes. We’ll text when we’re on the way and when finished.
            </p>
          </details>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-white hover:bg-emerald-700"
          >
            Book Online
          </a>
          <a
            href="tel:+14242605986"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-slate-700 hover:bg-slate-50"
          >
            Call (424) 260-5986
          </a>
        </div>
      </section>
    </main>
  );
}
