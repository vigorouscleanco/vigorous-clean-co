"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg", "/gallery4.jpg"]; // keep these in /public

export default function GallerySlider() {
  const [i, setI] = useState(0);
  const touchStart = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % IMAGES.length), 4500);
    return () => clearInterval(id);
  }, []);

  const next = () => setI((p) => (p + 1) % IMAGES.length);
  const prev = () => setI((p) => (p - 1 + IMAGES.length) % IMAGES.length);

  const onTouchStart = (e) => {
    touchStart.current = e.touches[0] ? e.touches[0].clientX : null;
  };
  const onTouchEnd = (e) => {
    if (touchStart.current == null) return;
    const endX = e.changedTouches[0] ? e.changedTouches[0].clientX : 0;
    const diff = endX - touchStart.current;
    if (Math.abs(diff) > 40) (diff < 0 ? next() : prev());
    touchStart.current = null;
  };

  return (
    <div
      className="relative rounded-2xl overflow-hidden border border-gray-100 shadow-soft bg-white mb-12"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Cleaning work gallery"
    >
      {/* Aspect ratio box ensures full photo is visible (no cropping) */}
      <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-[3/2] bg-white">
        {IMAGES.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={`Gallery ${idx + 1}`}
            fill
            sizes="100vw"
            className={`object-contain transition-opacity duration-500 ${idx === i ? "opacity-100" : "opacity-0"}`}
            priority={idx === 0}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow-soft"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 shadow-soft"
      >
        ›
      </button>

      {/* Dots */}
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

