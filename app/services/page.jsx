export const metadata = { title: "Services — Vigorous Clean Co." };

const services = [
  {
    title: "Standard Home Clean",
    badges: ["Maintenance", "Existing clients"],
    items: [
      "Kitchen & appliances exterior",
      "Bathrooms & fixtures",
      "Bedrooms & living areas",
      "Dusting & surfaces",
      "Floors (vacuum & mop)",
      "Interior windows & mirrors",
    ],
  },
  {
    title: "Deep Clean (All-Inclusive)",
    badges: ["First visit"],
    items: [
      "Everything in Standard",
      "Baseboards & trim",
      "Detail in kitchens/baths",
      "Inside oven & fridge",
      "Light fixtures & vents",
    ],
  },
  {
    title: "Office Clean",
    badges: [],
    items: [
      "Desks & common areas",
      "Bathrooms",
      "Trash removal",
      "Breakroom/kitchenette",
      "Floors",
      "Interior glass",
    ],
  },
];

const products = {
  "All-Purpose": [
    "Seventh Generation Multi-Surface",
    "Method All-Purpose",
    "Mrs. Meyer’s Multi-Surface",
    "Better Life All-Purpose",
  ],
  Bathroom: [
    "Seventh Generation Bathroom",
    "ECOS Bathroom",
    "Method Antibac Bathroom",
  ],
  "Kitchen/Degreasers": [
    "Ecover Cream Scrub",
    "Better Life Kitchen & Bath Scrubber",
    "Method Heavy Duty Degreaser",
  ],
  "Glass/Windows": [
    "Seventh Generation Glass",
    "Method Glass + Surface",
    "ECOS Window",
  ],
  Floors: ["Bona Hardwood", "Method Squirt + Mop", "ECOS Vinegar Floor"],
  "Carpet/Upholstery": [
    "Biokleen Carpet & Rug Shampoo",
    "ECOS Pet Stain & Odor Remover",
    "Nature’s Miracle Stain & Odor Eliminator",
  ],
  Disinfectants: [
    "Seventh Generation Wipes",
    "CleanWell Botanical Spray",
    "Benefect Decon 30",
  ],
};

function Badge({ label }: { label: string }) {
  const styles: Record<string, string> = {
    "First visit": "bg-primary/10 text-primary",
    Maintenance: "bg-emerald-100 text-emerald-800",
    "Existing clients": "bg-gray-100 text-gray-700",
  };
  const cls =
    styles[label] ??
    "bg-gray-100 text-gray-700"; /* safe fallback if new labels appear */

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${cls}`}>
      {label}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <div className="container-app py-14">
      {/* Header */}
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <p className="text-gray-600 mt-4 max-w-2xl">
        Eco-friendly and pet-safe cleaning for homes, offices, and rentals. We price by
        square footage per day — never by the hour.
      </p>

      {/* Legend / flow hint */}
      <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5">
        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-medium">New here?</span> Start with{" "}
          <span className="font-semibold">Deep Clean (All-Inclusive)</span>.{" "}
          <span className="font-medium">Returning?</span> Move to{" "}
          <span className="font-semibold">Standard Home Clean</span>{" "}
          <span className="text-gray-500">(maintenance)</span> — and save with recurring
          options.
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft transition bg-white"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              {s.badges.map((b) => (
                <Badge key={b} label={b} />
              ))}
            </div>

            <ul className="mt-4 space-y-3 text-gray-700">
              {s.items.map((it, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="select-none">•</span>
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA row */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="/book"
          className="rounded-2xl bg-primary px-5 py-3 text-center text-white font-medium shadow-soft hover:opacity-90 transition"
        >
          Book Your First Clean
        </a>
        <a
          href="/book#recurring"
          className="rounded-2xl border border-gray-200 px-5 py-3 text-center font-medium hover:bg-gray-50 transition"
        >
          See Recurring Savings
        </a>
      </div>

      {/* Products */}
      <div className="mt-12 rounded-2xl bg-grayLight p-6">
        <h2 className="text-xl font-semibold">Eco &amp; Pet-Friendly Products We Use</h2>

        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {Object.entries(products).map(([cat, items]) => (
            <div key={cat} className="rounded-xl border border-gray-100 p-4 bg-white">
              <h4 className="font-medium">{cat}</h4>
              <ul className="mt-2 text-gray-700 list-disc list-inside">
                {items.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Only approved products are used to ensure safety and consistency for all clients.
        </p>
      </div>
    </div>
  );
}

