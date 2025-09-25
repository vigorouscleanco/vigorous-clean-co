// app/page.js

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-700">
        Your Space, Sparkling with Vigor.
      </h1>
      <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
        Eco-friendly residential & office cleaning with transparent flat-rate
        pricing in Los Angeles & Orange County.
      </p>

      <div className="mt-8 flex items-center justify-center gap-4">
        <a
          href="/pricing"
          className="rounded-lg bg-emerald-700 text-white px-6 py-3 font-semibold hover:bg-emerald-800"
        >
          View Pricing
        </a>
        <a
          href="/services"
          className="rounded-lg border border-emerald-700 text-emerald-700 px-6 py-3 font-semibold hover:bg-emerald-50"
        >
          Our Services
        </a>
      </div>
    </section>
  );
}

