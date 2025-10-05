export const metadata = { title: "FAQ — Vigorous Clean Co." };

const faqs = [
  {
    q: "Do you bring supplies and equipment?",
    a: "Yes — we bring all eco- and pet-friendly products and basic equipment.",
  },
  {
    q: "Do you clean exterior windows?",
    a: "We include interior windows only. Exterior windows are not included.",
  },
  {
    q: "How do you price?",
    a: "Flat daily rates by square footage (per cleaner). Larger spaces may require multiple days or additional cleaners.",
  },
  {
    q: "What areas do you serve?",
    a: "Los Angeles and Orange County.",
  },
  {
    q: "Are your cleaners screened?",
    a: "Yes. Our cleaners are thoroughly screened and trained for consistency and professionalism.",
  },
  {
    q: "How do you handle fragile or valuable items?",
    a: "For peace of mind, please store small valuables (cash, jewelry) and let us know about any fragile or special-care items you’d like us to avoid. See our Terms for full details.",
  },
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
