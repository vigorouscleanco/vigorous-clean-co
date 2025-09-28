// app/account/page.js
export const metadata = { title: "Account — Vigorous Clean Co." };

export default function Account() {
  return (
    <main className="mx-auto max-w-md px-4 py-16">
      <a href="/" className="text-sm text-emerald-700 hover:underline">← Back to Home</a>

      <h1 className="mt-3 text-3xl font-extrabold text-emerald-700">Login</h1>
      <p className="mt-2 text-slate-600">
        Sign in to view bookings and history (feature coming soon).
      </p>

      <form className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
          <input id="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
          <input id="password" type="password" required className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"/>
        </div>
        <button type="submit" className="w-full rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white hover:bg-emerald-800" title="Demo only — not wired yet">
          Sign In
        </button>
        <div className="flex items-center justify-between text-sm">
          <a href="#" className="text-emerald-700 hover:underline">Forgot password?</a>
          <a href="/signup" className="text-emerald-700 hover:underline">Create account</a>
        </div>
      </form>

      <div className="mt-6 text-xs text-slate-500">
        For now, book via Square — we’ll match your email to your profile after your first booking.
      </div>
    </main>
  );
}

