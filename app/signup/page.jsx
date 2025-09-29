// app/signup/page.jsx
export const metadata = { title: "Sign up | Vigorous Clean Co." };
export default function Signup(){
return (
<section className="mx-auto max-w-sm">
<h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
<p className="mt-1 text-sm text-neutral-600">Book faster and manage recurring cleanings.</p>
<form className="mt-6 space-y-3">
<input type="text" required placeholder="Full name" className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
<input type="email" required placeholder="Email" className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
<input type="password" required placeholder="Password" className="w-full rounded-xl border border-neutral-300 px-3 py-2" />
<button className="w-full rounded-xl bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Create account</button>
</form>
<p className="mt-3 text-sm text-neutral-600">Already have an account? <a href="/login" className="text-emerald-700 hover:underline">Log in</a>.</p>
</section>
);
}
