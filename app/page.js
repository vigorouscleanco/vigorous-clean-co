"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-100 text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-emerald-700">
          Your Space, Sparkling with Vigor.
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Eco-friendly residential & office cleaning with transparent
          flat-rate pricing in Los Angeles & Orange County.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/pricing"
            className="rounded-lg bg-emerald-600 text-white px-6 py-3 hover:bg-emerald-700 transition"
          >
            View Pricing
          </Link>
          <Link
            href="/services"
            className="rounded-lg bg-white text-emerald-600 border border-emerald-600 px-6 py-3 hover:bg-gray-50 transition"
          >
            Our Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-emerald-700">Our Services</h2>
        <p className="mt-2 text-gray-600">
          Residential • Office • Rentals / Turnovers
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-600">
              Residential Cleaning
            </h3>
            <p className="mt-2 text-gray-600">
              Kitchens, bathrooms, bedrooms, and more. Perfect for recurring
              schedules or deep cleans.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-600">
              Office Cleaning
            </h3>
            <p className="mt-2 text-gray-600">
              Desks, floors, restrooms, and common areas. Ideal for businesses
              and corporate spaces.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-emerald-600">
              Rental / Turnover
            </h3>
            <p className="mt-2 text-gray-600">
              Move-in, move-out, and Airbnb turnovers with quick turnaround
              times.
            </p>
          </div>
        </div>
      </section>

      {/* A la Carte Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-emerald-700">
          À la Carte Services
        </h2>
        <p className="mt-2 text-gray-600">
          Add-ons and task-based services tailored to your needs.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Kitchen Only", icon: "🍳" },
            { name: "Bathrooms Only", icon: "🛁" },
            { name: "Bedrooms Only", icon: "🛏️" },
            { name: "Inside Fridge", icon: "🧊" },
            { name: "Inside Oven", icon: "🔥" },
            { name: "Microwave", icon: "📡" },
            { name: "Carpet Shampoo", icon: "🧼" },
            { name: "Interior Windows", icon: "🪟" },
          ].map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <span className="text-4xl">{service.icon}</span>
              <p className="mt-3 font-medium">{service.name}</p>
              <Link
                href="/pricing"
                className="mt-2 text-emerald-600 hover:underline"
              >
                See Pricing →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-emerald-700">
          Loved by Clients
        </h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Sophia R.",
              review:
                "Absolutely spotless! I booked Vigorous Clean Co. for my Airbnb turnover and my guests always compliment the cleanliness.",
            },
            {
              name: "Michael T.",
              review:
                "Professional, reliable, and eco-friendly. They’ve been cleaning my office for months now and always do a fantastic job.",
            },
            {
              name: "Alicia P.",
              review:
                "So easy to book online! They handled my move-out clean with incredible detail—I got my full deposit back.",
            },
          ].map((client, i) => (
            <div
              key={i}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="italic text-gray-600">“{client.review}”</p>
              <p className="mt-4 font-semibold text-emerald-700">
                – {client.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-emerald-700">Contact Us</h2>
        <p className="mt-2 text-gray-600">
          Have a question? Send us a message and we’ll reply quickly.
        </p>
        <form className="mt-6 max-w-lg mx-auto grid gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-lg p-3 w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border rounded-lg p-3 w-full"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border rounded-lg p-3 w-full"
          />
          <button
            type="submit"
            className="rounded-lg bg-emerald-600 text-white px-6 py-3 hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

