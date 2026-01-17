// app/page.jsx

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// NOTE: Your file is /components/GallerySlider.jsx (not GallerySlider)
// If you renamed the component to GallerySlider.jsx, change this import accordingly.
const GallerySlider = dynamic(() => import("../components/GallerySlider"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      {/* HERO – full-bleed background photo */}
      <section className="relative h-[70vh] sm:h-[80vh] lg:h-[85vh]">
        <Image
          src="/hero-home.jpg"
          alt="Fresh, professionally cleaned living room"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/55 via-black/40 to-black/15" />

        {/* Content */}
        <div className="relative z-10 h-full">
          <div className="container-app h-full flex flex-col justify-center">
            {/* Top pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-gray-100 backdrop-blur mb-4 w-fit">
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

            {/* CTAs */}
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

            {/* Quick badges (no reviews) */}
            <div className="mt-6 grid gap-2 text-xs sm:text-sm text-gray-100/90 max-w-2xl">
              <div className="inline-flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-white/15 flex items-center justify-center text-[12px]">
                  🧼
                </span>
                First-time deep clean required for all new homes
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-white/15 flex items-center justify-center text-[12px]">
                  🌿
                </span>
                Eco &amp; pet-friendly products
              </div>
              <div className="inline-flex items-center gap-2">
                <span className="h-6 w-6 rounded-full bg-white/15 flex items-center justify-center text-[12px]">
                  📍
                </span>
                Los Angeles &amp; South Bay
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">How Vigorous Clean Co. Works</h2>
            <p className="text-gray-600 mt-3">
              Simple, flat-rate cleaning designed for busy LA households. Every new client starts with a
              one-time All-Inclusive Deep Clean — then we keep things maintained with discounted ongoing visits.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                step: "Step 1",
                title: "Book your first-time Deep Clean",
                desc: "Choose your home size and pick a date that works for you.",
              },
              {
                step: "Step 2",
                title: "We deep clean & confirm your maintenance rate",
                desc: "After we see your home once, we confirm the best maintenance price for your frequency.",
              },
              {
                step: "Step 3",
                title: "Stay clean with discounted upkeep",
                desc: "Weekly, bi-weekly, or monthly maintenance to keep your home consistently fresh.",
              },
            ].map((x, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-soft transition"
              >
                <div className="text-xs font-semibold text-primary">{x.step}</div>
                <h3 className="mt-2 font-semibold text-lg">{x.title}</h3>
                <p className="text-gray-600 mt-2">{x.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Now
            </Link>
            <Link
              href="/pricing"
              className="rounded-2xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED + WHY BOOK US (replaces “Popular Services”) */}
      <section className="bg-grayLight">
        <div className="container-app py-16 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              What’s Included in Your Deep Clean
            </h2>
            <p className="text-gray-600 mt-2">
              A true reset — so your maintenance visits stay simple, faster, and more affordable.
            </p>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {/* Included list */}
            <div className="rounded-2xl bg-white border border-gray-100 p-6 lg:col-span-2">
              <h3 className="font-semibold">Included (most homes)</h3>

              <div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                {[
                  "Kitchen + bathrooms detailed",
                  "Dusting (surfaces, fixtures)",
                  "Vacuum + mop floors",
                  "Baseboards & edges",
                  "Inside fridge & oven",
                  "Interior windows (as accessible)",
                  "Trash removal & tidy-up",
                  "High-touch disinfect (handles, switches)",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[12px]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Homes with heavy buildup, lots of pet hair, or clutter may require extra time — we’ll always
                communicate before.
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="rounded-2xl border border-gray-200 px-5 py-2.5 text-sm font-medium hover:bg-gray-50 transition"
                >
                  See pricing details →
                </Link>
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
                >
                  Check availability
                </Link>
              </div>
            </div>

            {/* Why book us */}
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <h3 className="font-semibold">Why customers book us</h3>

              <div className="mt-4 space-y-3 text-sm text-gray-700">
                <div className="flex gap-3">
                  <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    🧾
                  </span>
                  <div>
                    <div className="font-medium">Flat-rate pricing</div>
                    <div className="text-gray-600 text-sm">No hourly surprises.</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    🌿
                  </span>
                  <div>
                    <div className="font-medium">Eco &amp; pet-safe</div>
                    <div className="text-gray-600 text-sm">Products chosen with families in mind.</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    ✅
                  </span>
                  <div>
                    <div className="font-medium">Checklist standards</div>
                    <div className="text-gray-600 text-sm">Consistent results each visit.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY / WORK */}
      <section className="container-app py-12 sm:py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Recent Work</h2>
            <p className="text-gray-600 mt-2">Tap through cleanings from around Los Angeles.</p>
          </div>
          <Link href="/book" className="text-sm font-medium hover:underline">
            Book now
          </Link>
        </div>

        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready for that first deep clean?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We start every new client with an All-Inclusive Deep Clean. After that, switch to discounted
            maintenance visits that fit your schedule.
          </p>
          <div className="mt-6 flex justify-center gap-3 flex-wrap">
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









