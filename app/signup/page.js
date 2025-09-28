// app/signup/page.js
export const metadata = { title: "Sign Up — Vigorous Clean Co." };

export default function SignUp() {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <a href="/" className="text-sm text-emerald-700 hover:underline">← Back to Home</a>

      <h1 className="mt-3 text-3xl font-extrabold text-emerald-700">Create Account</h1>
      <p className="mt-2 text-slate-600">
        Track visits, manage bookings, and unlock subscriber discounts (coming soon).
      </p>

      <form className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
          <input id="name" type="text" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
          <input id="password" type="password" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
        </div>
        <button type="submit" className="w-full rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800" title="Demo only — not wired yet">
          Create Account
        </button>
        <div className="text-sm text-slate-600">
          Already have an account? <a href="/account" className="text-emerald-700 hover:underline">Log in</a>
        </div>
      </form>

      <p className="mt-6 text-xs text-slate-500">
        For now, please book via Square; we’ll match your email to your profile.
      </p>
    </main>
  );
}
