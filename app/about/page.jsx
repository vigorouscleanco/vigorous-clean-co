export const metadata = {
  title: "About Us | Vigorous Clean Co.",
  description:
    "Eco-friendly residential, office, and rental cleaning in Los Angeles & Orange County. Transparent flat-rate pricing and friendly, reliable service.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <a
        href="/"
        className="inline-flex items-center text-slate-600 hover:text-emerald-700 mb-6"
      >
        ← Back to Home
      </a>

      {/* Hero */}
      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          About Us
        </h1>
        <p className="mt-4 text-lg text-slate-700 max-w-3xl">
          Vigorous Clean Co. delivers eco-friendly residential & office cleaning
          with flat-rate transparency, consistent quality, and friendly service.
          We proudly serve Los Angeles County & Orange County.
        </p>
      </header>

      {/* Our Story */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Story</h2>
        <p className="text-slate-700 leading-relaxed">
          <strong>Established in 2025</strong>, Vigorous Clean Co. provides
          professional, eco-friendly cleaning services for homes, offices, and
          rental properties throughout Los Angeles. We specialize in delivering
          spotless, healthy environments with consistent quality and attention
          to detail. From routine office cleanings to Airbnb turnovers and
          move-in/move-out services, our mission is to keep every space fresh,
          welcoming, and worry-free.
          <br />
          <br />
          What makes us different is our commitment to eco-conscious practices,
          reliable staff, and flexible scheduling tailored to each client.
          Whether you’re a property manager, business owner, or busy family,
          Vigorous Clean Co. ensures your cleaning needs are handled with care
          and professionalism—so you can focus on what matters most.
        </p>
      </section>

      {/* What Sets Us Apart */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="text-3xl">🌿</div>
            <h3 className="mt-2 font-semibold text-slate-900">
              Eco-friendly products
            </h3>
            <p className="mt-1 text-slate-700">
              Safer for your family, pets, and the planet—without sacrificing a
              deep clean.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="text-3xl">💎</div>
            <h3 className="mt-2 font-semibold text-slate-900">
              Flat-rate transparency
            </h3>
            <p className="mt-1 text-slate-700">
              Clear pricing by space & scope. No surprises, ever.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5 bg-white shadow-sm">
            <div className="text-3xl">🧹</div>
            <h3 className="mt-2 font-semibold text-slate-900">
              Pro, vetted cleaners
            </h3>
            <p className="mt-1 text-slate-700">
              Friendly, punctual, and trained to deliver consistent results.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Who We Serve</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "Busy families",
            "Small & mid-size offices",
            "Property managers",
            "Airbnb / STR hosts",
            "Students & roommates",
            "Home sellers / realtors",
          ].map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 rounded-full border border-emerald-200 text-emerald-800 bg-emerald-50 text-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      </section>

      {/* Simple stats */}
      <section className="mb-12">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">5★</div>
            <p className="text-slate-600">Service experience</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">Eco</div>
            <p className="text-slate-600">Green & pet-safe products</p>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 text-center bg-white shadow-sm">
            <div className="text-3xl font-extrabold text-slate-900">LA/OC</div>
            <p className="text-slate-600">Local & reliable</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Ready for a spotless space?
          </h3>
          <p className="text-slate-700">
            Book online in minutes—first-time clients get{" "}
            <span className="font-semibold">10% off</span> with{" "}
            <span className="font-mono">VIGOR10</span>.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="/pricing"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 font-medium text-slate-800 hover:bg-slate-50"
          >
            View Pricing
          </a>
          <a
            href={process.env.NEXT_PUBLIC_BOOKING_URL || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white shadow hover:bg-emerald-700"
          >
            <span className="mr-2">📅</span> Book Now
          </a>
        </div>
      </section>
    </main>
  );
}
