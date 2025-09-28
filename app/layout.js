// app/layout.js
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Vigorous Clean Co. — Eco-friendly Cleaning in LA & OC',
  description:
    'Transparent flat-rate pricing. Eco & pet-safe products. Online booking in minutes.',
  openGraph: {
    title: 'Vigorous Clean Co.',
    description:
      'Transparent flat-rate pricing. Eco & pet-safe products. Online booking in minutes.',
    url: 'https://vigorous-clean-co.vercel.app',
    siteName: 'Vigorous Clean Co.',
    images: [{ url: '/logo-mark.png' }],
  },
  icons: [{ rel: 'icon', url: '/logo-mark.png' }],
};

const BOOKING =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  'https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services';

function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-emerald-700/95 backdrop-blur supports-[backdrop-filter]:bg-emerald-700/80 border-b border-emerald-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <img
            src="/logo-mark.png"
            alt="Vigorous Clean Co."
            className="h-8 w-8 rounded"
          />
          <span className="text-white font-semibold text-lg">
            Vigorous Clean Co.
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-emerald-50/90">
          <a href="/services" className="hover:text-white">Services</a>
          <a href="/pricing" className="hover:text-white">Pricing</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/account" className="hover:text-white">Login</a>
        </nav>

        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-white text-emerald-700 font-semibold px-4 py-2 shadow hover:shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          Book Now
        </a>
      </div>
    </header>
  );
}

function Promo() {
  return (
    <div className="bg-emerald-800 text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 text-sm flex items-center gap-2">
        <span className="text-lg">🎉</span>
        <span>New clients get <b>10% off</b> with code</span>
        <code className="bg-emerald-700 px-2 py-0.5 rounded-md font-semibold">VIGOR10</code>
        <span>— discount applied at checkout for first-time clients.</span>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-100 bg-emerald-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-4">
          <img src="/logo-full.png" alt="Vigorous Clean Co." className="h-10" />
          <p className="text-sm text-emerald-900/70">
            Eco-friendly cleaning for homes, offices & rentals across
            Los Angeles & Orange County.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-white shadow hover:shadow-md text-emerald-700"
            >
              {/* Instagram icon */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
              </svg>
            </a>
            <a
              href="https://tiktok.com/@vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="p-2 rounded-full bg-white shadow hover:shadow-md text-emerald-700"
            >
              {/* TikTok icon */}
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M21 8.5a6.5 6.5 0 0 1-4.3-1.6V16a5 5 0 1 1-5-5c.2 0 .4 0 .6.1V8.1A8.5 8.5 0 1 0 20.9 16h-2A6.5 6.5 0 0 1 21 8.5z"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-emerald-900/80">
            <li><a className="hover:text-emerald-900" href="/services">Services</a></li>
            <li><a className="hover:text-emerald-900" href="/pricing">Pricing</a></li>
            <li><a className="hover:text-emerald-900" href="/faq">FAQ</a></li>
            <li><a className="hover:text-emerald-900" href="/about">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-3">Contact</h4>
          <ul className="space-y-3 text-emerald-900/80">
            <li className="flex items-center gap-3">
              {/* phone icon */} 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.4 19.4 0 0 1 3.15 12.8 19.8 19.8 0 0 1 .08 4.18 2 2 0 0 1 2.05 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.1 9.9a16 16 0 0 0 8 8l1.27-1.2a2 2 0 0 1 2.12-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <a href="tel:+14242605986">(424) 260-5986</a>
            </li>
            <li className="flex items-center gap-3">
              {/* mail icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>
              </svg>
              <a href="mailto:vigorouscleanco@gmail.com">vigorouscleanco@gmail.com</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-emerald-900 mb-3">Hours</h4>
          <p className="text-emerald-900/80">Open daily — <b>8:00 AM – 8:00 PM</b></p>
          <p className="text-xs mt-4 text-emerald-900/60">
            Legal: We take great care of your belongings. In the rare event of loss or damage,
            Vigorous Clean Co. is not liable. All cleaners are vetted through strict screening.
          </p>
        </div>
      </div>

      <div className="py-4 border-t border-emerald-100 text-center text-sm text-emerald-900/60">
        © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-emerald-900">
        {/* ONE promo bar only */}
        <Promo />
        <Navbar />
        {children}
        <Footer />

        {/* Tawk.to chat (replace with your real property ID if needed) */}
        <Script
          id="tawk"
          strategy="afterInteractive"
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
              })();`,
          }}
        />

        {/* Floating phone button (mobile) */}
        <a
          href="tel:+14242605986"
          className="fixed bottom-5 left-5 md:left-8 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700"
          aria-label="Call Vigorous Clean Co."
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.4 19.4 0 0 1 3.15 12.8 19.8 19.8 0 0 1 .08 4.18 2 2 0 0 1 2.05 2h3a2 2 0 0 1 2 1.72 12.7 12.7 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.1 9.9a16 16 0 0 0 8 8l1.27-1.2a2 2 0 0 1 2.12-.45 12.7 12.7 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}


