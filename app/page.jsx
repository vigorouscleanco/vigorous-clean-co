// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

// IMPORTANT: components folder is one level up from /app
const GallerySlider = dynamic(
  () => import("../components/GallerySlider"),
  { ssr: false }
);

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly House Cleaning in LA",
};

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium shadow-soft mb-4">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                Eco-Friendly · Pet-Safe · Family-Run in LA
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Your home,{" "}
                <span className="text-primary">deep-cleaned the right way.</span>
              </h1>

              <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
                Vigorous Clean Co. provides first-time deep cleans and
                ongoing maintenance for homes and apartments across
                Los Angeles &amp; the South Bay. Flat pricing. No hourly games.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-7 py-3 text-white text-sm sm:text-base font-medium shadow-soft hover:opacity-90 transition"
                >
                  Book a Deep Clean
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-2xl border border-gray-200 px-7 py-3 text-sm sm:text-base font-medium hover:bg-gray-50 transition"
                >
                  View Pricing
                </Link>
              </div>

              {/* Badges row */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Flat daily rates — we stay until it&apos;s clean
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Eco &amp; pet-friendly products
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Same cleaner available for repeat visits
                </div>
              </div>
            </div>

            {/* Hero image full-bleed on the right */}
            <div className="relative h-[260px] sm:h-[320px] lg:h-[380px]">
              <div className="absolute inset-0 rounded-3xl shadow-soft overflow-hidden ring-1 ring-gray-100 bg-gray-100">
                <Image
                  src="/hero-home.jpg"
                  alt="Fresh, spotless kitchen cleaned by Vigorous Clean Co."
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section>
        <div className="container-app py-14 sm:py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Simple pricing",
                desc: "Flat daily rates by square footage. No surprise add-ons or hidden fees.",
              },
              {
                title: "Deep first, then easy",
                desc: "Every new home starts with a full All-Inclusive Deep Clean. After that, we switch you to discounted maintenance visits.",
              },
              {
                title: "Professional standards",
                desc: "Checklists, attention to detail, and a cleaner who treats your home like their own.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-[15px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SNAPSHOT */}
      <section className="bg-grayLight">
        <div className="container-app py-14 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                What we can take off your plate
              </h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl">
                From move-ins to maintenance, we focus on the areas that matter
                most — kitchens, bathrooms, and high-touch surfaces.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium hover:underline mt-1"
            >
              See all services
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "All-Inclusive Deep Clean",
                desc: "Baseboards, fixtures, inside fridge &amp; oven, detail work, and more.",
              },
              {
                title: "Maintenance Clean",
                desc: "Perfect for weekly, bi-weekly, or monthly upkeep after your first deep clean.",
              },
              {
                title: "Office &amp; Common Areas",
                desc: "Desks, restrooms, trash, interior glass, and floors for small offices.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-soft transition"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-[15px]">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WORK – SLIDER */}
      <section className="container-app py-14 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              See our work
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl">
              Real kitchens, bathrooms, and living spaces we&apos;ve cleaned
              around Los Angeles.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-14 sm:py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready for a home that actually feels clean?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Start with a one-time All-Inclusive Deep Clean and we&apos;ll
            set you up with simple, discounted maintenance visits after.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Your First Clean
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
    </main>
  );
}





