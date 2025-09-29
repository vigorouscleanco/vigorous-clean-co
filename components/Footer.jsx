import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="container-app py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold">Vigorous Clean Co.</h3>
          <p className="text-gray-600 mt-2 text-sm">Eco-friendly cleaning for homes, offices & rentals across Los Angeles.</p>
          <p className="text-sm mt-3">
            <a href="tel:+14242605986" className="hover:underline">(424) 260-5986</a><br/>
            <a href="mailto:vigorouscleanco@gmail.com" className="hover:underline">vigorouscleanco@gmail.com</a>
          </p>
        </div>

        <div>
          <h4 className="font-medium">Company</h4>
          <ul className="mt-2 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium">Book</h4>
          <a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K9470312P89/services" target="_blank" rel="noopener" className="inline-block rounded-2xl bg-primary px-4 py-2 text-white text-sm font-medium shadow-soft hover:opacity-90 transition">
            Book with Square
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Disclaimer: We are not liable for pre-existing damage, normal wear and tear, or items not disclosed as fragile.
            Specialty/hazardous tasks are excluded unless agreed in writing.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <div className="container-app py-6 text-xs text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.</span>
          <span>Los Angeles, CA</span>
        </div>
      </div>
    </footer>
  );
}
