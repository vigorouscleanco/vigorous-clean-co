import Link from "next/link";
import Image from "next/image";

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
                Established in 2025, Vigorous Clean Co. provides professional, eco-friendly cleaning for homes, offices, and rentals across Los Angeles. We deliver spotless, healthy environments with consistent quality and attention to detail.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/pricing" className="rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition">
                  View Pricing
                </Link>
                <a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noopener" className="rounded-2xl border border-gray-200 px-6 py-3 font-medium hover:bg-gray-50 transition">
                  Book Now
                </a>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                Flexible scheduling tailored to each client. Reliable staff. Eco-conscious practices.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl shadow-soft overflow-hidden ring-1 ring-gray-100">
                <Image src="/hero-home.jpg" alt="Vigorous Clean Co. — professional eco-friendly cleaning" width={1600} height={1067} className="w-full h-auto" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards */}
      <section>
        <div className="container-app py-16 sm:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Transparent Pricing", desc: "Flat daily rates by square footage. No hourly games." },
              { title: "Eco & Pet-Friendly", desc: "Approved products only — safe, effective, consistent." },
              { title: "Professional Quality", desc: "Trained staff with checklists and quality standards." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition">
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-gray-600 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient">
        <div className="container-app py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold">Ready to see that sparkle?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            We charge per day, not per hour — we stay until it’s clean.
          </p>
          <div className="mt-6">
            <a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noopener" className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition">
              Book Your Clean
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
