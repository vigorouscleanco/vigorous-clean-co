// app/privacy/page.jsx
export default function Privacy(){
return (
<section className="mx-auto max-w-3xl space-y-6">
<header>
<h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
<p className="text-sm text-neutral-500">Last updated {new Date().toLocaleDateString()}</p>
</header>
<div className="prose prose-neutral max-w-none">
<p>We collect only what we need to provide services (name, contact, address, and service details). We never sell your data.</p>
<h3>Payments</h3>
<p>Payments are processed by Square. We don’t store full card numbers.</p>
<h3>Contact</h3>
<p>Email: support@vigorouscleanco.com</p>
</div>
</section>
);
}
