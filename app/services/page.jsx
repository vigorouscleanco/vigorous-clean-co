export const metadata = { title: "Services — Vigorous Clean Co." };

const services = [
  {
    title: "Standard Home Clean (Recurring)",
    badge: "Maintenance",
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
    badge: "First visit",
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
    badge: "Business",
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

function Tag({ children, tone = "default" }) {
  const tones = {
    default: "bg-gray-100 text-gray-700",
    Maintenance: "bg-emerald-100 text-emerald-800",
    "First visit": "bg-primary/10 text-primary",
    Business: "bg-sky-100 text-sky-800",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
        tones[tone] || tones.default
      }`}
    >
      {children}
    </span>
  );
}

export default function ServicesPage() {
  return (
    <div className="container-app py-14">
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <p className="text-gray-600 mt-4 max-w-2xl">
        Eco-friendly and pet-safe cleaning for homes, offices, and rentals. We price by square
        footage per day — never by the hour.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft"
          >
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{s.title}</h3>
              {s.badge && <Tag tone={s.badge}>{s.badge}</Tag>}
            </div>
            <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
              {s.items.map((it, idx) => (
                <li key={idx}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Which clean should I book? */}
      <div className="mt-10 rounded-2xl bg-grayLight p-6 border border-gray-100">
        <h2 className="text-xl font-semibold">Which clean should I book?</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-gray-700">
          <div className="rounded-xl bg-white border border-gray-100 p-4">
            <div className="text-sm font-semibold">Step 1</div>
            <p className="mt-1">
              New client? Start with an <strong>All-Inclusive Deep Clean</strong>.
            </p>
          </div>
          <div className="rounded-xl bg-white border border-gray-100 p-4">
            <div className="text-sm font-semibold">Step 2</div>
            <p className="mt-1">
              Love the result? Switch to <strong>Standard (Recurring)</strong> maintenance.
            </p>
          </div>
          <div className="rounded-xl bg-white border border-gray-100 p-4">
            <div className="text-sm font-semibold">Step 3</div>
            <p className="mt-1">
              Choose weekly, bi-weekly, or monthly for automatic{" "}
              <strong>recurring savings</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Eco & Pet-Friendly Section (Minimal + Professional) */}
      <div className="mt-12 rounded-2xl bg-grayLight p-6 border border-gray-100">
        <h2 className="text-xl font-semibold">Eco & Pet-Friendly Cleaning</h2>
        <p className="text-gray-700 mt-3 max-w-3xl">
          We care about your home, your pets, and the planet. Every cleaning uses
          eco-friendly, non-toxic products that deliver a spotless finish — safely.
        </p>
      </div>
    </div>
  );
}

