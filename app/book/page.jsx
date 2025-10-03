// app/book/page.jsx
import Link from "next/link";
import dynamic from "next/dynamic";

// Load the client widget only in the browser
const SquareWidget = dynamic(() => import("../components/SquareWidget.jsx"), { ssr: false });

export const metadata = { title: "Book — Vigorous Clean Co." };

export default function BookPage() {
  // Same as your widget URL but WITHOUT .js (fallback open-in-new-tab link)
  const SQUARE_WIDGET_LINK =
    "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89";

  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-10">
          <h1 className="text-3xl font-semibold">Book Your Cleaning</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            We keep it simple: per-day pricing and secure online booking.
            New clients save <b>10%</b> with code <b>VIGOR10</b>.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={SQUARE_WIDGET_LINK}
              target="_blank"
              rel="noopener"
              className="rounded-2xl bg-primary px-5 py-2 text-white shadow-soft hover:opacity-90 transition"
            >
              Open Booking in New Tab
            </a>
            <a
              href="tel:+14242605986"
              className="rounded-2xl border px-5 py-2 text-gray-800 hover:bg-gray-50 transition"
            >
              Questions? (424) 260-5986
            </a>
          </div>
        </div>
      </section>

      {/* QUICK NOTE */}
      <section className="container-app py-6">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-700">
          We charge <b>per day</b> (up to ~8 hours per cleaner). If you need a specific
          start time, add it in the booking notes or text{" "}
          <a className="underline" href="tel:+14242605986">
            (424) 260-5986
          </a>
          . See our{" "}
          <Link href="/terms" className="underline">
            Terms
          </Link>
          .
        </div>
      </section>

      {/* EMBEDDED SQUARE CALENDAR */}
      <section className="container-app pb-12">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
          <SquareWidget />
        </div>

        <p className="text-xs text-gray-500 mt-3">
          Trouble viewing the calendar?{" "}
          <a className="underline" href={SQUARE_WIDGET_LINK} target="_blank" rel="noopener">
            Open booking in a new tab
          </a>
          .
        </p>
      </section>
    </div>
  );
}

