export const metadata = { title: "About — Vigorous Clean Co." };

export default function AboutPage() {
  return (
    <div className="container-app py-20">
      <h1 className="text-3xl font-semibold">Vigorous Clean Co.</h1>
      <p className="text-gray-600 mt-4 max-w-3xl">
        We’re a Los Angeles cleaning company built on three promises: eco-friendly products, reliable people, and results
        you can feel the second you walk in. From apartments and family homes to offices and rentals, we deliver
        consistent, healthy spaces without the hassle.
      </p>

      <div className="mt-10 grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold">What We Do</h3>
          <p className="text-gray-600 mt-2">
            Standard and deep home cleans, office maintenance, move-in/move-out, and Airbnb turnovers. We price by the
            day (per cleaner), not by the hour—so we stay until it’s clean.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold">How We Work</h3>
          <p className="text-gray-600 mt-2">
            Trained, screened cleaners follow detailed checklists and bring approved eco & pet-friendly supplies.
            Flexible scheduling and clear communication keep everything easy.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-6">
          <h3 className="font-semibold">Why It’s Better</h3>
          <ul className="text-gray-600 mt-2 list-disc list-inside space-y-1">
            <li>Eco-conscious, safer products</li>
            <li>Transparent, square-foot pricing</li>
            <li>Consistent quality and care</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl bg-grayLight p-6">
        <h3 className="font-semibold">Service Area</h3>
        <p className="text-gray-600 mt-2">Greater Los Angeles.</p>
        <p className="text-gray-600 mt-4">
          New clients receive <b>10% off</b> their first cleaning — discount is applied after service completion.
          We’d love to take cleaning off your to-do list.
        </p>
      </div>
    </div>
  );
}
