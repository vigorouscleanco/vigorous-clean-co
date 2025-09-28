// app/layout.js
export const metadata = {
  title: "Vigorous Clean Co.",
  description:
    "Eco-friendly residential & office cleaning in Los Angeles & Orange County. Flat-rate, no hidden fees.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Tawk chat (your ID as provided) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68d8270b34dcdf19500f9061/1j665h18j';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <style>{`
          :root { --green:#0a8a66; --ink:#0f172a; --muted:#64748b; --bg:#ffffff; }
          * { box-sizing: border-box; }
          body { margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Apple Color Emoji", "Segoe UI Emoji"; color: var(--ink); background: var(--bg); }
          a { color: inherit; text-decoration: none; }
          .container{max-width:1100px;margin-inline:auto;padding:24px}
          .btn{display:inline-flex;align-items:center;gap:.5rem;border-radius:12px;padding:.8rem 1.1rem;border:1px solid #dbe3ea;background:#fff;transition:.2s}
          .btn:hover{transform:translateY(-1px);box-shadow:0 6px 16px rgba(16,24,40,.08)}
          .btn-solid{background:var(--green);color:#fff;border-color:var(--green)}
          header{position:sticky;top:0;z-index:40;background:linear-gradient(0deg,#0b8a66,#0b8a66);color:#fff}
          .nav{display:flex;justify-content:space-between;align-items:center;gap:16px}
          .nav a{opacity:.9}
          .nav a:hover{opacity:1}
          .brand{display:flex;align-items:center;gap:.75rem}
          .brand img{height:28px;width:auto}
          footer{border-top:1px solid #e5eaf0;background:#fafcff}
          .footer-grid{display:grid;grid-template-columns: 1fr; gap:16px;}
          @media (min-width:768px){ .footer-grid{grid-template-columns:1fr auto auto} }
          .chip{display:inline-flex;align-items:center;gap:.5rem;background:#eaf7f3;color:#056e52;border-radius:999px;padding:.35rem .7rem;font-size:.85rem}
        `}</style>
      </head>
      <body>
        {/* TOP PROMO */}
        <div style={{background:"#06624b",color:"#e7fff6",padding:"6px 0",textAlign:"center",fontSize:"0.94rem"}}>
          🎉 New clients get 10% off with code <strong>VIGOR10</strong> — applied at checkout for first-time clients.
        </div>

        {/* SINGLE HEADER (fixes your “double header” issue) */}
        <header>
          <div className="container nav">
            <a className="brand" href="/">
              <img src="/logo.png" alt="Vigorous Clean Co. logo" />
              <strong>Vigorous Clean Co.</strong>
            </a>
            <nav style={{display:"flex",gap:"18px",alignItems:"center"}}>
              <a href="/services">Services</a>
              <a href="/pricing">Pricing</a>
              <a href="/about">About</a>
              <a href="/login">Login</a>
              <a className="btn btn-solid" href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noopener noreferrer">
                <span style={{fontSize:"1.05rem"}}>📅</span> Book Now
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        {/* FOOTER */}
        <footer>
          <div className="container footer-grid">
            <div>
              <div className="brand" style={{color:"var(--green)"}}>
                <img src="/logo.png" alt="Vigorous Clean Co. logo" />
                <strong>Vigorous Clean Co.</strong>
              </div>
              <p style={{color:"var(--muted)",marginTop:8}}>
                Eco-friendly residential & office cleaning in Los Angeles & Orange County.
              </p>
              <div style={{display:"flex",gap:10,marginTop:10}}>
                <a className="chip" href="https://instagram.com/vigorouss.co" target="_blank" rel="noreferrer">📸 Instagram</a>
                <a className="chip" href="https://tiktok.com/@vigorouss.co" target="_blank" rel="noreferrer">🎵 TikTok</a>
              </div>
            </div>
            <div>
              <strong>Quick Links</strong>
              <div style={{display:"grid",gap:6,marginTop:8}}>
                <a href="/services">Services</a>
                <a href="/pricing">Pricing</a>
                <a href="/about">About</a>
                <a href="/privacy">Privacy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>
            <div>
              <strong>Service Hours</strong>
              <div style={{display:"grid",gap:6,marginTop:8,color:"var(--muted)"}}>
                <span>Open daily • 8:00 AM – 8:00 PM</span>
                <span>📍 Los Angeles & Orange County</span>
                <div style={{display:"flex",gap:10,marginTop:6}}>
                  <a className="chip" href="tel:+14242605986">📞 (424) 260-5986</a>
                  <a className="chip" href="mailto:vigorouscleanco@gmail.com">✉️ vigorouscleanco@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div style={{textAlign:"center",fontSize:12,color:"#94a3b8",padding:"14px 0"}}>
            © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
