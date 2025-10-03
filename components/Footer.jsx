// components/Footer.jsx
import Link from "next/link";
import { Phone, Mail, Instagram, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-app py-12 grid md:grid-cols-3 gap-10">
        {/* Brand & contact */}
        <div>
          <h3 className="text-xl font-semibold">Vigorous Clean Co.</h3>
          <p className="text-gray-600 mt-2 max-w-md">
            Eco-friendly cleaning for homes, offices & rentals across Los Angeles.
          </p>

          <div className="mt-4 space-y-2">
            <a
              href="tel:+14242605986"
              className="inline-flex items-center gap-2 text-gray-800 hover:text-primary"
            >
              <Phone className="h-5 w-5" />
              (424) 260-5986
            </a>
            <a
              href="mailto:vigorouscleanco@gmail.com"
              className="inline-flex items-center gap-2 text-gray-800 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              vigorouscleanco@gmail.com
            </a>
          </div>
        </div>

        {/* Company nav */}
        <div>
          <h4 className="font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>
              <Link href="/about" className="hover:text-primary">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary">Services</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-primary">Pricing</Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary">Terms</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-primary">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Book — no disclaimer here */}
        <div>
          <h4 className="font-semibold">Book</h4>
          <div className="mt-3">
            <Link
              href="/book"
              className="inline-block rounded-2xl bg-primary px-6 py-3 text-white font-medium shadow-soft hover:opacity-90 transition"
            >
              Book Now
            </Link>
          </div>

          {/* No extra disclaimer paragraph — it’s on the Terms page only */}
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container-app py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved. Los Angeles, CA
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-primary"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
            <a
              href="https://tiktok.com/@vigorouss.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-primary"
            >
              <Music2 className="h-5 w-5" />
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

