export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function PricingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="container-app py-12">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Simple First-Time Deep Clean Pricing
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl">
          Every new home starts with a one-time All-Inclusive Deep Clean. After that,
          returning clients switch to a discounted Maintenance Clean for regular upkeep.
          Flat rates, never hourly, with one cleaner for up to ~8 hours per day.
        </p>

        <div className="mt-4 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm sm:text-[0.9rem]">
          <b>First time with us?</b>{" "}
          Your first visit is always an <b>All-Inclusive Deep Clean</b>. Once we&apos;ve seen
          your home, we&apos;ll confirm your{" "}
          <b>Maintenance Clean (Returning Clients)</b> rate based on size and how often
          you&apos;d like service.
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="container-app pb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">
          Residential — First-Time Deep Clean
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl text-sm sm:text-base">
          Flat daily rates — never hourly. One cleaner for up to ~8 hours. Most homes
          are cleaned in a single day.
        </p>

        <div className="mt-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <h3 className="font-semibold text-base sm:text-lg">
            All-Inclusive Deep Clean{" "}
            <span className="font-normal text-gray-500">
              (Required for New Homes)
            </span>
          </h3>

          <div className="mt-4 grid gap-y-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-12 text-sm">
            <div className="flex justify-between gap-6">
              <span>Up to 500 sq ft</span>
              <span className="font-medium tabular-nums">$160 / day</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>501–1,000 sq ft</span>
              <span className="font-medium tabular-nums">$220 / day</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>1,001–1,500 sq ft</span>
              <span className="font-medium tabular-nums">$280 / day</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>1,501–2,000 sq ft</span>
              <span className="font-medium tabular-nums">$340 / day</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>2,001–2,500 sq ft</span>
              <span className="font-medium tabular-nums">$400 / day</span>
            </div>
            <div className="flex justify-between gap-6">
              <span>2,501+ sq ft</span>
              <span className="text-gray-600">Custom quote</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            All-Inclusive includes a full top-to-bottom deep clean, plus inside fridge &amp;
            oven, baseboards, interior windows, and detailed bathroom/kitchen work. If
            your home is right on the edge between sizes, we&apos;ll round in your favor
            or give a custom quote so pricing still feels fair.
          </p>

          <p className="text-xs text-gray-500 mt-3">
            <span className="font-semibold">
              Maintenance Cleans (Returning Clients):
            </span>{" "}
            After your first visit, recurring cleanings are discounted and priced based
            on frequency (weekly, bi-weekly, or monthly). We&apos;ll confirm your exact
            rate during your first clean.
          </p>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Office &amp; Commercial</h2>
        <div className="mt-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <p className="text-gray-600 text-sm sm:text-base">
            Offices vary by layout and traffic. We’ll price by square-foot and cleaning
            frequency (daily/weekly/bi-weekly). Get a fast quote and schedule right from
            our booking page.
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
            Common tasks: desks, common areas, restrooms, trash, interior glass, and
            floors. Specialty tasks (like floor stripping, carpet shampoo, or
            post-construction) are available on request.
          </p>
        </div>
      </section>

      {/* NOTES / DISCLAIMER */}
      <section className="container-app pb-14">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Pricing is per day, per cleaner. We stay until the job is complete for
              the day (up to ~8 hours).
            </li>
            <li>
              Larger homes or heavily soiled spaces may require multiple days or
              additional cleaners, which we&apos;ll quote ahead of time.
            </li>
            <li>
              For new clients or long jobs, we require full prepayment when booking.
              See our{" "}
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
          <h3 className="text-2xl font-semibold tracking-tight">
            Ready to book your clean?
          </h3>
          <p className="text-gray-600 mt-2">
            Friendly pricing. Eco-friendly products. Reliable, professional cleaners.
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



