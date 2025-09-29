"use client";

export default function PhoneWidget() {
  return (
    <div className="fixed right-5 bottom-28 z-[60]">
      <a
        href="tel:+14242605986"
        aria-label="Call Vigorous Clean Co."
        className="flex items-center gap-2 rounded-full bg-primary text-white px-4 py-3 shadow-soft hover:opacity-90 transition"
      >
        {/* Phone icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.9 19.9 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.9 19.9 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.64 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.16a2 2 0 0 1 2.11-.45c.84.31 1.72.52 2.62.64A2 2 0 0 1 22 16.92z"/>
        </svg>
        <span className="text-sm font-medium">(424) 260-5986</span>
      </a>
    </div>
  );
}
