// app/terms/page.jsx
export const metadata = {
  title: "Terms — Vigorous Clean Co.",
  description:
    "Simple terms and policies for Vigorous Clean Co. — per-day pricing, trust & safety, access, exclusions, and cancellations.",
};

export default function TermsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-10">
          <h1 className="text-3xl font-semibold">Terms &amp; Policies</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            Clear, straightforward policies designed to keep your experience smooth and stress-free.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="container-app py-10">
        <div className="prose max-w-none prose-p:leading-relaxed prose-li:leading-relaxed">
          {/* Pricing & Scope */}
          <h2 className="text-2xl font-semibold">Pricing &amp; Scope</h2>
          <p className="mt-3">
            We charge <b>per day</b> (per cleaner), not hourly. One full day is up to ~8 hours of
            on-site work. Larger homes or deeper service needs may require multiple days or
            additional cleaners.
          </p>

          {/* Access & Safety */}
          <h2 className="text-2xl font-semibold mt-8">Access &amp; Safety</h2>
          <p className="mt-3">
            Please ensure safe access to the property at the scheduled time, with electricity and
            running water available. Let us know about pets, special instructions, or any hazards.
            Unsafe or specialty tasks may be declined or require written approval.
          </p>

          {/* Exclusions */}
          <h2 className="text-2xl font-semibold mt-8">Exclusions</h2>
          <p className="mt-3">
            The following are typically excluded unless specifically agreed to in writing:
            exterior windows, hazardous material removal, high-risk ladder work, mold remediation,
            and repairs. If you have a special request, please ask—we’ll advise on feasibility,
            timing, and pricing.
          </p>

          {/* Trust & Safety (REPLACED SECTION) */}
          <h2 className="text-2xl font-semibold mt-8">Trust &amp; Safety</h2>
          <p className="mt-3">
            Our cleaners are <b>professionally screened, trained, and held to strict quality standards</b>.
            We treat your home with respect, communicate clearly, and will let you know immediately
            if anything needs attention during your service.
          </p>

          {/* Valuables & Fragile Items (REPLACED SECTION) */}
          <h3 className="text-xl font-semibold mt-6">Valuables &amp; Fragile Items</h3>
          <p className="mt-3">
            To keep everything safe and efficient, please store cash, jewelry, and other small valuables
            before your appointment, and let us know about any fragile or irreplaceable items you’d like
            us to avoid. While we work carefully, Vigorous Clean Co. can’t accept responsibility for{" "}
            <b>unsecured valuables</b> or <b>pre-existing/normal wear and tear</b>. If an incident occurs,
            we’ll notify you promptly and work with you on a reasonable solution. Please report any concerns
            within <b>24 hours</b>.
          </p>

          {/* Cancellations & Satisfaction */}
          <h2 className="text-2xl font-semibold mt-8">Cancellations &amp; Satisfaction</h2>
          <p className="mt-3">
            Please follow the cancellation terms shown during booking to avoid fees. If something was
            missed, contact us within <b>24 hours</b> and we’ll make it right with a prompt re-clean
            or practical resolution.
          </p>

          {/* Policy Updates */}
          <p className="text-gray-600 mt-6 text-sm">
            These terms may be updated; the latest version on this page applies.
          </p>
        </div>
      </section>
    </div>
  );
}
