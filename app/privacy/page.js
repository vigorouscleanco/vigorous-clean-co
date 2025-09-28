// app/privacy/page.js
export const metadata = { title: "Privacy Policy — Vigorous Clean Co." };

export default function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <a href="/" className="text-emerald-700 hover:underline">← Back to Home</a>
      <h1 className="mt-4 text-3xl font-bold text-emerald-700">Privacy Policy</h1>
      <p className="mt-3 text-slate-700">
        We collect only the information needed to manage bookings and provide service (such as name, address, email, and
        phone). We do not sell personal data. If you have questions about your data, contact us at
        <a href="mailto:vigorouscleanco@gmail.com" className="text-emerald-700 font-semibold"> vigorouscleanco@gmail.com</a>.
      </p>
    </main>
  );
}
