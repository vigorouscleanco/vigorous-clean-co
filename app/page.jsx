// app/pricing/page.jsx
{/* GRID */}
<section>
<h2 className="text-2xl md:text-3xl font-semibold mb-4">Homes & Apartments</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
{TIERS.map((t)=> (
<div key={t.label} className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between">
<h3 className="text-base font-semibold">{t.label}</h3>
{t.twoCleaners && <span className="text-[11px] rounded-full bg-neutral-50 px-2 py-1 text-neutral-700 border border-neutral-200">2 cleaners</span>}
</div>
<div className="mt-2 flex items-end gap-2">
<span className="text-4xl font-bold tracking-tight">{formatUSD(t.baseDayRate)}</span>
<span className="mb-1 text-sm text-neutral-500">/ day</span>
</div>
<p className="mt-1 text-xs text-neutral-600">Recommended: {t.daysRecommended} day{t.daysRecommended>1?"s":""}</p>
<div className="mt-4 space-y-2">
{[1,2,3].map((d)=> (
<div key={d} className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm">
<span>{d} day{d>1?"s":""}</span>
<span className="font-medium">{formatUSD(calcPrice(t.baseDayRate, d, t.twoCleaners))}</span>
</div>
))}
</div>
<div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-3">
<p className="text-xs font-medium text-neutral-700 mb-2">Recurring discounts</p>
<ul className="text-xs text-neutral-600 space-y-1">
{Object.entries(FREQUENCY_DISCOUNTS).map(([k,v])=> (
<li key={k} className="flex items-center justify-between"><span>{k}</span><span className="font-medium">–{Math.round(v*100)}%</span></li>
))}
</ul>
</div>
<a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services" className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-emerald-600 bg-white py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-50">Book this size</a>
</div>
))}
</div>
</section>


{/* INCLUDED */}
<section>
<h2 className="text-2xl md:text-3xl font-semibold">What’s included</h2>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
<h3 className="font-semibold">Standard (included)</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
{["Kitchens, baths, bedrooms, living areas","Dusting, surfaces, floors, trash & recycling","High‑touch sanitizing","Eco & pet‑safe products"].map((item)=>(
<li key={item} className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-600"/><span>{item}</span></li>
))}
</ul>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
<h3 className="font-semibold">All‑inclusive add‑ons (no extra fees)</h3>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
{["Inside fridge, oven, and microwave","Interior windows only (min. 5)","Cabinets & drawers (exteriors; interiors on request)","Move‑in/out detailing and rental turnovers"].map((item)=>(
<li key={item} className="flex items-start gap-2"><CheckIcon className="mt-0.5 h-4 w-4 text-emerald-600"/><span>{item}</span></li>
))}
</ul>
</div>
</div>
<p className="mt-3 text-xs text-neutral-500">* No exterior windows. Prices may vary for heavy build‑up.</p>
</section>
</div>
);
}
