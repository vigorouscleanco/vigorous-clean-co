// app/page.js
"use client";

export default function Page() {
  return (
    <main>
      {/* Simple header (one header only) */}
      <header className="bg-emerald-700 text-white">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Vigorous Clean Co. logo" className="h-8 w-8" />
            <span className="font-semibold">Vigorous Clean Co.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/services" className="hover:opacity-80">Services</a>
            <a href="/pricing" className="hover:opacity-80">Pricing</a>
            <a href="/about" className="hover:opacity-80">About</a>
            <a href="/account" className="hover:opacity-80">Login</a>
          </nav>
          <a
            href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-white/10 px-4 py-2 hover:bg-white/20"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Hero uses /public/hero-clean.jpg — upload it there */}
      <section
        className="relative isolate"
        style={{
          backgroundImage: 'url(/hero-clean.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-slate-900/50">
          <div className="mx-auto max-w-5xl px-4 py-24 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-semibold">
              Your Space, Sparkling with Vigor.
            </h1>
            <p className="mt-4 text-lg opacity-90">
              Eco-friendly residential & office cleaning with flat-rate transparency.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="/pricing"
                className="rounded-lg bg-white text-emerald-700 px-6 py-3 font-medium hover:bg-white/90"
              >
                View Pricing
              </a>
              <a
                href="/services"
                className="rounded-lg bg-emerald-600/90 px-6 py-3 font-medium hover:bg-emerald-600"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal content so we know build is green */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-semibold">Welcome</h2>
        <p className="mt-3 text-slate-600">
          If you can see this page with the hero image and single header, your deployment is good.
          We’ll add the rest (A-la-carte icons, FAQ, phone/email icons, gallery, etc.) once it’s stable.
        </p>
      </section>
    </main>
  );
}

