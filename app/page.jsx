// app/page.jsx

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// Safe dynamic import for the slider (matches your /components/GallerySlider.jsx)
const GallerySlider = dynamic(() => import("../components/GallerySlider"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      {/* HERO – full-bleed background photo */}
      <section className="relative h-[72vh] sm:h-[82vh] lg:h-[86vh]">
        <Image
          src="/hero-home.jpg"
          alt="Fresh, professionally cleaned living room"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />

        <div className="relative z-10 h-full">
          <div className="container-app h-full flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-gray-100 backdrop-blur mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
              Eco-Friendly · Pet-Safe · Locally Operated
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white max-w-2xl">
              Vigorously <span className="text-emerald-300">Clean.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-gray-100/90 max-w-xl">
              Flat-rate, first-time deep cleans followed by affordable maintenance visits.
              Serving homes and small offices across Los Angeles &amp; the South Bay.
            </p>

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

            {/* Trust badges (facts only) */}
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-100/90">
              <div className="inline-flex items-center gap-2">
                <span className="h-5 w-5 rounded-full bg-white/15 flex items-center justify-center text-[11px]">
                  🧼
                </span>
                First-time deep clean required for new homes
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
                LA &amp; South Bay coverage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (keeps conversion focused; replaces "Popular Services") */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
            <p className="text-gray-600 mt-2">
              Simple, flat-rate cleaning designed for busy LA homes. Every new client starts with a deep clean,
              then you switch to discounted maintenance visits.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "Step 1",
                title: "Book your first-time deep clean",
                desc: "Choose your day and home size. We’ll confirm details and show up ready.",
              },
              {
                step: "Step 2",
                title: "All-Inclusive Deep Clean",
                desc: "A full reset: kitchens, bathrooms, baseboards, and detailed attention where it matters.",
              },
              {
                step: "Step 3",
                title: "Switch to maintenance (discounted)",
                desc: "Pick weekly, bi-weekly, or monthly visits to keep your home consistently fresh.",
              },
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-soft transition"
              >
                <div className="text-xs font-semibold text-primary">{x.step}</div>
                <h3 className="mt-2 font-semibold text-lg">{x.title}</h3>
                <p className="text-gray-600 mt-2">{x.desc}</p>

                {i === 0 && (
                  <div className="mt-4">
                    <Link href="/book" className="text-sm font-medium text-primary hover:underline">
                      Check availability →
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK SLIDER (bigger / more full-width on mobile) */}
      <section className="py-10">
        <div className="container-app">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Recent work</h2>
              <p className="text-gray-600 mt-2">
                Tap through real cleanings from around Los Angeles.
              </p>
            </div>

            <Link href="/book" className="text-sm font-medium hover:underline">
              Book now
            </Link>
          </div>
        </div>

        {/* This wrapper makes the carousel feel larger on mobile */}
        <div className="mt-6 container-app">
          <div className="-mx-4 sm:mx-0">
            <GallerySlider />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready for that first deep clean?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Start with an All-Inclusive Deep Clean, then switch to discounted maintenance visits that fit your schedule.
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








