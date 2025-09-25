export default function ContactCompact() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14" id="contact">
      <h2 className="text-3xl font-bold text-emerald-700 text-center">Contact Us</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <a href="tel:+14242605986" className="rounded-2xl border bg-white p-6 shadow-sm hover:border-emerald-600 transition">
          <div className="flex items-center gap-3 text-slate-900">
            {/* Phone icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v2a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 013.15 8.81 19.86 19.86 0 01.08 0.18 2 2 0 012.07 0h2a2 2 0 012 1.72c.13 1.06.38 2.09.73 3.07a2 2 0 01-.45 2.11L5.54 8.46a16 16 0 007 7l1.56-1.56a2 2 0 012.11-.45c.98.35 2.01.6 3.07.73A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-lg font-semibold">(424) 260-5986</span>
          </div>
        </a>

        <a href="mailto:vigorouscleanco@gmail.com" className="rounded-2xl border bg-white p-6 shadow-sm hover:border-emerald-600 transition">
          <div className="flex items-center gap-3 text-slate-900">
            {/* Mail icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-lg font-semibold">vigorouscleanco@gmail.com</span>
          </div>
        </a>
      </div>

      <p className="mt-6 text-center text-sm text-slate-600">
        New clients: use <span className="font-semibold text-emerald-700">VIGOR10</span> for 10% off. Applied at checkout.
      </p>
    </section>
  );
}
