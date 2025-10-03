// app/terms/page.jsx
export const metadata = {
  title: "Terms & Disclaimer — Vigorous Clean Co.",
  description:
    "Clear, plain-language policies so every clean is smooth and stress-free.",
};

export default function TermsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-10">
          <h1 className="text-3xl font-semibold">Terms &amp; Disclaimer</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Clear, plain-language policies so every clean is smooth and stress-free.
          </p>
        </div>
      </section>

      {/* GRID CARDS (same layout you already have) */}
      <section className="container-app py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pricing & Scope */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Pricing &amp; Scope</h3>
            <p className="mt-3 text-gray-700">
              We charge per day (per cleaner) or per visit based on square footage. Quotes are
              estimates based on the information provided. Larger spaces may require multiple days
              or additional cleaners.
            </p>
          </div>

          {/* Access & Safety */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Access &amp; Safety</h3>
            <p className="mt-3 text-gray-700">
              Client agrees to provide safe access, electricity, and running water, and to disclose
              hazards (e.g., pets, chemicals, broken fixtures). Unsafe tasks may be declined.
            </p>
          </div>

          {/* Exclusions */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Exclusions</h3>
            <p className="mt-3 text-gray-700">
              Exterior windows, hazardous material removal, and high-risk ladder work are excluded
              unless agreed in writing.
            </p>
          </div>

          {/* Loss, Theft & Fragile Items (SOFTER WORDING) */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Loss, Theft &amp; Fragile Items</h3>
            <p className="mt-3 text-gray-700">
              We handle your home with care. To keep everything safe, please store cash, jewelry,
              and other small valuables before service and let us know about any fragile or
              irreplaceable items you’d like us to avoid.
            </p>
            <p className="mt-3 text-gray-700">
              While we work carefully, Vigorous Clean Co. can’t accept responsibility for{" "}
              <b>unsecured valuables</b>, <b>pre-existing or undisclosed damage</b>, or{" "}
              <b>normal wear and tear</b>. If an incident occurs during service, we’ll notify you
              promptly and work toward a reasonable solution. Please report any concerns within{" "}
              <b>24 hours</b>.
            </p>
          </div>

          {/* Our Staff */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Our Staff</h3>
            <p className="mt-3 text-gray-700">
              Our cleaners are professionally screened and trained to deliver consistent, reliable,
              and respectful service in your space.
            </p>
          </div>

          {/* Cancellations & Satisfaction */}
          <div className="rounded-2xl border border-gray-100 p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Cancellations &amp; Satisfaction</h3>
            <p className="mt-3 text-gray-700">
              Please follow the cancellation terms shown during booking to avoid fees. If something
              was missed, contact us within <b>24 hours</b> and we’ll make it right with a prompt
              re-clean or practical resolution.
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-6 text-sm">
          These terms may be updated; the latest version on this page applies.
        </p>
      </section>
    </div>
  );
}

