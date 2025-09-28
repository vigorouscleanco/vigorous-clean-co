// app/terms/page.js
export const metadata = { title: "Terms of Service — Vigorous Clean Co." };

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <a href="/" className="text-emerald-700 hover:underline">← Back to Home</a>
      <h1 className="mt-4 text-3xl font-bold text-emerald-700">Terms of Service</h1>
      <p className="mt-3 text-slate-700">
        By booking with Vigorous Clean Co., you agree to our policies regarding scheduling, cancellations, and payment.
        We reserve the right to refuse unsafe or unsanitary conditions. Pricing may be adjusted for heavy buildup,
        post-construction, or specialty requests. Property access and parking are the client’s responsibility; any parking
        fees are billed at cost.
      </p>
    </main>
  );
}
