// app/faq/page.js
export const metadata = {
  title: "FAQ • Vigorous Clean Co.",
  description: "Answers to common questions about services, pricing, supplies, and scheduling.",
};

const QA = [
  {
    q: "Do you bring your own supplies?",
    a: "Yes. We bring all supplies and equipment for standard and deep cleans, including eco- and pet-safe products. If you prefer we use your items (e.g., a specific vacuum or product), note it at booking.",
  },
  {
    q: "Do you service my area?",
    a: "We cover Los Angeles County and Orange County. If you’re right on the border or unsure, include your address in the notes and we’ll confirm before the appointment.",
  },
  {
    q: "How much will it cost?",
    a: "Transparent flat-rate pricing by square footage. Add-ons like inside fridge/oven, interior windows, and carpet shampoo are optional. See live rates on the Pricing page.",
  },
  {
    q: "Do you use green cleaning products?",
    a: "Yes. Our default kits are eco-friendly and low-fragrance while still effective. Tell us if you have sensitivities and we’ll accommodate.",
  },
  {
    q: "Do I need to be home?",
    a: "No. Many clients provide access via lockbox, front desk, or a trusted neighbor. If you are home, we’ll work efficiently around you.",
  },
  {
    q: "Can I trust your cleaning professionals?",
    a: "Absolutely. Cleaners are screened, ID-verified, and trained on our quality checklists and standards. We aim for the same pro each visit when possible.",
  },
  {
    q: "What if it takes more than one day?",
    a: "We follow clear multi-day pricing: full extra days are billed at the same daily rate; short wrap-ups are ~60% of the daily rate. See details on Pricing.",
  },
  {
    q: "How do recurring discounts work?",
    a: "Weekly 20% • Bi-weekly 15% • Monthly 10%. Discounts apply per visit after your plan starts.",
  },
  {
    q: "How do I reschedule or cancel?",
    a: "Please give at least 24 hours’ notice when possible. Use your confirmation email or contact us directly to adjust.",
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
              <span className="ml-4 text-emerald-700 group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-slate-700 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>

      <p className="mt-10 text-sm text-slate-600">
        Still have questions? Chat with us in the bottom-right or email{" "}
        <a href="mailto:vigorouscleanco@gmail.com" className="text-emerald-700 font-semibold">
          vigorouscleanco@gmail.com
        </a>. Prefer a quick call?{" "}
        <a href="tel:+14242605986" className="text-emerald-700 font-semibold">
          (424) 260-5986
        </a>.
      </p>
    </main>
  );
}
