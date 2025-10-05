"use client";

import { useEffect, useRef } from "react";

/**
 * Mounts the Square Appointments widget inside this component
 * and removes it when you leave the /book page.
 */
export default function SquareWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Local mount so the iframe becomes OUR child (not <body>)
    const mount = document.createElement("div");
    mount.setAttribute("data-square-holder", "vigorous-square");
    container.appendChild(mount);

    const s = document.createElement("script");
    s.src =
      "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89.js";
    s.async = true;
    mount.appendChild(s);

    return () => {
      // Remove everything we added for this embed
      try {
        mount.remove();
      } catch {}
      // Belt & suspenders: remove any lingering Square widget pieces
      document
        .querySelectorAll(
          'iframe[src*="app.squareup.com/appointments/buyer/widget"], script[src*="app.squareup.com/appointments/buyer/widget"], [data-square-holder="vigorous-square"]'
        )
        .forEach((el) => {
          try {
            el.remove();
          } catch {}
        });
    };
  }, []);

  // Keep a z-index so sticky elements never overlap
  return <div ref={containerRef} className="relative z-[1]" />;
}

