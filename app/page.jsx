export default function Home() {
return (
<section className="py-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
LA & OC • Eco & pet-friendly
</span>
<h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Your space, sparkling with vigor</h1>
<p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
Simple, flat-rate cleaning by square footage. Add-ons are included. Book online in minutes.
</p>
<div className="mt-6 flex items-center justify-center gap-3">
<a href="/pricing" className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">See pricing</a>
<a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Book now</a>
</div>
</div>


<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
{[{
title: 'Eco & pet‑safe',
body: 'We use products that are safe for families and pets.'
},{
title: 'Flat day rates',
body: 'No hourly games. We charge per day and get it done.'
},{
title: 'Transparent tiers',
body: 'Choose by square footage with clear 1–3 day totals.'
}].map((c) => (
<div key={c.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
<h3 className="font-semibold">{c.title}</h3>
<p className="text-sm text-neutral-700 mt-2">{c.body}</p>
</div>
))}
</div>
</section>
);
}
