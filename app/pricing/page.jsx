// app/pricing/page.jsx
const TIERS = [
{ label: "0–500 sq ft", baseDayRate: 149, daysRecommended: 1 },
{ label: "501–1,000 sq ft", baseDayRate: 189, daysRecommended: 1 },
{ label: "1,001–1,500 sq ft", baseDayRate: 229, daysRecommended: 1 },
{ label: "1,501–2,000 sq ft", baseDayRate: 269, daysRecommended: 1 },
{ label: "2,001–2,500 sq ft", baseDayRate: 319, daysRecommended: 1 },
{ label: "2,501–3,000 sq ft", baseDayRate: 369, daysRecommended: 1 },
{ label: "3,001–3,500 sq ft", baseDayRate: 429, daysRecommended: 1 },
{ label: "3,501–4,000 sq ft", baseDayRate: 499, daysRecommended: 1, twoCleaners: true },
{ label: "4,001–4,500 sq ft", baseDayRate: 559, daysRecommended: 1, twoCleaners: true },
{ label: "4,501–5,000 sq ft", baseDayRate: 619, daysRecommended: 1, twoCleaners: true },
];


const FREQUENCY_DISCOUNTS = { OneTime: 0, Monthly: 0.05, Biweekly: 0.08, Weekly: 0.12 };
const SECOND_CLEANER_FEE = 89;


function formatUSD(n) { return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(n); }
function calcPrice(dayRate, days, twoCleaners) { return dayRate * days + (twoCleaners ? SECOND_CLEANER_FEE * days : 0); }


function CheckIcon(props){
return (<svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" aria-hidden="true" {...props}>
<path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
}


export default function PricingPage(){
return (
<div className="space-y-10">
{/* HERO */}
<section className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-800">
LA & OC • Eco‑friendly
</span>
<h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">Flat‑rate pricing by square footage</h1>
<p className="mt-3 text-neutral-600 max-w-2xl mx-auto">We charge per day, not per hour. Add‑ons are included. Book online in minutes.</p>
<a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">Book Now</a>
</section>


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
}
