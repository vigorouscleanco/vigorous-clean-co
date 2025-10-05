"use client";

import { useEffect, useRef } from "react";

/**
 * Square Appointments widget, sandboxed to this component only.
 * - Injects the Square script into a local wrapper.
 * - Cleans up DOM and iframes on unmount (prevents “sticking” across pages).
 */
export default function SquareWidget() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Local wrapper that Square will render into
    const root = document.createElement("div");
    root.setAttribute("data-square-root", "true");
    mountRef.current.appendChild(root);

    // Square embed script (same id you’ve been using)
    const script = document.createElement("script");
    script.src =
      "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89.js";
    script.async = true;

    root.appendChild(script);

    // Cleanup: remove everything we injected and any stray Square iframes
    return () => {
      if (mountRef.current) {
        mountRef.current.innerHTML = "";
      }
      // Belt & suspenders: remove any iframes Square may have appended elsewhere
      try {
        const rogueIframes = document.querySelectorAll(
          'iframe[src*="squareup.com"], iframe[src*="square"]'
        );
        rogueIframes.forEach((iframe) => {
          const parent = iframe.closest("div");
          parent?.remove?.();
        });
      } catch {
        /* ignore */
      }
    };
  }, []);

  // z-0 keeps it under sticky UI; relative helps keep everything contained
  return <div ref={mountRef} className="relative z-0" />;
}

