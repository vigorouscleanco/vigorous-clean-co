// app/page.js
"use client";

/* --------- SETTINGS --------- */
const BOOKING_URL =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

/* --------- SMALL INLINE ICONS (no libraries) --------- */
function PhoneIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 5a2 2 0 0 1 2-2h1l2 4-2 1c1 3 3 5 6 6l1-2 4 2v1a2 2 0 0 1-2 2h-1C9.82 17.82 6.18 14.18 4 9V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>)}
function MailIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 8l9 6 9-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function KitchenIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="9" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M6 7h12v3H6z" stroke="currentColor" strokeWidth="1.6"/><circle cx="9" cy="8.5" r="1" fill="currentColor"/><circle cx="12" cy="8.5" r="1" fill="currentColor"/><circle cx="15" cy="8.5" r="1" fill="currentColor"/></svg>)}
function BathIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2Z" stroke="currentColor" strokeWidth="1.6"/><path d="M7 12V8a3 3 0 0 1 3-3h.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function BedIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="10" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 16v3M21 16v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function SofaIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="11" width="16" height="5" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M6 11V9a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6"/></svg>)}
function FridgeIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M7 11h10" stroke="currentColor" strokeWidth="1.6"/><path d="M9 7v2M9 13v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function OvenIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><rect x="6" y="9" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.6"/><circle cx="8" cy="6.5" r="1" fill="currentColor"/><circle cx="12" cy="6.5" r="1" fill="currentColor"/><circle cx="16" cy="6.5" r="1" fill="currentColor"/></svg>)}
function MicrowaveIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M7 10h5M7 14h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="18" cy="12" r="1" fill="currentColor"/><circle cx="18" cy="15" r="1" fill="currentColor"/></svg>)}
function CarpetIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M6 10h12M6 14h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>)}
function WindowIcon(){return(<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="1.6"/></svg>)}

/* --------- PAGE --------- */
export default function HomePage() {
  // LA/OC vibe photos from Unsplash (no uploads needed)
  const HERO =
    "https://images.unsplash.com/photo-1524758631624-997b1e8b5bb1?q=80&w=1600&auto=format&fit=crop";
  const GALLERY = [
    "https://images.unsplash.com/photo-1505691723518-36a5ac3b2a59?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?q=80&w=1200&auto=format&fit=crop",
  ];

  const A_LA_CARTE = [
    { name: "Kitchen Only",                icon: <KitchenIcon /> },
    { name: "Bathrooms (per 2)",           icon: <BathIcon /> },
    { name: "Bedrooms (per room)",         icon: <BedIcon /> },
    { name: "Living / Common Area",        icon: <SofaIcon /> },
    { name: "Inside Fridge",               icon: <FridgeIcon /> },
    { name: "Inside Oven",                 icon: <OvenIcon /> },
    { name: "Microwave",                   icon: <MicrowaveIcon /> },
    { name: "Carpet Shampoo",              icon: <CarpetIcon /> },
    { name: "Interior Windows",            icon: <WindowIcon /> },
  ];

  return (
    <main className="min-h-screen">
      {/* Promo bar */}
      <div className="w-full bg-emerald-700 text-white">
        <div className="mx-auto max-w-6xl px-6 py-2 text-center text-sm">
          🎉 New clients get <strong>10% off</strong> with code <strong>VIGOR10</strong> — first-time clients only.
        </div>
      </div>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO})` }}
      >
        <div className="bg-black/40">
          <div className="mx-auto max-w-6xl px-6 py-20 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Your Space, Sparkling with Vigor.
            </h1>
            <p className="mt-4 text-lg text-emerald-50/95">
              Eco-friendly residential & office cleaning with transparent flat-rate pricing in LA & OC.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow hover:shadow-md"
              >
                Book Now
              </a>
              <a
                href="/pricing"
                className="rounded-xl bg-emerald-700 px-6 py-3 font-semibold text-white ring-1 ring-emerald-500 hover:bg-emerald-800"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mb-6 text-3xl font-bold text-emerald-800">Recent Work</h2>
        <p className="mb-8 text-slate-600">Homes, offices, and rentals — tidy, sanitized, photo-ready.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((src) => (
            <figure key={src} className="group overflow-hidden rounded-2xl ring-1 ring-slate-200">
              <img
                src={src}
                alt=""
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US (replaces testimonials) */}
      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="mb-6 text-3xl font-bold text-emerald-800">Why Choose Vigorous Clean Co.?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald-100">
              <h3 className="font-semibold text-emerald-800">Transparent Flat Rates</h3>
              <p className="mt-2 text-slate-700">No hidden fees. Clear pricing by square footage, with optional add-ons.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald-100">
              <h3 className="font-semibold text-emerald-800">Eco & Pet-Safe Products</h3>
              <p className="mt-2 text-slate-700">Healthy, low-fragrance products that clean effectively and safely.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 ring-1 ring-emerald-100">
              <h3 className="font-semibold text-emerald-800">Reliable Pros</h3>
              <p className="mt-2 text-slate-700">Screened, trained, and consistent cleaners you can trust in your space.</p>
            </div>
          </div>
        </div>
      </section>

      {/* À LA CARTE (no prices) */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="mb-6 text-3xl font-bold text-emerald-800">À la Carte Services</h2>
        <p className="mb-8 text-slate-600">Popular add-ons and task-based services (pricing on the Pricing page).</p>
        <div className="grid md:grid-cols-3 gap-4">
          {A_LA_CARTE.map((item) => (
            <a
              key={item.name}
              href="/pricing#alacarte"
              className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 hover:shadow"
            >
              <span className="text-emerald-700">{item.icon}</span>
              <span className="font-semibold">{item.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* SERVICE AREAS (LA & OC trust signal) */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h2 className="mb-6 text-3xl font-bold text-emerald-800">Service Areas</h2>
        <p className="text-slate-700">
          Los Angeles County & Orange County — including Santa Monica, West Hollywood, Downtown LA, Pasadena, Culver City,
          Long Beach, Irvine, Anaheim, and nearby neighborhoods.
        </p>
      </section>

      {/* CONTACT — icons only (chat is in layout) */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-4">
          <a href="tel:+14242605986" className="flex items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:shadow">
            {PhoneIcon()} <span className="font-semibold">(424) 260-5986</span>
          </a>
          <a href="mailto:vigorouscleanco@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white p-5 ring-1 ring-slate-200 hover:shadow">
            {MailIcon()} <span className="font-semibold">vigorouscleanco@gmail.com</span>
          </a>
        </div>
      </section>
    </main>
  );
}
