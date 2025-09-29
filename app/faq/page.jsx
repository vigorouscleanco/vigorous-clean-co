// app/faq/page.jsx
export default function FAQ(){
const items = [
{ q: "Do you charge by the hour?", a: "No. We charge a flat day rate by square footage." },
{ q: "Do you clean exterior windows?", a: "No—interior only." },
{ q: "Are products pet‑safe?", a: "Yes, we use eco & pet‑safe cleaners." },
];
return (
<section className="mx-auto max-w-3xl">
<h1 className="text-3xl font-semibold tracking-tight">FAQs</h1>
<ul className="mt-6 space-y-4">
{items.map((it) => (
<li key={it.q} className="rounded-2xl border border-neutral-200 p-4 bg-white">
<h3 className="font-medium">{it.q}</h3>
<p className="text-sm text-neutral-700 mt-1">{it.a}</p>
</li>
))}
</ul>
</section>
);
}
