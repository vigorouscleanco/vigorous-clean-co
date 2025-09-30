import Link from "next/link";
import Image from "next/image";
import GallerySlider from "@/components/GallerySlider";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium mb-4">
                <span className="h-2 w-2 rounded-full bg-primary inline-block" /> Eco-Friendly · Pet-Safe · Professional
              </div>

              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Your Space, <span className="text-primary">Sparkling with Vigor</span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 max-w-xl">
                Established in 2025, we provide professional, eco-friendly cleaning for homes, offices, and rentals throughout Los Angeles. We keep every space fresh, welcoming, and worry-free.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
                >
                  View Pricing
                </Link>
                <a
                  href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
                  target="_blank"
                  rel="noopener"
                  className="rounded-2xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition"
                >
                  Book Now
                </a>
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
            <Link href="/services" className="text-sm font-medium hover:underline">See all services</Link>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Standard Home Clean", desc: "Kitchen, bathrooms, bedrooms, living areas, interior windows & surfaces." },
              { title: "All-Inclusive Deep Clean", desc: "Baseboards, fixtures, inside appliances, detail work — full refresh." },
              { title: "Office Clean", desc: "Desks, common areas, bathrooms, trash, interior glass, floors." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 p-6 hover:shadow-soft">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK SLIDER (uses /public/gallery1.jpg ... gallery4.jpg) */}
      <section className="container-app py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Recent Work</h2>
        <p className="text-gray-600 mt-2">Homes, offices, and rentals across Los Angeles.</p>
        <div className="mt-6">
          <GallerySlider />
        </div>
      </section>

      {/* CONTACT BLOCK (icons + no separate contact page) */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            <a href="tel:+14242605986" className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft flex items-center gap-3">
              <span className="rounded-xl bg-gray-100 p-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.16a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-gray-700">(424) 260-5986</p>
              </div>
            </a>

            <a href="mailto:vigorouscleanco@gmail.com" className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft flex items-center gap-3">
              <span className="rounded-xl bg-gray-100 p-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
                </svg>
              </span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-700">vigorouscleanco@gmail.com</p>
              </div>
            </a>
          </div>
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
            <a
              href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services"
              target="_blank"
              rel="noopener"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Your Clean
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            <b>Disclaimer:</b> Cleaners are thoroughly screened and professional; however, Vigorous Clean Co. is not liable for loss or theft of unattended valuables.
            Please secure valuables and disclose fragile/defective items. We are not liable for pre-existing damage or normal wear and tear.
            Specialty or hazardous tasks are excluded unless agreed in writing.
          </p>
        </div>
      </section>
    </div>
  );
}

