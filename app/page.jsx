export default function Home(){
return (
<section className="text-center py-10">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Vigorous Clean Co.</h1>
<p className="mt-3 text-neutral-600">Eco & pet‑friendly residential and office cleaning — LA & OC.</p>
<div className="mt-6 flex items-center justify-center gap-3">
<a href="/pricing" className="rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50">See pricing</a>
<a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services" className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">Book now</a>
</div>
</section>
);
}
