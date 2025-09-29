export const metadata = { title: "Services — Vigorous Clean Co." };

const services = [
  { title: "Standard Home Clean", items: ["Kitchen & appliances exterior", "Bathrooms & fixtures", "Bedrooms & living areas", "Dusting & surfaces", "Floors (vacuum & mop)", "Interior windows & mirrors"] },
  { title: "Deep Clean (All-Inclusive)", items: ["Everything in Standard", "Baseboards & trim", "Detail in kitchens/baths", "Inside oven & fridge", "Light fixtures & vents"] },
  { title: "Office Clean", items: ["Desks & common areas", "Bathrooms", "Trash removal", "Breakroom/kitchenette", "Floors", "Interior glass"] },
];

const products = {
  "All-Purpose": ["Seventh Generation Multi-Surface", "Method All-Purpose", "Mrs. Meyer’s Multi-Surface", "Better Life All-Purpose"],
  "Bathroom": ["Seventh Generation Bathroom", "ECOS Bathroom", "Method Antibac Bathroom"],
  "Kitchen/Degreasers": ["Ecover Cream Scrub", "Better Life Kitchen & Bath Scrubber", "Method Heavy Duty Degreaser"],
  "Glass/Windows": ["Seventh Generation Glass", "Method Glass + Surface", "ECOS Window"],
  "Floors": ["Bona Hardwood", "Method Squirt + Mop", "ECOS Vinegar Floor"],
  "Carpet/Upholstery": ["Biokleen Carpet & Rug Shampoo", "ECOS Pet Stain & Odor Remover", "Nature’s Miracle Stain & Odor Eliminator"],
  "Disinfectants": ["Seventh Generation Wipes", "CleanWell Botanical Spray", "Benefect Decon 30"]
};

export default function ServicesPage() {
  return (
    <div className="container-app py-14">
      <h1 className="text-3xl font-semibold">Our Services</h1>
      <p className="text-gray-600 mt-4 max-w-2xl">
        Eco-friendly and pet-safe cleaning for homes, offices, and rentals. We price by square footage per day — never by the hour.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="rounded-2xl border border-gray-100 p-6 hover:shadow-soft">
            <h3 className="font-semibold">{s.title}</h3>
            <ul className="mt-3 text-gray-600 list-disc list-inside space-y-1">
              {s.items.map((it, idx) => <li key={idx}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-grayLight p-6">
        <h2 className="text-xl font-semibold">Eco & Pet-Friendly Products We Use</h2>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {Object.entries(products).map(([cat, items]) => (
            <div key={cat} className="rounded-xl border border-gray-100 p-4 bg-white">
              <h4 className="font-medium">{cat}</h4>
              <ul className="mt-2 text-gray-700 list-disc list-inside">
                {items.map((name) => <li key={name}>{name}</li>)}
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
