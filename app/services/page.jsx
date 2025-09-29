export default function Services() {
const items = [
{ title: 'Standard Home Cleaning', text: 'Kitchens, baths, bedrooms, living areas.' },
{ title: 'Deep Clean / Move‑In/Out', text: 'Detailing for rentals and turnovers.' },
{ title: 'Office Cleaning', text: 'Day‑rate pricing; after-hours available.' },
];
return (
<section className="mx-auto max-w-3xl">
<h1 className="text-3xl font-semibold tracking-tight">Our Services</h1>
<ul className="mt-6 grid grid-cols-1 gap-4">
{items.map((s) => (
<li key={s.title} className="rounded-2xl border border-neutral-200 bg-white p-4">
<h3 className="font-medium">{s.title}</h3>
<p className="text-sm text-neutral-700 mt-1">{s.text}</p>
</li>
))}
</ul>
<a href="/pricing" className="mt-6 inline-block rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">See pricing</a>
</section>
);
}
