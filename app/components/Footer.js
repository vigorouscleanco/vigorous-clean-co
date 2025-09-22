"use client";

export default function Footer() {
  return (
    <footer className="bg-emerald-600 text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left side */}
        <p className="text-sm">
          © {new Date().getFullYear()} Vigorous Clean Co. All rights reserved.
        </p>

        {/* Right side */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#offices" className="hover:underline">Office</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
}
