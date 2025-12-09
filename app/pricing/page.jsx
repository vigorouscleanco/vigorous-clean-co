export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function PricingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="container-app py-12">
        <h1 className="text-3xl font-semibold">Simple, Friendly Square-Foot Pricing</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Flat rates based on your home&apos;s size — never hourly. Pricing is per day, per cleaner
          (up to ~8 hours). Larger spaces may require multiple days or additional cleaners, which
          we&apos;ll always quote upfront.
        </p>

        <div className="mt-4 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm">
          <b>First time with us?</b> Every new client starts with an{" "}
          <b>All-Inclusive Deep Clean</b>. After that, you&apos;ll qualify for our{" "}
          <b>discounted Maintenance Clean (Returning Clients)</b> for regular visits.
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="container-app pb-4">
        <h2 className="text-xl sm:text-2xl font-semibold">Residential Pricing (Per Day)</h2>

        <p className="text-gray-600 text-sm mt-2 max-w-2xl">
          These are full-day, all-inclusive deep clean rates for most homes and apartments. If your
          space is very light, tidy, or only needs a partial clean, we can often adjust pricing —
          just mention it when you book.
        </p>

        <div className="mt-4 grid gap-6">
          {/* Deep Clean column */}
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">All-Inclusive Deep Clean (First Visit)</h3>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-12 gap-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <span>Up to 500 sq ft</span>
                <span className="font-medium">$160 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>501–1,000 sq ft</span>
                <span className="font-medium">$220 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,001–1,500 sq ft</span>
                <span className="font-medium">$280 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,501–2,000 sq ft</span>
                <span className="font-medium">$340 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,001–2,500 sq ft</span>
                <span className="font-medium">$400 / day</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,501+ sq ft</span>
                <span className="text-gray-600">Custom quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              All-inclusive deep cleans typically include kitchen and bathrooms, baseboards, dusting,
              interior windows, and inside fridge &amp; oven (as time allows). Extremely heavy
              buildup, post-construction, or special requests may be quoted separately.
            </p>
          </div>

          {/* Maintenance info card */}
          <div className="rounded-2xl border border-dashed border-gray-200 p-6 bg-gray-50">
            <h3 className="font-semibold">Maintenance Clean (Returning Clients)</h3>
            <p className="text-sm text-gray-600 mt-2">
              After your first deep clean, you&apos;ll unlock a discounted Maintenance Clean rate
              for weekly, bi-weekly, or monthly visits. These visits focus on keeping everything
              fresh and tidy, so they&apos;re more affordable than a full deep clean.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Exact pricing depends on your home size, condition, and frequency. Most returning
              clients pay less than their first deep clean visit.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Office &amp; Commercial Spaces</h2>
        <div className="mt-4 rounded-2xl border border-gray-100 p-6">
          <p className="text-gray-600">
            Offices and commercial spaces vary a lot by layout, traffic, and needs. We typically
            price by square-foot, scope of work, and frequency (daily, weekly, or bi-weekly).
            Share a few details and we&apos;ll give you a fast, no-pressure quote.
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
            Common tasks: desks and workstations, common areas, restrooms, trash removal, interior
            glass, and floors. Specialty tasks (floors, high dusting, etc.) available on request.
          </p>
        </div>
      </section>

      {/* NOTES / DISCLAIMER */}
      <section className="container-app pb-14">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Residential pricing is per day, per cleaner. A &quot;day&quot; is typically up to ~8
              hours of work.
            </li>
            <li>
              Larger homes or heavily soiled spaces may require multiple days or additional cleaners,
              which we&apos;ll always quote ahead of time.
            </li>
            <li>
              For new clients or long jobs, we require full prepayment when booking. See our{" "}
              <a href="/terms" className="underline">
                Terms
              </a>{" "}
              for the full cancellation policy.
            </li>
            <li>
              New clients receive <b>10% off</b> their first cleaning — discount is applied after
              service completion.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient">
        <div className="container-app py-12 text-center">
          <h3 className="text-2xl font-semibold">Ready to book your clean?</h3>
          <p className="text-gray-600 mt-2">
            Transparent pricing. Eco-friendly products. Reliable, friendly cleaners.
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


