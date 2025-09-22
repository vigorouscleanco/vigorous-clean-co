"use client";

export default function Page() {
  return (
    <main className="p-10">
      {/* Hero */}
      <section id="home" className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-emerald-600">
          Welcome to Vigorous Clean Co.
        </h1>
        <p className="text-lg text-slate-700">
          Eco-friendly cleaning services with flat-rate pricing in LA & OC.
        </p>
      </section>

      {/* Residential Pricing */}
      <section id="pricing" className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Residential Pricing (Per Day)</h2>
        <table className="w-full border border-slate-300 text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 border border-slate-300">Home Size</th>
              <th className="p-3 border border-slate-300">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3 border border-slate-300">0–500 sq ft</td><td className="p-3 border border-slate-300">$100</td></tr>
            <tr><td className="p-3 border border-slate-300">501–1,000 sq ft</td><td className="p-3 border border-slate-300">$175</td></tr>
            <tr><td className="p-3 border border-slate-300">1,001–1,500 sq ft</td><td className="p-3 border border-slate-300">$225</td></tr>
            <tr><td className="p-3 border border-slate-300">1,501–2,000 sq ft</td><td className="p-3 border border-slate-300">$275</td></tr>
            <tr><td className="p-3 border border-slate-300">2,001–2,500 sq ft</td><td className="p-3 border border-slate-300">$325</td></tr>
            <tr><td className="p-3 border border-slate-300">2,501+ sq ft</td><td className="p-3 border border-slate-300">Custom Quote</td></tr>
          </tbody>
        </table>
      </section>

      {/* Contact (for the navbar button) */}
      <section id="contact" className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
        <p className="text-slate-700">
          Call <a className="text-emerald-700 font-semibold" href="tel:4242605986">(424) 260-5986</a> or email{" "}
          <a className="text-emerald-700 font-semibold" href="mailto:vigorouscleanco@gmail.com">
            vigorouscleanco@gmail.com
          </a>.
        </p>
      </section>
    </main>
  );
}
