// app/page.jsx

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Safe dynamic import for the slider
const GallerySlider = dynamic(() => import("../components/GallerySlider"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      {/* HERO – full-bleed background photo */}
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh]">
        {/* Background image */}
        <Image
          src="/hero-home.jpg"
          alt="Fresh, professionally cleaned living room"
          fill
          priority
          className="object-cover"
        />

        {/* Dark gradient overlay so text is readable */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/55 via-black/40 to-black/10" />

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container-app h-full flex flex-col justify-center">
            {/* Top pill / badge row */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-gray-100 backdrop-blur mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
              Eco-Friendly · Pet-Safe · Locally Operated
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white max-w-2xl">
              Your Home, <span className="text-emerald-300">Vigorously Clean.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-100/90 max-w-xl">
              Flat-rate, first-time deep cleans followed by affordable maintenance
              visits. Serving homes and small offices across Los Angeles &amp; the
              South Bay.
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="rounded-2xl bg-primary px-6 py-3 text-white text-sm sm:text-base font-medium shadow-soft hover:opacity-90 transition"
              >
                Book a First-Time Deep Clean
              </Link>

              <Link
                href="/pricing"
                className="rounded-2xl border border-white/60 bg-white/10 px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-white/20 transition"
              >
                View Pricing
              </Link>
            </div>

            {/* Trust badges (no reviews, just facts) */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-100/90">
              <div className="inline-flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center text-[11px]">
                  🧼
                </span>
                First-Time Deep Clean Required for All New Homes
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center text-[11px]">
                  🌿
                </span>
                Eco &amp; pet-friendly products
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center text-[11px]">
                  📍
                </span>
                Serving LA &amp; South Bay
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Flat, Transparent Pricing",
                desc: "Deep cleans and maintenance visits priced by square footage. No surprise hourly billing.",
              },
              {
                title: "Eco & Pet-Friendly",
                desc: "We use approved, effective products chosen with kids, pets, and allergies in mind.",
              },
              {
                title: "Consistent Standards",
                desc: "Screened cleaners who follow checklists, not guesses — so every visit feels the same.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition bg-white"
              >
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-grayLight">
        <div className="container-app py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">Popular Services</h2>
            <Link href="/services" className="text-sm font-medium hover:underline">
              See all services
            </Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "All-Inclusive Deep Clean",
                desc: "Baseboards, fixtures, inside fridge & oven, detail work — a full reset for new clients.",
              },
              {
                title: "Maintenance Clean",
                desc: "Kitchen, bathrooms, living areas, dusting, mopping & vacuuming to keep things fresh.",
              },
              {
                title: "Office & Workspace",
                desc: "Desks, common areas, trash, bathrooms, and floors — ideal for small offices and studios.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-soft"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK SLIDER */}
      <section className="container-app py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Recent Work</h2>
        <p className="text-gray-600 mt-2">
          A peek at homes and offices we&apos;ve cleaned across Los Angeles.
        </p>
        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready for that first deep clean?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We start every new client with an All-Inclusive Deep Clean. After that, you
            can switch to discounted maintenance visits that fit your schedule.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Now
            </Link>
            <Link
              href="/pricing"
              className="rounded-2xl border border-gray-200 px-8 py-3 font-medium hover:bg-gray-50 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}




