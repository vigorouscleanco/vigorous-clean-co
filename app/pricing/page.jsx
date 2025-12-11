export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function PricingPage() {
  return (
    <div>

      {/* HERO */}
      <section className="container-app py-12">
        <h1 className="text-3xl font-semibold text-center">
          Simple First-Time Deep Clean Pricing
        </h1>

        <div className="mt-4 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm text-center">
          <b>First-time customers:</b> Your first visit always includes an{" "}
          <b>All-Inclusive Deep Clean</b>. After we’ve cleaned your home once,
          we’ll confirm your discounted <b>Maintenance Clean</b> rate based on
          home size and how often you’d like service.
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="container-app pb-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-center">
          Residential — First-Time Deep Clean
        </h2>

        <p className="text-gray-600 text-sm mt-1 text-center">
          Flat daily pricing — never hourly. One cleaner for up to ~8 hours.
          Most homes are cleaned in a single day.
        </p>

        <div className="mt-6 flex justify-center">
          <div className="rounded-2xl border border-gray-100 p-6 w-full max-w-2xl">
            <h3 className="font-semibold text-center">
              All-Inclusive Deep Clean (Required for New Homes)
            </h3>

            {/* SIZE / PRICE LIST */}
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <span>Up to 500 sq ft</span>
                <span className="font-medium">$165 / day</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>501–1,000 sq ft</span>
                <span className="font-medium">$225 / day</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>1,001–1,500 sq ft</span>
                <span className="font-medium">$275 / day</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>1,501–2,000 sq ft</span>
                <span className="font-medium">$305 / day</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>2,001–2,500 sq ft</span>
                <span className="font-medium">$345 / day</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>2,501+ sq ft</span>
                <span className="text-gray-600">Custom Quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              All-Inclusive includes a full top-to-bottom deep clean, plus inside
              fridge &amp; oven, baseboards, interior windows, and detailed
              kitchen/bathroom work. If your home falls between sizes, we round
              fairly.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              <b>Maintenance Cleans (Returning Clients):</b> Recurring cleanings
              are discounted and priced based on frequency (weekly, bi-weekly, or
              monthly). We’ll confirm your exact rate during your first clean.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Office &amp; Commercial</h2>

        <div className="mt-4 rounded-2xl border border-gray-100 p-6 max-w-2xl">
          <p className="text-gray-600">
            Offices vary by layout and traffic. We price by square-foot and
            frequency. Get a fast quote and schedule right from our booking page.
          </p>

          <div className="mt-4">
            <a
              href="/book"
              className="inline-block rounded-2xl bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
            >
              Get a Quote &amp; Book
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="container-app pb-14">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600 max-w-3xl">
          <ul className="list-disc pl-5 space-y-2">
            <li>Pricing is per day, per cleaner (up to ~8 hours).</li>
            <li>
              Larger homes may require multiple days or additional cleaners.
            </li>
            <li>
              New clients require full prepayment. See our{" "}
              <a href="/terms" className="underline">Terms</a>.
            </li>
            <li>
              New clients receive <b>10% off</b> their first cleaning.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient">
        <div className="container-app py-12 text-center">
          <h3 className="text-2xl font-semibold">Ready to book your clean?</h3>
          <p className="text-gray-600 mt-2">
            Friendly, affordable pricing. Eco-friendly products. Reliable staff.
          </p>

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


