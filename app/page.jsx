// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const GallerySlider = dynamic(() => import("./components/GallerySlider"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-20 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium mb-4">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                Eco-Friendly · Pet-Safe · Professional
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Your Space,{" "}
                <span className="text-primary">Sparkling with Vigor</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Daily-rate cleaning for homes, apartments, and offices across Los
                Angeles &amp; Orange County. We stay until it&apos;s clean — no
                hourly games, no surprises.
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
                Flexible scheduling · Screened staff · Eco-conscious products
              </p>
            </div>

            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 md:h-[26rem]">
              <div className="rounded-2xl shadow-soft overflow-hidden ring-1 ring-gray-100 w-full h-full">
                <Image
                  src="/hero-home.jpg"
                  alt="Vigorous Clean Co. — professional eco-friendly cleaning"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY VIGOROUS CLEAN CO. */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center">
            Why Los Angeles Homes Choose Vigorous Clean Co.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-center">
            You want a team that shows up, respects your space, and leaves it
            noticeably cleaner every time. These are the things we never
            compromise on.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Transparent Pricing",
                desc: "Flat daily rates by square footage. No hourly clock-watching or surprise add-ons.",
              },
              {
                title: "Eco & Pet-Friendly",
                desc: "Products chosen to be safe around kids and pets while still cutting through grime.",
              },
              {
                title: "Professional Quality",
                desc: "Screened cleaners, checklists, and standards so every clean feels consistent.",
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

      {/* POPULAR SERVICES */}
      <section className="bg-grayLight">
        <div className="container-app py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">
                What We Clean Most Often
              </h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                From first-time deep cleans to ongoing upkeep, we tailor each
                visit to what your home or office actually needs.
              </p>
            </div>
            <Link href="/services" className="text-sm font-medium hover:underline">
              See all services
            </Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "All-Inclusive Deep Clean",
                desc: "Baseboards, fixtures, inside appliances, detail work — a full reset for your space.",
              },
              {
                title: "Standard Home Areas",
                desc: "Kitchens, bathrooms, bedrooms, living areas, interior windows &amp; surfaces.",
              },
              {
                title: "Office &amp; Workspace",
                desc: "Desks, common areas, restrooms, trash, interior glass, and floors for small offices.",
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

      {/* GALLERY / RECENT WORK */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Gallery</h2>
              <p className="text-gray-600 mt-2 max-w-xl">
                Real kitchens, bathrooms, living rooms, and offices we&apos;ve
                cleaned around Los Angeles &amp; Orange County. Swipe through to
                see the kind of work we do.
              </p>
            </div>
            {/* If you ever add a full gallery page, you can uncomment this */}
            {/* <Link href="/gallery" className="text-sm font-medium hover:underline">
              View full gallery
            </Link> */}
          </div>

          <div className="mt-6">
            <GallerySlider />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Ready to see that sparkle?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We charge per day, not per hour — one cleaner for up to ~8 hours.
            Most homes are finished in a single visit, and we can set up a
            maintenance schedule after your first deep clean.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/book"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Your Clean
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
    </div>
  );
}




