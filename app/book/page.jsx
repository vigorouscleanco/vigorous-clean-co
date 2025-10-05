import Link from "next/link";
import SquareWidget from "../components/SquareWidget";

export const metadata = {
  title: "Book Your Cleaning | Vigorous Clean Co.",
  description:
    "Simple per-day pricing and secure online booking. New clients save 10% with code VIGOR10.",
};

export default function BookPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
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
              className="rounded-2xl bg-primary px-5 py-3 text-center text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Open Booking in New Tab
            </a>

            <Link
              href="/pricing"
              className="rounded-2xl border border-gray-200 px-5 py-3 text-center font-medium hover:bg-gray-50 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ONE-LINER ABOUT RATES */}
      <section>
        <div className="container-app pt-6 pb-2">
          <div className="rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
            <p className="text-gray-700">
              We charge <span className="font-semibold">per day</span> (up to ~8 hours per
              cleaner). If you need a specific start time, add it in the booking notes. See our{" "}
              <Link href="/terms" className="underline hover:no-underline">
                Terms
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* RECURRING SAVINGS */}
      <section>
        <div className="container-app py-8 sm:py-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">Recurring Client Savings</h2>
          <p className="text-gray-600 mt-2 max-w-2xl">
            After your first (All-Inclusive) visit, switch to maintenance cleans and save on
            every visit. Discounts apply to the same per-day rate used for your home’s size.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {/* Weekly */}
            <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition">
              <div className="text-5xl font-semibold text-primary">20%</div>
              <div className="mt-2 font-semibold">Weekly</div>
              <p className="text-gray-600 mt-2">
                Best shine—kitchen, baths, dusting & floors stay consistently fresh.
              </p>
            </div>

            {/* Bi-Weekly */}
            <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition">
              <div className="text-5xl font-semibold text-primary">15%</div>
              <div className="mt-2 font-semibold">Every 2 Weeks</div>
              <p className="text-gray-600 mt-2">
                Most popular—great balance of price and upkeep.
              </p>
            </div>

            {/* Monthly */}
            <div className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition">
              <div className="text-5xl font-semibold text-primary">10%</div>
              <div className="mt-2 font-semibold">Monthly</div>
              <p className="text-gray-600 mt-2">
                A reliable refresh each month to keep things under control.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-5">
            <h3 className="font-semibold">How it works</h3>
            <ol className="mt-2 list-decimal pl-5 text-gray-700 space-y-1">
              <li>Book your first visit here (All-Inclusive deep clean).</li>
              <li>After the first visit, we set up your recurring schedule for you.</li>
              <li>Your recurring discount is applied from visit #2 onward.</li>
            </ol>
            <p className="text-xs text-gray-500 mt-3">
              Discounts are applied by our team when we create your recurring series in Square.
            </p>
          </div>
        </div>
      </section>

      {/* EMBEDDED SQUARE WIDGET (component) */}
      <section className="container-app pb-10">
        <SquareWidget />
      </section>
    </div>
  );
}


