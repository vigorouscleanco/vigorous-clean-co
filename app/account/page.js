// app/account/page.js
"use client";
import Navbar from "../components/Navbar";

export default function AccountPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <a href="/" className="text-sm text-emerald-700 hover:underline">← Back to Home</a>
        <h1 className="mt-2 text-4xl font-bold text-emerald-700">Your Account</h1>
        <p className="mt-3 max-w-2xl text-slate-700">
          Coming soon: log in to view your past cleanings, upcoming appointments, and rewards.  
          Sign up today and get <strong>10% off</strong> your first service with code <strong>VIGOR10</strong>.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a href="https://clerk.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50">
            Use Clerk (easy, free tier)
          </a>
          <a href="https://supabase.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-50">
            Use Supabase Auth + NextAuth
          </a>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Tip: Start with Clerk for the fastest setup; later, tie bookings to your Square customer IDs to show service history.
        </p>
      </main>
    </>
  );
}
