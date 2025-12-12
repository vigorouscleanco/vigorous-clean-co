// app/page.jsx

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// IMPORTANT: path is ../components, not ./components
const GallerySlider = dynamic(() => import("../components/GallerySlider"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-20 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT: TEXT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium mb-4">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />{" "}
                Eco-Friendly · Pet-Safe · Professional
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Your Space,{" "}
                <span className="text-primary">Sparkling with Vigor</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                We provide professional, eco-friendly cleaning for homes, offices,
                and rentals throughout Los Angeles &amp; Orange County. One visit
                or ongoing — we keep every space fresh, welcoming, and worry-free.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
                >
                  View Pricing
                </Link>

                <Link
                  href="/book"
                  className="rounded-2xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition"
                >
                  Book Now
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Flat daily rates · Reliable screened staff · Eco-conscious products
              </p>
            </div>

            {/* RIGHT: BIG IMAGE (FILLS THE CARD) */}
            <div className="relative rounded-2xl shadow-soft overflow-hidden ring-1 ring-gray-100 h-[260px] sm:h-[360px] md:h-[480px]">
              <Image
                src="/hero-home.jpg"
                alt="Vigorous Clean Co. — professional eco-friendly cleaning"
                fill
                className="object-cover"
                priority
              />
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
                title: "Transparent Pricing",
                desc: "Flat daily rates by square footage. No hourly games or surprises.",
              },
              {
                title: "Eco & Pet-Friendly",
                desc: "Approved products only — safe for kids, pets, and sensitive spaces.",
              },
              {
                title: "Professional Quality",
                desc: "Screened cleaners with checklists, standards, and real accountability.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition"
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
                desc: "Baseboards, fixtures, inside appliances, detail work — a full reset.",
              },
              {
                title: "Standard Home Cleaning",
                desc: "Kitchen, bathrooms, bedrooms, living areas, interior windows & surfaces.",
              },
              {
                title: "Office & Commercial",
                desc: "Desks, common areas, bathrooms, trash, interior glass, and floors.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-soft transition"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK SLIDER */}
      <section className="container-app py-16 sm:py-20">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Recent Work</h2>
            <p className="text-gray-600 mt-2">
              A glimpse of the homes and offices we&apos;ve cleaned across Los Angeles.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready to see that sparkle?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We charge per day, not per hour — one cleaner, up to ~8 hours. We stay
            until it feels right, not when the clock runs out.
          </p>
          <div className="mt-6">
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Your Clean
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}





