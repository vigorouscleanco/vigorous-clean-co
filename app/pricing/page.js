// app/pricing/page.js

export const metadata = {
  title: 'Pricing | Vigorous Clean Co.',
  description:
    'Flat-rate, transparent pricing for eco-friendly residential, office, and move-in/move-out cleaning across Los Angeles & Orange County.',
};

// EDIT ME ONCE IF YOUR BOOKING LINK CHANGES
const BOOKING_URL =
  'https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services';

// Starting prices (easy to tweak)
const PRICES = {
  residentialFrom: 149,
  officeFrom: 199,
  moveFrom: 249,
  alaCarte: {
    kitchen: 79,
    bathrooms2: 89,
    bedroom: 35,
    fridge: 35,
    oven: 35,
    windowsEach: 10, // min 5
    carpetRoom: 79,
    microwave: 20,
  },
};

function Plan({ title, price, bullets }) {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <div className="priceLine">
        <span className="price">${price}</span>
        <span className="from">starting</span>
      </div>
      <ul className="list">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btnPrimary">
        Book Online
      </a>
      <style jsx>{`
        .card {
          background: #fff;
          border: 1px solid #e6e8eb;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 6px 14px rgba(16, 24, 40, 0.06);
        }
        .cardTitle {
          margin: 0 0 8px;
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }
        .priceLine {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          margin: 8px 0 10px;
        }
        .price {
          font-size: 34px;
          font-weight: 800;
          color: #0f172a;
        }
        .from {
          margin-bottom: 6px;
          color: #64748b;
          font-size: 13px;
        }
        .list {
          margin: 6px 0 16px;
          padding-left: 20px;
          color: #334155;
          line-height: 1.55;
        }
        .btnPrimary {
          display: inline-block;
          background: #059669;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
        }
        .btnPrimary:hover {
          background: #047857;
        }
      `}</style>
    </div>
  );
}

function AlaCard({ label, price, note }) {
  return (
    <div className="ala">
      <div className="alaLeft">
        <div className="alaTitle">{label}</div>
        {note ? <div className="alaNote">{note}</div> : null}
      </div>
      <div className="alaRight">
        <div className="fromSmall">from</div>
        <div className="alaPrice">${price}</div>
      </div>

      <style jsx>{`
        .ala {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #fff;
          border: 1px solid #e6e8eb;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 4px 10px rgba(16, 24, 40, 0.05);
        }
        .alaTitle {
          font-weight: 600;
          color: #0f172a;
        }
        .alaNote {
          font-size: 13px;
          color: #64748b;
        }
        .fromSmall {
          color: #94a3b8;
          font-size: 12px;
          text-align: right;
        }
        .alaPrice {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          text-align: right;
        }
      `}</style>
    </div>
  );
}

export default function PricingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="heroWrap">
        <div className="hero">
          <div className="tag">Los Angeles & Orange County</div>
          <h1>Simple, flat-rate pricing.</h1>
          <p>
            Eco-friendly cleaning with transparent, starting rates. Book online in minutes — no hidden fees.
          </p>
          <div className="ctaRow">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btnPrimary">
              Book Now
            </a>
            <a href="tel:+14242605986" className="btnGhost">
              Call (424) 260-5986
            </a>
          </div>
        </div>
      </section>

      {/* CORE PACKAGES */}
      <section className="section">
        <div className="grid3">
          <Plan
            title="Residential Cleaning"
            price={PRICES.residentialFrom}
            bullets={[
              'Standard & deep clean options',
              'Kitchens • baths • bedrooms • living areas',
              'Eco-friendly supplies on request',
            ]}
          />
          <Plan
            title="Office Cleaning"
            price={PRICES.officeFrom}
            bullets={[
              'Desks • floors • restrooms • breakrooms',
              'Touch-points • trash & recycling',
              'Flexible daily or weekly schedules',
            ]}
          />
          <Plan
            title="Move-In / Move-Out"
            price={PRICES.moveFrom}
            bullets={[
              'Top-to-bottom detail for move days',
              'Appliance interiors by request',
              'Inside cabinets • drawers • closets',
            ]}
          />
        </div>
      </section>

      {/* À LA CARTE */}
      <section className="section">
        <div className="secHead">
          <h2>À la Carte Services</h2>
          <a href="/services" className="link">
            See all services →
          </a>
        </div>
        <div className="grid3">
          <AlaCard label="Kitchen Only" price={PRICES.alaCarte.kitchen} />
          <AlaCard label="Bathrooms Only (per 2)" price={PRICES.alaCarte.bathrooms2} />
          <AlaCard label="Bedrooms Only (per room)" price={PRICES.alaCarte.bedroom} />
          <AlaCard label="Inside Fridge" price={PRICES.alaCarte.fridge} />
          <AlaCard label="Inside Oven" price={PRICES.alaCarte.oven} />
          <AlaCard label="Interior Windows (min 5)" price={PRICES.alaCarte.windowsEach} note="$10 each" />
          <AlaCard label="Carpet Shampoo (per room)" price={PRICES.alaCarte.carpetRoom} />
          <AlaCard label="Microwave" price={PRICES.alaCarte.microwave} />
        </div>
        <p className="fine">
          Prices shown are starting estimates and may vary by size, condition, and add-ons. You’ll see a clear quote during
          booking — no surprises.
        </p>
      </section>

      {/* FAQ */}
      <section className="section">
        <h2>Pricing FAQs</h2>
        <div className="faq">
          <details>
            <summary>Do you bring your own supplies?</summary>
            <p>
              Yes. We bring all standard supplies. Prefer green products? Let us know at booking and we’ll use eco-friendly options.
            </p>
          </details>
          <details>
            <summary>Do you service my area?</summary>
            <p>
              We cover Los Angeles & Orange County. Add your address during booking and we’ll confirm availability instantly.
            </p>
          </details>
          <details>
            <summary>How are prices calculated?</summary>
            <p>
              Rates depend on size, scope, and condition. You’ll see a clear quote (and any add-ons) before you confirm.
            </p>
          </details>
          <details>
            <summary>Do I need to be home?</summary>
            <p>
              Not required. Many clients provide access codes or key boxes. We’ll text when we’re on the way and when finished.
            </p>
          </details>
        </div>

        <div className="ctaRow center">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btnPrimary">
            Book Online
          </a>
          <a href="tel:+14242605986" className="btnGhost">
            Call (424) 260-5986
          </a>
        </div>
      </section>

      {/* Page styles (no Tailwind needed) */}
      <style jsx>{`
        main {
          background: linear-gradient(180deg, rgba(209, 250, 229, 0.25), #fff 35%);
        }
        .heroWrap {
          padding: 28px 16px 0;
        }
        .hero {
          max-width: 1080px;
          margin: 0 auto;
          background: #ffffffea;
          border: 1px solid #dfe3e8;
          border-radius: 24px;
          padding: 34px 28px;
          box-shadow: 0 10px 25px rgba(16, 24, 40, 0.06);
          text-align: center;
        }
        .tag {
          display: inline-block;
          padding: 6px 10px;
          background: #ecfdf5;
          color: #047857;
          border: 1px solid #a7f3d0;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }
        h1 {
          margin: 10px 0 8px;
          font-size: 36px;
          font-weight: 800;
          color: #0f172a;
        }
        h2 {
          margin: 0 0 10px;
          font-size: 26px;
          font-weight: 800;
          color: #0f172a;
        }
        p {
          color: #334155;
          margin: 8px 0 0;
        }
        .section {
          max-width: 1080px;
          margin: 26px auto 0;
          padding: 0 16px 6px;
        }
        .grid3 {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 16px;
        }
        @media (min-width: 820px) {
          .grid3 {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .secHead {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .link {
          color: #047857;
          text-decoration: none;
          font-weight: 600;
        }
        .link:hover {
          color: #065f46;
        }
        .fine {
          margin-top: 8px;
          color: #64748b;
          font-size: 13px;
        }
        .faq {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 10px;
          margin-top: 8px;
        }
        .faq details {
          background: #fff;
          border: 1px solid #e6e8eb;
          border-radius: 12px;
          padding: 10px 14px;
          box-shadow: 0 4px 10px rgba(16, 24, 40, 0.05);
        }
        .faq summary {
          font-weight: 600;
          color: #0f172a;
          cursor: pointer;
          list-style: none;
        }
        .faq p {
          margin-top: 6px;
          color: #334155;
        }
        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
          justify-content: center;
        }
        .ctaRow.center {
          justify-content: center;
        }
        .btnPrimary {
          background: #059669;
          color: #fff;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
        }
        .btnPrimary:hover {
          background: #047857;
        }
        .btnGhost {
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #334155;
          padding: 10px 16px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 600;
        }
        .btnGhost:hover {
          background: #f8fafc;
        }
      `}</style>
    </main>
  );
}
