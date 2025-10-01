export const metadata = { title: "Terms & Disclaimer — Vigorous Clean Co." };

export default function TermsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-gradient">
        <div className="container-app py-14">
          <h1 className="text-3xl font-semibold">Terms &amp; Disclaimer</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Clear, plain-language policies so every clean is smooth and stress-free.
          </p>
        </div>
      </section>

      {/* Content */}
      <section>
        <div className="container-app py-12 grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Pricing &amp; Scope</h3>
            <p className="text-gray-600 mt-2">
              We charge per day (per cleaner) or per visit based on square footage. Quotes are estimates based on the
              information provided. Larger spaces may require multiple days or additional cleaners.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Access &amp; Safety</h3>
            <p className="text-gray-600 mt-2">
              Client agrees to provide safe access, electricity, and running water, and to disclose hazards (e.g., pets,
              chemicals, broken fixtures). Unsafe tasks may be declined.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Exclusions</h3>
            <p className="text-gray-600 mt-2">
              Exterior windows, hazardous material removal, and high-risk ladder work are excluded unless agreed in writing.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Loss, Theft &amp; Fragile Items</h3>
            <p className="text-gray-600 mt-2">
              <b>Non-liability:</b> Vigorous Clean Co. is not liable for loss or theft of unattended valuables, cash, or
              unsecured items. Please secure valuables before service.
            </p>
            <p className="text-gray-600 mt-2">
              <b>Fragile/Pre-existing Damage:</b> We are not liable for pre-existing damage, normal wear and tear, or items
              not disclosed as fragile/defective.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Our Staff</h3>
            <p className="text-gray-600 mt-2">
              Our cleaners are thoroughly screened and trained to deliver consistent, professional service.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-6">
            <h3 className="font-semibold">Cancellations &amp; Satisfaction</h3>
            <p className="text-gray-600 mt-2">
              Please follow the cancellation terms on your booking confirmation to avoid fees. If something was missed,
              contact us within 24 hours and we’ll make it right.
            </p>
          </div>
        </div>
      </section>

      {/* Subtle footnote */}
      <section className="pb-14">
        <div className="container-app">
          <p className="text-xs text-gray-500">
            These terms may be updated; the latest version on this page applies.
          </p>
        </div>
      </section>
    </div>
  );
}

