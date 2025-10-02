import Link from "next/link";

export const metadata = { title: "Book — Vigorous Clean Co." };

export default function BookPage() {
  // Your working Square booking URL (location-specific)
  const BOOK_URL =
    "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services?single=true";

  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-10">
          <h1 className="text-3xl font-semibold">Book Your Cleaning</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            We keep it simple: transparent, per-day pricing and secure online booking. New clients save{" "}
            <b>10%</b> with code <b>VIGOR10</b>.
          </p>
        </div>
      </section>

      {/* HOW BOOKING WORKS */}
      <section className="container-app py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-5">
            <h3 className="font-semibold">Per-Day Pricing</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We charge <b>per day</b> (up to ~8 hours per cleaner). Larger homes or offices may require multiple
              days or additional cleaners. See{" "}
              <Link href="/pricing" className="underline">Pricing</Link> for tiers.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5">
            <h3 className="font-semibold">Start Window</h3>
            <p className="text-gray-600 mt-2 text-sm">
              Available start times typically run between <b>8:00 AM and 12:00 PM</b> so the full-day clean can
              finish the same day. Need a specific time? Add a note at checkout or text{" "}
              <a href="tel:+14242605986" className="underline">(424) 260-5986</a> and we’ll work it out.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-5">
            <h3 className="font-semibold">Prepayment & Policies</h3>
            <p className="text-gray-600 mt-2 text-sm">
              We require <b>full prepayment</b> to reserve your slot. Cancellations: <b>48+ hours</b> → 100% refund;
              <b> 24–48 hours</b> → 50% refund; <b>under 24 hours/no-show/lock-out</b> → non-refundable. One
              complimentary reschedule with <b>24+ hours</b> notice (subject to availability). See full{" "}
              <Link href="/terms" className="underline">Terms</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* EMBEDDED SQUARE BOOKING */}
      <section className="container-app pb-12">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
          <iframe
            src={BOOK_URL}
            title="Vigorous Clean Co. Booking"
            className="w-full"
            style={{ height: "85vh" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Trouble viewing the calendar?{" "}
          <a className="underline" href={BOOK_URL} target="_blank" rel="noopener">
            Open booking in a new tab
          </a>
          .
        </p>
      </section>

      {/* FINAL REMINDERS */}
      <section className="container-app pb-14">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 text-sm text-gray-700">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              We charge <b>per day</b> (up to ~8 hours per cleaner). If you need a specific start time, add it in the
              booking notes or text us at{" "}
              <a className="underline" href="tel:+14242605986">
                (424) 260-5986
              </a>.
            </li>
            <li>
              By booking you agree to our{" "}
              <Link href="/terms" className="underline">Terms &amp; Disclaimer</Link>. Questions? Email{" "}
              <a className="underline" href="mailto:vigorouscleanco@gmail.com">
                vigorouscleanco@gmail.com
              </a>.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

