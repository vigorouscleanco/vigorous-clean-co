import Link from "next/link";

const SocialIcon = ({ type }) => {
  if (type === "instagram") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="6" r="1.3" fill="currentColor"/>
      </svg>
    );
  }
  // TikTok
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" fill="none">
      <path d="M28 6c2.4 3 4.9 4.7 8 5v6c-3.6-.3-6.3-1.7-8-3.3V32a10 10 0 11-10-10h1v6h-1a4 4 0 104-4V6h6z" fill="currentColor"/>
    </svg>
  );
};

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M22 16.92v2a2 2 0 01-2.18 2 19.86 19.86 0 01-8.63-3.07A19.5 19.5 0 013.15 8.81 19.86 19.86 0 01.08 0.18 2 2 0 012.07 0h2a2 2 0 012 1.72c.13 1.06.38 2.09.73 3.07a2 2 0 01-.45 2.11L5.54 8.46a16 16 0 007 7l1.56-1.56a2 2 0 012.11-.45c.98.35 2.01.6 3.07.73A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand & hours */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-700">Vigorous Clean Co.</h3>
          <p className="mt-3 text-sm text-slate-600">
            Eco-friendly cleaning across Los Angeles & Orange County. Reliable staff, flat-rate pricing, and online booking.
          </p>
          <div className="mt-5 text-sm text-slate-700">
            <div className="font-semibold text-slate-900">Service Hours</div>
            <div>Mon–Sun: 8:00 AM – 8:00 PM</div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li><Link href="/services" className="hover:text-emerald-700">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-emerald-700">Pricing</Link></li>
            <li><Link href="/about" className="hover:text-emerald-700">About Us</Link></li>
            <li><Link href="/faq" className="hover:text-emerald-700">FAQ</Link></li>
            <li><Link href="/account" className="hover:text-emerald-700">Login</Link></li>
          </ul>
        </div>

        {/* Contact (icons only, clickable) */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <ul className="mt-3 space-y-3 text-slate-700">
            <li>
              <a href="tel:+14242605986" className="inline-flex items-center gap-3 hover:text-emerald-700">
                <PhoneIcon />
                <span>(424) 260-5986</span>
              </a>
            </li>
            <li>
              <a href="mailto:vigorouscleanco@gmail.com" className="inline-flex items-center gap-3 hover:text-emerald-700">
                <MailIcon />
                <span>vigorouscleanco@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Social + legal */}
        <div>
          <h4 className="text-sm font-semibold text-slate-900">Connect</h4>
          <div className="mt-3 flex items-center gap-4 text-slate-700">
            <a
              href="https://instagram.com/vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-emerald-700"
            >
              <SocialIcon type="instagram" /> <span>@vigorouss.co</span>
            </a>
          </div>
          <div className="mt-2 flex items-center gap-4 text-slate-700">
            <a
              href="https://tiktok.com/@vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-emerald-700"
            >
              <SocialIcon type="tiktok" /> <span>@vigorouss.co</span>
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Disclaimer: While every effort is taken to protect client property, Vigorous Clean Co. is not liable for lost items.
            All cleaners are vetted professionals and follow strict screening procedures.
          </p>
        </div>
      </div>

      <div className="border-t py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Vigorous Clean Co. • All rights reserved.
      </div>
    </footer>
  );
}

