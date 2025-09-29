// app/layout.jsx
import "./globals.css";


export const metadata = {
title: "Vigorous Clean Co.",
description: "Eco & pet‑friendly cleaning in LA & OC",
};


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="min-h-screen bg-white text-neutral-900">
{/* Simple site header */}
<header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
<a href="/" className="font-semibold tracking-tight">Vigorous Clean Co.</a>
<nav className="flex gap-4 text-sm">
<a href="/services" className="hover:text-emerald-700">Services</a>
<a href="/pricing" className="hover:text-emerald-700">Pricing</a>
<a href="https://book.squareup.com/appointments/0d8cas6ix7qhc2/location/L9K94703I2P89/services" className="rounded-xl bg-emerald-600 px-3 py-1.5 font-medium text-white hover:bg-emerald-700">Book</a>
</nav>
</div>
</header>


<main className="mx-auto max-w-7xl px-4 py-10">{children}</main>


<footer className="border-t border-neutral-200">
<div className="mx-auto max-w-7xl px-4 py-8 text-sm text-neutral-600">© {new Date().getFullYear()} Vigorous Clean Co.</div>
</footer>
</body>
</html>
);
}
