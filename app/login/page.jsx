// app/login/page.jsx
export const metadata = { title: "Login | Vigorous Clean Co." };
export default function Login(){
return (
<section className="mx-auto max-w-sm">
<h1 className="text-2xl font-semibold tracking-tight">Log in</h1>
<p className="mt-1 text-sm text-neutral-600">Manage bookings and preferences.</p>
<form className="mt-6 space-y-3">
<input type="email" required placeholder="Email" className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
<input type="password" required placeholder="Password" className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
<button className="w-full rounded-xl bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Log in</button>
</form>
<p className="mt-3 text-sm text-neutral-600">No account? <a href="/signup" className="text-emerald-700 hover:underline">Create one</a>.</p>
</section>
);
}
