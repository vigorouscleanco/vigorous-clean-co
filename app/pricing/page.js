// app/pricing/page.js
export const metadata = {
  title: 'Pricing | Vigorous Clean Co.',
  description:
    'Transparent flat-rate cleaning for homes, offices, and move-in/move-out in Los Angeles & Orange County. Eco-friendly, reliable, and easy to book.',
};

const BOOKING_URL =
  'https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services'; // ← replace if your link changes

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-100">
      {children}
    </span>
  );
}

function Card({ title, tags = [], children, ctaText = 'Book Now', href = BOOKING_URL }) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
      <div className="mt-3 text-slate-600 leading-relaxed">{children}</div>
      <div className="mt-5">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM5 9h14v10H5V9Z" fill="currentColor"/>
          </svg>
          {ctaText}
        </a>
      </div>
    </div>
  );
}

function ALaCarteItem({ icon, label, href = '/pricing#alacarte' }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-slate-700 shadow-sm transition hover:shadow-md"
    >
      <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
      <span className="ms-auto text-slate-400">→</span>
    </a>
  );
}

// simple inline icons (no libs)
const Icons = {
  Home: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    </svg>
  ),
  Office: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 21h18V4a1 1 0 0 0-1-1h-8v7H3v11Z" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M7 12v9M11 12v9M15 10h3M15 13h3M15 16h3" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Move: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M3 17V9h10v8H3Zm10 0h4l4-4V9h-8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
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

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* Hero */}
      <header className="mx-auto max-w-3xl text-center">
        <span className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100">
          Transparent & Fair
        </span>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Simple, flat-rate pricing.
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Eco-friendly cleaning with clear options for homes, offices, and move-in/move-out. Book online in minutes.
        </p>
      </header>

      {/* Core packages */}
      <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card
          title="Residential Cleaning"
          tags={['LA & OC', 'Eco-friendly', 'Flat-rate']}
        >
          Standard or deep cleaning for apartments, condos, and houses. Kitchens, baths, bedrooms, and living areas —
          plus à la carte add-ons if needed.
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            <li>Flexible scheduling (Mon–Sun, 8am–8pm)</li>
            <li>All supplies included; green products available</li>
            <li>Great for recurring maintenance</li>
          </ul>
        </Card>

        <Card
          title="Office Cleaning"
          tags={['After-hours', 'Reliable', 'Flat-rate']}
        >
          Routine office cleaning: desks, floors, restrooms, breakrooms, touch-points, trash & recycling. Ideal for small
          offices and suites.
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            <li>Custom schedules (daily/weekly)</li>
            <li>Checklists & quality control</li>
            <li>Eco-forward, professional staff</li>
          </ul>
        </Card>

        <Card
          title="Move-In / Move-Out"
          tags={['Detailed', 'Time-sensitive']}
        >
          Thorough, top-to-bottom cleaning for move-ins/outs & turnovers (including Airbnb). Checklists available so
          you (or your landlord) know it’s done right.
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
            <li>Appliance exteriors/interiors on request</li>
            <li>Inside cabinets, drawers & closets available</li>
            <li>Ideal before photos or inspections</li>
          </ul>
        </Card>

        <Card
          title="Turnovers (Short-Term Rentals)"
          tags={['Fast', 'Consistent', 'Laundry add-on']}
        >
          Airbnb/STR reset with checklists, linen rotation, restocking, and photo confirmations (optional).
        </Card>
      </section>

      {/* À la carte */}
      <section id="alacarte" className="mt-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">À la Carte Services</h2>
          <a href="/services" className="text-emerald-700 hover:text-emerald-800">See all services →</a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ALaCarteItem icon={Icons.Kitchen} label="Kitchen Only" />
          <ALaCarteItem icon={Icons.Bath} label="Bathrooms Only (per 2)" />
          <ALaCarteItem icon={Icons.Bed} label="Bedrooms Only (per room)" />
          <ALaCarteItem icon={Icons.Fridge} label="Inside Fridge" />
          <ALaCarteItem icon={Icons.Oven} label="Inside Oven" />
          <ALaCarteItem icon={Icons.Windows} label="Interior Windows" />
          <ALaCarteItem icon={Icons.Carpet} label="Carpet Shampoo (per room)" />
          <ALaCarteItem icon={Icons.Microwave} label="Microwave" />
        </div>

        <p className="mt-4 text-sm text-slate-500">
          Need something else? Add it in the booking notes or <a className="text-emerald-700 hover:text-emerald-800" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">ask us during booking</a>.
        </p>
      </section>

      {/* FAQ (no JS) */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-900">Pricing FAQs</h2>
        <div className="mt-4 space-y-3">
          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none font-medium text-slate-900">Do you bring your own supplies?</summary>
            <p className="mt-2 text-slate-600">
              Yes. Our team brings all standard supplies and tools. If you prefer green products, let us know at booking — we’re happy to use eco-friendly options.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none font-medium text-slate-900">Do you service my area?</summary>
            <p className="mt-2 text-slate-600">
              We service Los Angeles & Orange County. If you’re nearby but unsure, add your address in booking and we’ll confirm availability quickly.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none font-medium text-slate-900">How does pricing work?</summary>
            <p className="mt-2 text-slate-600">
              Residential and office pricing is flat-rate based on space size & scope. Move-in/out and add-ons are quoted clearly during booking so there are no surprises.
            </p>
          </details>
          <details className="rounded-xl border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer list-none font-medium text-slate-900">Do I need to be home?</summary>
            <p className="mt-2 text-slate-600">
              Not required. Many clients provide access codes or key boxes. We’ll text when we’re on the way (and when complete).
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
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-slate-700 hover:bg-slate-50"
          >
            Call (424) 260-5986
          </a>
        </div>
      </section>
    </main>
  );
}


