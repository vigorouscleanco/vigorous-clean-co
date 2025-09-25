// app/page.js

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate bg-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <img
            src="/Vigorous_Clean_Co_TransparentLogo.png"
            alt=""
            className="h-16 w-16 mx-auto mb-6 rounded-full bg-white/80 p-2 shadow"
          />
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Your Space, Sparkling with Vigor.
          </h1>
          <p className="mt-4 text-lg text-slate-700 max-w-3xl mx-auto">
            Eco-friendly residential & office cleaning with transparent flat-rate
            pricing in Los Angeles & Orange County.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="/pricing"
              className="rounded-xl bg-white text-emerald-700 font-semibold px-6 py-3 shadow hover:shadow-md"
            >
              View Pricing
            </a>
            <a
              href="/services"
              className="rounded-xl bg-emerald-700 text-white font-semibold px-6 py-3 hover:bg-emerald-800"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* À LA CARTE SERVICES (with correct icons) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8">
          À la Carte Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Kitchen Only",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="6" rx="1" />
                  <rect x="3" y="11" width="8" height="10" rx="1" />
                  <rect x="13" y="11" width="8" height="10" rx="1" />
                </svg>
              ),
            },
            {
              name: "Bathrooms Only (per 2)",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 10h18M6 10V7a3 3 0 1 1 6 0v3" />
                  <path d="M5 14h14M7 18h10" />
                </svg>
              ),
            },
            {
              name: "Bedrooms Only (per room)",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="10" width="18" height="8" rx="2" />
                  <path d="M7 10V7h10v3" />
                </svg>
              ),
            },
            {
              name: "Living / Common Area",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="7" width="18" height="10" rx="2" />
                  <path d="M7 17v4M17 17v4" />
                </svg>
              ),
            },
            {
              name: "Inside Fridge",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="6" y="3" width="12" height="18" rx="2" />
                  <path d="M6 10h12M10 7v3" />
                </svg>
              ),
            },
            {
              name: "Inside Oven",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M7 9h10M7 13h10" />
                </svg>
              ),
            },
            {
              name: "Microwave",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="8" width="16" height="8" rx="2" />
                  <path d="M7 12h5M17 12h.01" />
                </svg>
              ),
            },
            {
              name: "Carpet Shampoo (per room)",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 18h18M6 18v-4a6 6 0 0 1 12 0v4" />
                </svg>
              ),
            },
            {
              name: "Interior Windows (min. 5)",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <path d="M4 10h16M10 4v16" />
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.name}
              href="/pricing"
              className="flex items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-slate-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <span className="text-emerald-700">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </div>
              <span className="text-emerald-700 font-semibold">See Pricing →</span>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS (filled) */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-emerald-700 mb-8">
            Loved by Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sofia R.",
                area: "West Hollywood",
                quote:
                  "Spotless every time. The flat-rate made it super easy to budget. Highly recommend!",
              },
              {
                name: "Jacob L.",
                area: "Pasadena",
                quote:
                  "They handled our move-out clean perfectly. Got our full deposit back.",
              },
              {
                name: "Mayra G.",
                area: "Costa Mesa",
                quote:
                  "On time, friendly, and my house smells amazing. Love that they use green products.",
              },
              {
                name: "Anthony V.",
                area: "DTLA",
                quote:
                  "Booked for the office twice a week—reliable and professional.",
              },
              {
                name: "Ariana T.",
                area: "Glendale",
                quote:
                  "I’m picky and they still wow me every visit. The à la carte add-ons are clutch.",
              },
              {
                name: "Patricia C.",
                area: "Burbank",
                quote:
                  "Transparent pricing and great communication. Feels stress-free.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-2xl ring-1 ring-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="text-emerald-600 mb-2">★★★★★</div>
                <p className="text-slate-700">{`“${r.quote}”`}</p>
                <p className="mt-3 text-sm text-slate-500">
                  — <strong>{r.name}</strong>, {r.area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT (icons + simple form) */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-emerald-700 mb-8">Contact Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              {/* phone icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-emerald-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.18 2 2 0 0 1 4 1h4.09A2 2 0 0 1 10 2.72l1.2 2.8a2 2 0 0 1-.45 2.25L9.91 9.91a16 16 0 0 0 6.18 6.18l2.14-1.84a2 2 0 0 1 2.25-.45l2.8 1.2A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-semibold">Call</span>
            </div>
            <a href="tel:+14242605986" className="text-slate-700">
              (424) 260-5986
            </a>
          </div>

          <div className="rounded-2xl ring-1 ring-slate-200 bg-white p-6">
            <div className="flex items-center gap-3 mb-4">
              {/* email icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 text-emerald-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              <span className="font-semibold">Email</span>
            </div>
            <a href="mailto:vigorouscleanco@gmail.com" className="text-slate-700">
              vigorouscleanco@gmail.com
            </a>
          </div>

          <form
            className="rounded-2xl ring-1 ring-slate-200 bg-white p-6"
            method="POST"
            action="https://formsubmit.co/vigorouscleanco@gmail.com"
          >
            <h3 className="font-semibold mb-3">Send a Message</h3>
            <input type="hidden" name="_subject" value="Website Contact" />
            <div className="grid md:grid-cols-2 gap-3">
              <input
                className="border rounded-lg px-3 py-2"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                className="border rounded-lg px-3 py-2"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className="border rounded-lg px-3 py-2 w-full mt-3"
              name="message"
              rows="4"
              placeholder="How can we help?"
              required
            />
            <button
              className="mt-3 bg-emerald-700 text-white px-4 py-2 rounded-lg hover:bg-emerald-800"
              type="submit"
            >
              Send
            </button>
            <p className="text-xs text-slate-500 mt-2">
              Tip: You’ll get a quick auto-reply confirmation (powered by
              formsubmit.co).
            </p>
          </form>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4">FAQ</h3>
          <div className="space-y-3">
            {[
              {
                q: "Do you bring your own supplies? Do you use green products?",
                a: "Yes. We bring everything needed and default to eco & pet-safe products. If you have sensitivities or want us to use your supplies, let us know in the notes.",
              },
              {
                q: "Do you service my area?",
                a: "We serve Los Angeles County & Orange County. If you’re just outside, send us a note—if we can make it work, we will.",
              },
              {
                q: "How much will it cost?",
                a: "Start on the Pricing page. Residential & office rates are flat by square footage. À la carte items are listed separately and can be added during booking.",
              },
              {
                q: "Do I need to be home during cleaning?",
                a: "No—whatever’s easiest. You can be there, leave a lockbox code, or give access through a concierge. Please secure valuables and pets as needed.",
              },
              {
                q: "Can I trust your cleaning professionals?",
                a: "Absolutely. Every cleaner is identity-verified, background-screened, and trained on our quality checklist and safety standards.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="rounded-xl bg-white ring-1 ring-slate-200 p-4"
              >
                <summary className="font-medium cursor-pointer">
                  {item.q}
                </summary>
                <p className="text-slate-600 mt-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

