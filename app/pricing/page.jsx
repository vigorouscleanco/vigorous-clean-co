export const metadata = { title: "Pricing — Vigorous Clean Co." };

export default function PricingPage() {
  return (
    <div>
      {/* HERO */}
      <section className="container-app py-12">
        <h1 className="text-3xl font-semibold">Simple, Transparent Home Cleaning Pricing</h1>
        <p className="text-gray-600 mt-2 max-w-2xl">
          Flat-rate pricing by square footage. No hourly games, no surprises. Your first visit is
          always a detailed Deep Clean, and returning clients unlock a discounted Maintenance Clean
          rate to keep everything fresh.
        </p>

        <div className="mt-4 rounded-xl bg-primary/10 text-primary px-4 py-3 text-sm">
          <b>How it works:</b>{" "}
          <span className="text-primary">
            1) First visit = <b>Deep Clean</b>. 2) After that, choose a <b>Maintenance Clean</b>{" "}
            schedule (weekly, bi-weekly, or monthly) at a lower rate.
          </span>
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="container-app pb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Residential Pricing (Per Visit)</h2>
        <p className="text-gray-600 mt-2 text-sm max-w-2xl">
          Pricing below is for one cleaner, up to a full working day (roughly 6–8 hours). Most
          homes are finished in one visit. Very large homes or heavy-build-up may require extra
          time, which we&apos;ll quote ahead of time.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* FIRST-TIME DEEP CLEAN */}
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-lg">First-Time Deep Clean</h3>
            <p className="text-gray-600 text-sm mt-1">
              Required for all new homes. Includes detail work, inside fridge, inside oven,
              baseboards, fixtures, and more.
            </p>

            <div className="mt-4 grid gap-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <span>0–400 sq ft</span>
                <span className="font-medium">$140 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>401–800 sq ft</span>
                <span className="font-medium">$180 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>801–1,200 sq ft</span>
                <span className="font-medium">$220 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,201–1,800 sq ft</span>
                <span className="font-medium">$260 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,801–2,400 sq ft</span>
                <span className="font-medium">$300 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,401–3,000 sq ft</span>
                <span className="font-medium">$340 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>3,001–3,500 sq ft</span>
                <span className="text-gray-600">Custom quote</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>3,501+ sq ft</span>
                <span className="text-gray-600">Custom quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Deep Clean is ideal if it&apos;s your first time with us, hasn&apos;t been cleaned
              in a while, or you&apos;re moving in/out and want a full reset.
            </p>
          </div>

          {/* MAINTENANCE CLEAN */}
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold text-lg">Maintenance Clean (Returning Clients)</h3>
            <p className="text-gray-600 text-sm mt-1">
              After your first Deep Clean, keep your home on a schedule (weekly, bi-weekly, or
              monthly) at a lower rate. Great for busy households who want everything to stay
              consistently clean.
            </p>

            <div className="mt-4 grid gap-y-3 text-sm">
              <div className="flex justify-between gap-6">
                <span>0–400 sq ft</span>
                <span className="font-medium">$105 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>401–800 sq ft</span>
                <span className="font-medium">$135 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>801–1,200 sq ft</span>
                <span className="font-medium">$165 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,201–1,800 sq ft</span>
                <span className="font-medium">$190 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>1,801–2,400 sq ft</span>
                <span className="font-medium">$220 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>2,401–3,000 sq ft</span>
                <span className="font-medium">$250 / visit</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>3,001–3,500 sq ft</span>
                <span className="text-gray-600">Custom quote</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>3,501+ sq ft</span>
                <span className="text-gray-600">Custom quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Maintenance pricing assumes a regular schedule after a recent Deep Clean. If a home
              goes several months between visits or has heavy build-up, we may recommend another
              Deep Clean.
            </p>
          </div>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Office &amp; Commercial Spaces</h2>
        <div className="mt-4 rounded-2xl border border-gray-100 p-6">
          <p className="text-gray-600 text-sm">
            Offices and commercial spaces vary a lot by layout, flooring, and traffic. We price
            commercial jobs by square footage, frequency (daily/weekly/bi-weekly), and scope
            (common areas, restrooms, kitchens, etc.).
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Send us a few details (approximate size, number of bathrooms, and how often you&apos;d
            like service), and we&apos;ll send a fast custom quote.
          </p>
          <div className="mt-4">
            <a
              href="/book"
              className="inline-block rounded-2xl bg-primary px-5 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
            >
              Get a Commercial Quote
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Common tasks: desks, common areas, restrooms, trash, interior glass, and floors. Floor
            polishing, carpet shampoo, and specialty tasks are available on request.
          </p>
        </div>
      </section>

      {/* NOTES / DISCLAIMER */}
      <section className="container-app pb-14">
        <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-600">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Pricing is <b>per visit, for one cleaner</b>, up to a full working day (roughly 6–8
              hours). Larger homes or heavy-build-up may require additional time or a second
              cleaner, which will be quoted ahead of time.
            </li>
            <li>
              Square-foot ranges are used to keep pricing simple and transparent. If your space is
              unusually small or large for its range, we&apos;ll adjust fairly at the quote stage.
            </li>
            <li>
              For new clients or long jobs, we require full prepayment when booking. See our{" "}
              <a href="/terms" className="underline">
                Terms
              </a>{" "}
              for the full cancellation policy.
            </li>
            <li>
              New clients receive <b>10% off</b> their first Deep Clean — discount is applied after
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
            Transparent pricing. Eco-friendly products. Reliable, vetted staff.
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


