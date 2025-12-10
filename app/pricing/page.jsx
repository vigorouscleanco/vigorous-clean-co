export const metadata = {
  title: "Pricing — Vigorous Clean Co.",
};

export default function PricingPage() {
  return (
    <div>

      {/* INFO BANNER ONLY (NO HERO TITLE) */}
      <section className="container-app py-10">
        <div className="rounded-xl bg-primary/10 text-primary px-4 py-4 text-sm max-w-3xl">
          <b>First-time customers:</b> Your first visit always starts with an{" "}
          <b>All-Inclusive Deep Clean</b>. After we’ve cleaned your home once,
          we’ll confirm your discounted <b>Maintenance Clean</b> rate based on
          home size and how often you’d like service.
        </div>
      </section>

      {/* RESIDENTIAL */}
      <section className="container-app pb-4">
        <h2 className="text-2xl font-semibold">
          Residential — First-Time Deep Clean
        </h2>
        <p className="text-gray-600 text-sm mt-1 max-w-3xl">
          Flat daily pricing. Never hourly. One cleaner for up to ~8 hours.
          Most homes are completed in a single day.
        </p>

        <div className="mt-6">
          <div className="rounded-2xl border border-gray-100 p-6 max-w-3xl">

            <h3 className="font-semibold mb-4">
              All-Inclusive Deep Clean (Required for New Homes)
            </h3>

            {/* PRICING LIST */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Up to 500 sq ft</span>
                <span className="font-medium">$160</span>
              </div>
              <div className="flex justify-between">
                <span>501 – 1,000 sq ft</span>
                <span className="font-medium">$220</span>
              </div>
              <div className="flex justify-between">
                <span>1,001 – 1,500 sq ft</span>
                <span className="font-medium">$280</span>
              </div>
              <div className="flex justify-between">
                <span>1,501 – 2,000 sq ft</span>
                <span className="font-medium">$340</span>
              </div>
              <div className="flex justify-between">
                <span>2,001 – 2,500 sq ft</span>
                <span className="font-medium">$400</span>
              </div>
              <div className="flex justify-between">
                <span>2,501+ sq ft</span>
                <span className="text-gray-500">Custom Quote</span>
              </div>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              All-Inclusive Deep Clean includes detailed kitchen and bathrooms,
              baseboards, interior windows, and inside fridge & oven.
              If your home falls between sizes, we round fairly.
            </p>

            <p className="text-xs text-gray-500 mt-2">
              <b>Maintenance Cleans (Returning Clients):</b> Ongoing cleanings
              are discounted and based on frequency (weekly, bi-weekly, monthly).
            </p>

          </div>
        </div>
      </section>

      {/* OFFICE / COMMERCIAL */}
      <section className="container-app py-8">
        <h2 className="text-2xl font-semibold">Office & Commercial</h2>

        <div className="mt-4 rounded-2xl border border-gray-100 p-6 max-w-3xl">
          <p className="text-gray-600 text-sm">
            Commercial spaces are priced by square footage and cleaning frequency.
            Get a fast quote and schedule directly online.
          </p>

          <a
            href="/book"
            className="inline-block mt-4 rounded-2xl bg-primary px-6 py-2.5 text-white text-sm font-medium shadow-soft hover:opacity-90 transition"
          >
            Get a Quote & Book
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gradient">
        <div className="container-app py-12 text-center">
          <h3 className="text-2xl font-semibold">
            Ready to book your clean?
          </h3>
          <p className="text-gray-600 mt-2">
            Affordable. Transparent. Eco-friendly.
          </p>

          <a
            href="/book"
            className="inline-block mt-6 rounded-2xl bg-primary px-8 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
          >
            Book Now
          </a>
        </div>
      </section>

    </div>
  );
}


