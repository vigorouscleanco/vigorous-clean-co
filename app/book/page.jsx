"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export const metadata = { title: "Book — Vigorous Clean Co." };

export default function BookPage() {
  // ✅ From your Square “Widget code” (keep it EXACT)
  const SQUARE_WIDGET_JS =
    "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89.js";

  // ✅ Same URL but WITHOUT .js (used for the fallback link)
  const SQUARE_WIDGET_LINK =
    "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89";

  const mountRef = useRef(null);

  // Load the Square widget script when this page renders
  useEffect(() => {
    if (!mountRef.current) return;
    mountRef.current.innerHTML = ""; // clear anything old
    const s = document.createElement("script");
    s.src = SQUARE_WIDGET_JS;
    s.async = true;
    mountRef.current.appendChild(s);
    return () => {
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, [SQUARE_WIDGET_JS]);

  return (
    <div>
      {/* HERO */}
      <section className="section-gradient">
        <div className="container-app py-10">
          <h1 className="text-3xl font-semibold">Book Your Cleaning</h1>
          <p className="text-gray-600 mt-2 max-w-2xl">
            We keep it simple: per-day pricing and secure online booking. New clients save{" "}
            <b>10%</b> with code <b>VIGOR10</b>.
          </p>
        </div>
      </section>

      {/* NOTE */}
      <section className="container-app py-6">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-700 mb-4">
          We charge <b>per day</b> (up to ~8 hours per cleaner). If you need a specific start time,
          add it in the booking notes or text{" "}
          <a className="underline" href="tel:+14242605986">
            (424) 260-5986
          </a>
          . See our <Link href="/terms" className="underline">Terms</Link>.
        </div>
      </section>

      {/* SQUARE WIDGET (script embed mounts here) */}
      <section className="container-app pb-12">
        <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
          <div ref={mountRef} className="min-h-[75vh]" />
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

