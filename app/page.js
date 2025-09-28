// app/page.js
"use client";

export default function Page() {
  const BOOKING_URL =
    "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

  return (
    <>
      {/* HERO (uses /public/hero-home.jpg if you upload it; otherwise shows green panel) */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(10,138,102,.10), rgba(10,138,102,.04))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25, // keeps text readable even if the image exists
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="container">
            <div className="chip" style={{ marginBottom: 12 }}>
              🌿 Eco-friendly • Flat-rate • LA & OC
            </div>
            <h1 style={{ fontSize: "clamp(34px,6vw,54px)", margin: "10px 0" }}>
              Your Space, Sparkling with Vigor.
            </h1>
            <p style={{ color: "#475569", maxWidth: 760, margin: "0 auto 16px" }}>
              Residential & office cleaning with transparent flat-rate pricing,
              pet-safe products, and online booking.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-solid" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                📅 Book Now
              </a>
              <a className="btn" href="/pricing">View Pricing</a>
              <a className="btn" href="/services">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* À LA CARTE PREVIEW (links through to /services) */}
      <section className="container" style={{ paddingTop: 36, paddingBottom: 10 }}>
        <h2 style={{ fontSize: "clamp(26px,4.5vw,36px)" }}>À la Carte Services</h2>
        <p style={{ color: "#64748b", marginTop: 8, marginBottom: 14 }}>
          Add-ons you can attach to any cleaning. See full list on the services page.
        </p>
        <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {[
            { icon: "🍽️", text: "Kitchen Only" },
            { icon: "🛁", text: "Bathrooms Only (per 2)" },
            { icon: "🛏️", text: "Bedrooms Only (per room)" },
            { icon: "🧊", text: "Inside Fridge" },
            { icon: "🔥", text: "Inside Oven" },
            { icon: "🧼", text: "Carpet Shampoo (per room)" },
          ].map((item) => (
            <a
              key={item.text}
              href="/services"
              className="btn"
              style={{ justifyContent: "space-between", fontWeight: 600 }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                {item.text}
              </span>
              <span style={{ color: "var(--green)" }}>See details →</span>
            </a>
          ))}
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="container" style={{ paddingTop: 14, paddingBottom: 40 }}>
        <div
          style={{
            border: "1px solid #e5eaf0",
            borderRadius: 16,
            padding: 18,
            display: "grid",
            gap: 18,
            gridTemplateColumns: "1fr",
          }}
        >
          <div>
            <h3>Contact Us</h3>
            <p style={{ color: "#64748b" }}>
              We’d love to help. Reach out and we’ll respond quickly.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              <a className="chip" href="tel:+14242605986">📞 (424) 260-5986</a>
              <a className="chip" href="mailto:vigorouscleanco@gmail.com">✉️ vigorouscleanco@gmail.com</a>
            </div>
          </div>
          <div style={{ alignSelf: "end", color: "#64748b" }}>
            First-time clients: use <strong>VIGOR10</strong> for 10% off. Applied at checkout.
          </div>
        </div>
      </section>
    </>
  );
}

