export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function PricingPage() {
  return (
    <div>
      {/* FIRST-TIME CUSTOMER BANNER */}
      <section className="bg-primary/5 border-y border-primary/10">
        <div className="container-app py-2 text-xs sm:text-sm text-primary">
          <span className="font-semibold">First-time customers:</span>{" "}
          Your first visit always starts with an{" "}
          <span className="font-semibold">All-Inclusive Deep Clean</span>. After we’ve
          cleaned your home once, we’ll confirm your discounted{" "}
          <span className="font-semibold">Maintenance Clean</span> rate based on home
          size and how often you’d like service.
        </div>
      </section>

      {/* RESIDENTIAL – FIRST-TIME DEEP CLEAN */}
      <section className="container-app py-10">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Residential — First-Time Deep Clean
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Flat daily pricing — never hourly. One cleaner for up to ~8 hours. Most homes
          are cleaned in a single day.
        </p>

        <div className="mt-6">
          <div className="rounded-2xl border border-gray-100 p-6 max-w-3xl mx-auto">
            <h2 className="font-semibold">
              All-Inclusive Deep Clean (Required for New Homes)
            </h2>

            {/* SIZE / PRICE LIST */}
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <span>Up to 500 sq ft</span>
                <span className="font-medium">$145 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>501–1,000 sq ft</span>
                <span className="font-medium">$205 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,001–1,500 sq ft</span>
                <span className="font-medium">$245 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,501–2,000 sq ft</span>
                <span className="font-medium">$335 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,001–2,500 sq ft</span>
                <span className="font-medium">$375 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,501+ sq ft</span>
                <span className="text-gray-600">Custom Quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              All-Inclusive includes a full top-to-bottom deep clean, plus inside fridge
              &amp; oven, baseboards, interior windows, and detailed bathroom/kitchen
              work. If your home is right on the edge between sizes, we&apos;ll round in
              your favor or give a custom quote so pricing still feels fair.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              <b>Maintenance Cleans (Returning Clients):</b> After your first visit,
              recurring cleanings are discounted and priced based on frequency (weekly,
              bi-weekly, or monthly). We&apos;ll confirm your exact rate during your
              first clean.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Office &amp; Commercial</h2>
        <div className="mt-4 rounded-2xl border border-gray-100 p-6">
          <p className="text-gray-600">
            Offices vary by layout and traffic. We&apos;ll price by square-foot and
            frequency (daily/weekly/bi-weekly). Get a fast quote and schedule right
            from our booking page.
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
            Common tasks: desks, common areas, restrooms, trash, interior glass, floors.
            Specialty tasks available on request.
          </p>
        </div>
      </section>

      {/* NOTES / DISCLAIMER */}
      <section className="container-app pb-14">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>Pricing is per day, per cleaner. We stay until the job is complete for the day.</li>
            <li>
              Larger homes/offices may require multiple days or additional cleaners
              (quoted ahead of time).
            </li>
            <li>
              For new clients or long jobs, we require full prepayment when booking. See
              our{" "}
              <a href="/terms" className="underline">
                Terms
              </a>{" "}
              for the full cancellation policy.
            </li>
            <li>
              New clients receive <b>10% off</b> their first cleaning — discount is
              applied after service completion.
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

