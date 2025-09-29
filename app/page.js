// app/page.js  (server component – no "use client")
const BOOKING_URL =
  "https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          textAlign: "center",
          background: "linear-gradient(180deg, rgba(10,138,102,.10), rgba(10,138,102,.04))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/hero-home.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25, // safe even if image missing
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div className="container">
            <div className="chip" style={{ marginBottom: 12 }}>
              🌿 Eco-friendly • Flat-rate • LA & OC
            </div>
            <h1 style={{ fontSize: "clamp(34px,6vw,54px)", margin: "10px 0", color: "#0f766e" }}>
              Your Space, Sparkling with Vigor.
            </h1>
            <p style={{ color: "#475569", maxWidth: 760, margin: "0 auto 16px" }}>
              Residential & office cleaning with transparent flat-rate pricing and online booking.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-solid" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">📅 Book Now</a>
              <a className="btn" href="/pricing">View Pricing</a>
              <a className="btn" href="/services">Our Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container" style={{ paddingTop: 28, paddingBottom: 40 }}>
        <div style={{ border: "1px solid #e5eaf0", borderRadius: 16, padding: 18, display: "grid", gap: 18 }}>
          <div>
            <h3>Contact Us</h3>
            <p style={{ color: "#64748b" }}>We’d love to help. Reach out and we’ll respond quickly.</p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
              <a className="chip" href="tel:+14242605986">📞 (424) 260-5986</a>
              <a className="chip" href="mailto:vigorouscleanco@gmail.com">✉️ vigorouscleanco@gmail.com</a>
            </div>
          </div>
          <div style={{ alignSelf: "end", color: "#64748b" }}>
            First-time clients: use <strong>VIGOR10</strong> for 10% off.
          </div>
        </div>
      </section>
    </main>
  );
}


