"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"]; // must be in /public

export default function GallerySlider() {
  const [i, setI] = useState(0);
  const touchStart = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % IMAGES.length), 4500);
    return () => clearInterval(id);
  }, []);

  const next = () => setI((p) => (p + 1) % IMAGES.length);
  const prev = () => setI((p) => (p - 1 + IMAGES.length) % IMAGES.length);

  const onTouchStart = (e) => (touchStart.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 40) (diff < 0 ? next() : prev());
    touchStart.current = null;
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-soft bg-white"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Cleaning work gallery"
    >
      <div className="relative h-64 sm:h-80 lg:h-[460px] flex items-center justify-center">
        {IMAGES.map((src, idx) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
            aria-hidden={idx !== i}
          >
            {/* show full photo, no cropping */}
            <Image src={src} alt={`Gallery ${idx + 1}`} fill sizes="100vw" className="object-contain" priority={idx === 0} />
          </div>
        ))}
      </div>

      <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow-soft">‹</button>
      <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow-soft">›</button>

      <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-2.5 w-2.5 rounded-full ${i === idx ? "bg-primary" : "bg-white/70"} border border-white`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

