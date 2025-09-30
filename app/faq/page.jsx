export const metadata = { title: "FAQ — Vigorous Clean Co." };

const faqs = [
  { q: "Do you bring supplies and equipment?", a: "Yes — we bring all eco- and pet-friendly products and basic equipment." },
  { q: "Do you clean exterior windows?", a: "We include interior windows only. Exterior windows are not included." },
  { q: "How do you price?", a: "Flat daily rates by square footage (per cleaner). Larger spaces may need multiple days or additional cleaners." },
  { q: "What areas do you serve?", a: "Greater Los Angeles." },
  { q: "Are your cleaners screened?", a: "Yes. Our cleaners are thoroughly screened and trained for consistency and professionalism." },
  { q: "What if something goes missing or is damaged?", a: "Please secure valuables and disclose fragile items. See our Terms for exclusions and our non-liability policy for loss/theft of unattended valuables." }
];

export default function FAQPage() {
  return (
    <div className="container-app py-14">
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-2xl border border-gray-100 p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="text-gray-600 mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
