export const metadata = {
  title: "FAQ • Vigorous Clean Co.",
  description: "Answers to common questions about services, pricing, supplies, scheduling, and more.",
};

const QA = [
  {
    q: "Do you bring your own supplies?",
    a: "Yes. We bring all supplies and equipment needed for standard and deep cleaning, including eco- and pet-safe products. If you prefer we use your equipment (e.g., special vacuum), just let us know in the booking notes.",
  },
  {
    q: "Do you service my area?",
    a: "We cover Los Angeles County and Orange County. If you’re on the border or not sure, contact us with your address—we’ll confirm availability.",
  },
  {
    q: "How much will it cost?",
    a: "We use transparent, flat-rate pricing by home size or office square footage. À la carte tasks (like inside fridge/oven, interior windows, carpet shampoo) are optional add-ons. See current rates on the Pricing page.",
  },
  {
    q: "Do you use green products for cleaning?",
    a: "Yes. We prioritize eco-friendly, low-fragrance products that are safe for families and pets, while still being effective.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Many clients provide entry instructions (lockbox, front desk, key). If you’ll be home, that’s fine too—our team is efficient and respectful of your space.",
  },
  {
    q: "Can I trust your cleaning professionals?",
    a: "Absolutely. All cleaners are vetted professionals who pass strict screening. We focus on consistency, reliability, and respect for your property.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <a href="/" className="text-emerald-700 hover:underline">← Back to Home</a>
      <h1 className="mt-4 text-4xl font-bold text-emerald-700">Frequently Asked Questions</h1>

      <div className="mt-8 divide-y rounded-2xl border bg-white shadow-sm">
        {QA.map((item, idx) => (
          <details key={idx} className="group p-6">
            <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between">
              {item.q}
              <span className="ml-4 text-emerald-700 group-open:rotate-45 transition">
                +
              </span>
            </summary>
            <p className="mt-3 text-slate-700 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm text-slate-600">
        Still have questions? Email us at{" "}
        <a href="mailto:vigorouscleanco@gmail.com" className="text-emerald-700 font-semibold">
          vigorouscleanco@gmail.com
        </a>{" "}
        or call{" "}
        <a href="tel:+14242605986" className="text-emerald-700 font-semibold">
          (424) 260-5986
        </a>.
      </p>
    </main>
  );
}
