import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Safe dynamic import (no alias) for the slider
const GallerySlider = dynamic(() => import("../components/GallerySlider"), { ssr: false });

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-20 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium mb-4">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" /> Eco-Friendly · Pet-Safe · Professional
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Your Space, <span className="text-primary">Sparkling with Vigor</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Established in 2025, we provide professional, eco-friendly cleaning for homes, offices, and rentals
                throughout Los Angeles. We keep every space fresh, welcoming, and worry-free.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
                >
                  View Pricing
                </Link>

                {/* Book goes to embedded page on your site */}
                <Link
                  href="/book"
                  className="rounded-2xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition"
                >
                  Book Now
                </Link>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Flexible scheduling · Reliable screened staff · Eco-conscious products
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-soft overflow-hidden ring-1 ring-gray-100">
                <Image
                  src="/hero-home.jpg"
                  alt="Vigorous Clean Co. — professional eco-friendly cleaning"
                  width={1600}
                  height={1067}
                  className="w-full h-auto"
                  priority
                />
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
              { title: "Transparent Pricing", desc: "Flat daily rates by square footage. No hourly games." },
              { title: "Eco & Pet-Friendly", desc: "Approved products only — safe, effective, consistent." },
              { title: "Professional Quality", desc: "Screened cleaners with checklists and standards." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition">
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
                desc: "Baseboards, fixtures, inside appliances, detail work — full refresh.",
              },
              {
                title: "Standard Home Areas",
                desc: "Kitchen, bathrooms, bedrooms, living areas, interior windows & surfaces.",
              },
              {
                title: "Office Clean",
                desc: "Desks, common areas, bathrooms, trash, interior glass, floors.",
              },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-soft">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK SLIDER (full images, no crop) */}
      <section className="container-app py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Recent Work</h2>
        <p className="text-gray-600 mt-2">Homes, offices, and rentals across Los Angeles.</p>
        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* FINAL CTA + DISCLAIMER */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to see that sparkle?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We charge per day, not per hour — we stay until it’s clean.
          </p>
          <div className="mt-6">
            {/* Book goes to embedded page on your site */}
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Your Clean
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            <b>Disclaimer:</b> Cleaners are thoroughly screened and professional; however, Vigorous Clean Co. is not
            liable for loss or theft of unattended valuables. Please secure valuables and disclose fragile/defective items.
            We are not liable for pre-existing damage or normal wear and tear. Specialty or hazardous tasks are excluded
            unless agreed in writing.
          </p>
        </div>
      </section>
    </div>
  );
}

