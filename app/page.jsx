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
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-20 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side: copy */}
            <div>
              {/* Small pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium mb-4 shadow-soft">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                Los Angeles · South Bay · Orange County
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Deep cleans first.{" "}
                <span className="text-primary">Easy upkeep after.</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Vigorous Clean Co. gives you a top-to-bottom{" "}
                <span className="font-medium">first-time deep clean</span>,
                then discounted maintenance visits to keep your home fresh,
                welcoming, and worry-free.
              </p>

              {/* Hero buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="rounded-2xl bg-primary px-7 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
                >
                  Book Your First Deep Clean
                </Link>

                <Link
                  href="/pricing"
                  className="rounded-2xl border border-gray-200 px-7 py-3 font-medium hover:bg-gray-50 transition"
                >
                  View Pricing
                </Link>
              </div>

              {/* Hero badges row */}
              <div className="mt-5 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-xs text-gray-600">
                <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-3 py-1 shadow-soft">
                  <span className="text-primary">✓</span>
                  Eco-friendly &amp; pet-safe
                </div>
                <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-3 py-1 shadow-soft">
                  <span className="text-primary">✓</span>
                  Flat daily pricing
                </div>
                <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-3 py-1 shadow-soft">
                  <span className="text-primary">✓</span>
                  Same cleaner whenever possible
                </div>
                <div className="inline-flex items-center gap-2 bg-white/70 rounded-full px-3 py-1 shadow-soft">
                  <span className="text-primary">✓</span>
                  Locally owned &amp; family-run
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                First-time clients: use{" "}
                <span className="font-semibold">VIGOR10</span> for a welcome
                discount after your deep clean.
              </p>
            </div>

            {/* Right side: imagery */}
            <div className="relative">
              <div className="rounded-2xl shadow-soft overflow-hidden ring-1 ring-gray-100">
                <Image
                  src="/hero-home.jpg"
                  alt="Vigorous Clean Co. — professional eco-friendly home cleaning"
                  width={1600}
                  height={1067}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Overlaid mini badge card */}
              <div className="absolute -bottom-6 right-4 sm:right-10 bg-white rounded-2xl shadow-soft px-4 py-3 text-xs border border-gray-100">
                <p className="font-semibold text-gray-800">
                  First-time Deep Clean
                </p>
                <p className="text-gray-500 mt-1">
                  Kitchens · Bathrooms · Baseboards · Inside appliances
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP / BADGES */}
      <section>
        <div className="container-app py-8 sm:py-10">
          <div className="grid gap-3 sm:grid-cols-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                ✓
              </span>
              <span>Woman-led &amp; family-operated</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                ✓
              </span>
              <span>Supplies included every visit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                ✓
              </span>
              <span>Upfront pricing by square foot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">
                ✓
              </span>
              <span>Serving homes across LA &amp; OC</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Cleaning that feels fair, consistent, and thorough.
            </h2>
            <p className="text-gray-600 mt-2">
              We keep things simple: start with a deep clean, then maintain it
              with discounted recurring visits.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Simple, honest pricing",
                desc: "Flat daily rates by square footage. No surprise add-ons, no hourly clock watching.",
              },
              {
                title: "Deep focus on detail",
                desc: "Baseboards, fixtures, corners, and high-touch areas — we clean the spots others miss.",
              },
              {
                title: "Built for busy schedules",
                desc: "Book online in minutes, then keep the same cleaner whenever possible for comfort and trust.",
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

      {/* HOW IT WORKS */}
      <section className="bg-grayLight">
        <div className="container-app py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            How it works
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            One simple flow: deep clean first, then easy maintenance that keeps
            your home feeling freshly cleaned — not just “quickly wiped down.”
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                1
              </span>
              <h3 className="font-semibold mt-3">Book your first visit</h3>
              <p className="text-gray-600 mt-2">
                Pick a date that works for you. Share your home size and any
                problem areas you want us to focus on.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                2
              </span>
              <h3 className="font-semibold mt-3">
                All-Inclusive Deep Clean
              </h3>
              <p className="text-gray-600 mt-2">
                We do a full top-to-bottom clean so your space is truly reset —
                not just surface-level tidy.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                3
              </span>
              <h3 className="font-semibold mt-3">
                Discounted maintenance visits
              </h3>
              <p className="text-gray-600 mt-2">
                Choose weekly, bi-weekly, or monthly upkeep. We lock in your
                maintenance rate and keep your home consistently clean.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                Popular services
              </h2>
              <p className="text-gray-600 mt-2">
                Deep cleans, regular upkeep, and office spaces — all with
                eco-friendly products and reliable staff.
              </p>
            </div>
            <Link
              href="/services"
              className="text-sm font-medium hover:underline"
            >
              See all services
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "All-Inclusive Deep Clean",
                desc: "A full reset for your home — baseboards, fixtures, inside appliances, and detailed bathroom & kitchen work.",
              },
              {
                title: "Maintenance Home Cleaning",
                desc: "Recurring standard cleans to keep floors, surfaces, bathrooms, and kitchens consistently fresh.",
              },
              {
                title: "Office & Workspace Cleaning",
                desc: "Desks, shared areas, restrooms, trash, and interior glass for small offices and studios.",
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
      <section className="container-app py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Recent work</h2>
        <p className="text-gray-600 mt-2">
          Real homes and rentals across Los Angeles and the South Bay.
        </p>
        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready to see that deep-clean sparkle?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We charge per day, not per hour — one dedicated cleaner, staying
            until the job is done for the day. First-time deep clean, then easy
            maintenance from there.
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



