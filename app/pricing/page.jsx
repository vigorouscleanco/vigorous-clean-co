export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function PricingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="container-app py-12">
        <h1 className="text-3xl font-semibold">Simple Square-Foot Pricing</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Flat daily rates — never hourly. Each day is one cleaner (up to ~8 hours).
          Larger spaces may require multiple days or additional cleaners.
        </p>

        <div className="mt-4 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm">
          <b>First time?</b> Start with <b>All-Inclusive (Deep Clean)</b>.
          After your first visit, ask us about our <b>Maintenance Clean (Returning Clients)</b> rate.
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="container-app pb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Residential (Per Day)</h2>

        <div className="mt-4 grid gap-6">
          {/* Deep Clean column only */}
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">All-Inclusive (Deep Clean)</h3>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <span>0–500 sq ft</span>
                <span className="font-medium">$100 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>501–1,000 sq ft</span>
                <span className="font-medium">$175 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,001–1,500 sq ft</span>
                <span className="font-medium">$225 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,501–2,000 sq ft</span>
                <span className="font-medium">$275 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,001–2,500 sq ft</span>
                <span className="font-medium">$325 / day</span>
              </div>

              {/* Larger homes → custom quote */}
              <div className="flex justify-between gap-6">
                <span>2,501–3,500 sq ft</span>
                <span className="text-gray-600">Custom Quote</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>3,501–5,000 sq ft</span>
                <span className="text-gray-600">Custom Quote</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>5,001–7,500 sq ft</span>
                <span className="text-gray-600">Custom Quote</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>7,501+ sq ft</span>
                <span className="text-gray-600">Custom Quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              All-Inclusive adds inside fridge &amp; oven, carpet shampoo, and interior windows.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Office &amp; Commercial</h2>
        <div className="mt-4 rounded-2xl border border-gray-100 p-6">
          <p className="text-gray-600">
            Offices vary by layout and traffic. We’ll price by square-foot and frequency
            (daily/weekly/bi-weekly). Get a fast quote and schedule right from our booking page.
          </p>
          <div className="mt-4">
            <a
              href="/book"
              className="inline-block rounded-2xl bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
            >
              Get a Quote &amp; Book
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Common tasks: desks, common areas, restrooms, trash, interior glass, floors. Specialty
            tasks available on request.
          </p>
        </div>
      </section>

      {/* NOTES / DISCLAIMER */}
      <section className="container-app pb-14">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>Pricing is per day, per cleaner. We stay until the job is complete for the day.</li>
            <li>
              Larger homes/offices may require multiple days or additional cleaners (quoted ahead of time).
            </li>
            <li>
              For new clients or long jobs, we require full prepayment when booking. See our{" "}
              <a href="/terms" className="underline">Terms</a> for the full cancellation policy.
            </li>
            <li>Use code <b>VIGOR10</b> for 10% off your first booking.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient">
        <div className="container-app py-12 text-center">
          <h3 className="text-2xl font-semibold">Ready to book your clean?</h3>
          <p className="text-gray-600 mt-2">Transparent pricing. Eco-friendly products. Reliable staff.</p>
          <div className="mt-6">
            <a
              href="/book"
              className="rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

