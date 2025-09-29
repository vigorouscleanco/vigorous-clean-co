import './globals.css';
import { Inter } from 'next/font/google';


export const metadata = {
title: 'Vigorous Clean Co.',
description: 'Eco & pet-friendly residential and office cleaning in LA & OC.',
openGraph: {
title: 'Vigorous Clean Co.',
description: 'Eco & pet-friendly residential and office cleaning in LA & OC.',
url: 'https://vigorouscleanco.com',
siteName: 'Vigorous Clean Co.',
type: 'website',
},
};


const inter = Inter({ subsets: ['latin'] });


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className={`min-h-screen bg-white text-neutral-900 ${inter.className}`}>
{/* Header (simple, no imports) */}
<header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
<a href="/" className="font-semibold tracking-tight">Vigorous Clean Co.</a>
<nav className="flex gap-4 text-sm">
<a href="/about" className="hover:text-emerald-700">About</a>
<a href="/services" className="hover:text-emerald-700">Services</a>
<a href="/pricing" className="hover:text-emerald-700">Pricing</a>
<a href="/faq" className="hover:text-emerald-700">FAQ</a>
<a href="/login" className="hover:text-emerald-700">Login</a>
<a
href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services"
className="rounded-xl bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-700"
>Book</a>
</nav>
</div>
</header>


{/* Page content */}
<main className="mx-auto max-w-7xl px-4 py-10">{children}</main>


{/* Footer */}
<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600">
© {new Date().getFullYear()} Vigorous Clean Co. • LA & OC • Eco & pet-friendly
</div>
</footer>
</body>
</html>
);
}
