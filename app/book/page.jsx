import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Book Your Cleaning | Vigorous Clean Co.",
  description:
    "Simple per-day pricing and secure online booking. New clients save 10% with code VIGOR10.",
};

export default function BookPage() {
  return (
    <div className="bg-white">
      {/* header / hero */}
      <section className="section-gradient">
        <div className="container-app py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-semibold">Book Your Cleaning</h1>
          <p className="mt-3 text-gray-600 max-w-2xl">
            We keep it simple: per-day pricing and secure online booking. New clients save{" "}
            <span className="font-semibold">10%</span> with code{" "}
            <span className="font-semibold">VIGOR10</span>.
          </p>

          {/* actions row */}
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <a
              href="https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-primary px-5 py-3 text-center text-white font-medium hover:opacity-90 transition"
            >
              Open Booking in New Tab
            </a>

            {/* (intentionally no phone CTA here—your floating phone widget covers calls) */}
          </div>
        </div>
      </section>

      {/* small notice */}
      <section>
        <div className="container-app pt-6 pb-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
            <p className="text-gray-700">
              We charge <span className="font-semibold">per day</span> (up to ~8 hours per cleaner).
              If you need a specific start time, add it in the booking notes. See our{" "}
              <Link href="/terms" className="underline hover:no-underline">Terms</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* embedded Square widget via next/script */}
      <section className="container-app py-6">
        <Script
          src="https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89.js"
          strategy="afterInteractive"
        />
      </section>
    </div>
  );
}


