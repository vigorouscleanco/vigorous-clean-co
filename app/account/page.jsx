// app/account/page.jsx
export const metadata = { title: "My Account | Vigorous Clean Co." };
export default function Account(){
return (
<section className="mx-auto max-w-3xl space-y-6">
<h1 className="text-3xl font-semibold tracking-tight">My Account</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="rounded-2xl border border-neutral-200 p-4">
<h3 className="font-semibold">Profile</h3>
<p className="text-sm text-neutral-600 mt-1">Update your name, email, and phone.</p>
</div>
<div className="rounded-2xl border border-neutral-200 p-4">
<h3 className="font-semibold">Billing</h3>
<p className="text-sm text-neutral-600 mt-1">Payments are securely handled by Square.</p>
</div>
</div>
</section>
);
}
