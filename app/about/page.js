// app/about/page.js
"use client";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <a href="/" className="text-sm text-emerald-700 hover:underline">← Back to Home</a>
        <h1 className="mt-2 text-4xl font-bold text-emerald-700">About Us</h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Vigorous Clean Co. delivers eco-friendly residential and office cleaning with flat-rate transparency, consistent quality, and
          friendly service. We proudly serve Los Angeles County & Orange County.
        </p>
      </main>
    </>
  );
}
