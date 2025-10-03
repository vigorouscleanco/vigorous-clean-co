// app/components/SquareWidget.jsx
"use client";
import { useEffect, useRef } from "react";

export default function SquareWidget() {
  const SQUARE_WIDGET_JS =
    "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89.js";

  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
    mountRef.current.innerHTML = "";
    const s = document.createElement("script");
    s.src = SQUARE_WIDGET_JS;
    s.async = true;
    mountRef.current.appendChild(s);
    return () => {
      if (mountRef.current) mountRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={mountRef} className="min-h-[75vh]" />;
}
