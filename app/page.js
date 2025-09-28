// app/page.js

const BOOKING_URL =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

function Icon({ d }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Correct small icons
const ICONS = {
  kitchen:
    "M3 10h18M7 10V5h10v5m-6 4v5m-4 0h8M5 10v10h14V10",
  bath:
    "M3 12h18M6 12V7a2 2 0 0 1 2-2h0M20 12v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-2",
  bed:
    "M3 11h18v8H3zM7 11V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
  sofa:
    "M4 14v-2a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2M4 14h16v4H4v-4z",
  fridge:
    "M7 3h10v18H7V3zm0 8h10M9 6h0M9 13h0",
  oven:
    "M4 5h16v14H4V5zm0 4h16M8 9h0M12 9h0M16 9h0",
  carpet:
    "M6 6h12v12H6zM6 10h12M6 14h12",
  windows:
    "M4 4h16v16H4V4zm8 0v16M4 12h16",
  living:
    "M5 16h14v4H5v-4zm2-3h10l1 3H6l1-3z",
  microwave:
    "M5 7h14v10H5V7zm2 2h10M7 12h2M11 12h2",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl bg-[url('/hero-clean.jpg')] bg-cover bg-center">
        <div className="bg-emerald-800/60 p-10 sm:p-16">
          <div className="mx-auto max-w-3xl text-center text-white">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
              <img
                src="/Vigorous_Clean_Co_TransparentLogo.png"
                alt="V logo"
                className="h-10 w-10"
              />
            </div>
            <h1 className="text-4xl font-bold sm:text-5xl">
              Your Space, Sparkling with Vigor.
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Eco-friendly residential & office cleaning with transparent
              flat-rate pricing in Los Angeles & Orange County.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/pricing"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-700 shadow hover:opacity-90"
              >
                View Pricing
              </a>
              <a
                href={BOOKING_URL}
                className="rounded-lg bg-emerald-100/30 px-6 py-3 font-semibold text-white ring-1 ring-white/50 hover:bg-emerald-100/40"
              >
                <span aria-hidden>📆</span> Book Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* À LA CARTE */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold">À la Carte Services</h2>
        <p className="mt-1 text-slate-600">
          Popular add-ons and task-based services. (Full prices on the Pricing
          page.)
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Kitchen Only", icon: "kitchen" },
            { label: "Bathrooms Only (per 2)", icon: "bath" },
            { label: "Bedrooms Only (per room)", icon: "bed" },
            { label: "Living / Common Area", icon: "living" },
            { label: "Inside Fridge", icon: "fridge" },
            { label: "Inside Oven", icon: "oven" },
            { label: "Microwave", icon: "microwave" },
            { label: "Carpet Shampoo (per room)", icon: "carpet" },
            { label: "Interior Windows", icon: "windows" },
          ].map((item) => (
            <a
              key={item.label}
              href="/pricing"
              className="flex items-center justify-between rounded-xl border bg-white p-4 transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="text-emerald-700">
                  <Icon d={ICONS[item.icon]} />
                </span>
                <span className="font-medium">{item.label}</span>
              </div>
              <span className="text-emerald-700">See Pricing →</span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT STRIP — icons only */}
      <section className="mt-16 rounded-2xl bg-white p-6 ring-1 ring-slate-200">
        <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <a
            href="tel:+14242605986"
            className="flex items-center gap-3 text-emerald-700 hover:opacity-90"
          >
            <Icon d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.86.33 1.7.62 2.5a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.67-.67a2 2 0 0 1 2.11-.45c.8.29 1.64.5 2.5.62A2 2 0 0 1 22 16.92z" />
            (424) 260-5986
          </a>
          <a
            href="mailto:vigorouscleanco@gmail.com"
            className="flex items-center gap-3 text-emerald-700 hover:opacity-90"
          >
            <Icon d="M4 4h16v16H4z" />
            vigorouscleanco@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}
