"use client";

import { useEffect } from "react";

/**
 * Loads Square Appointments widget only on the Book page.
 * Cleans up the injected container when you navigate away,
 * so it doesn’t linger under the footer on other pages.
 */
export default function SquareWidget() {
  useEffect(() => {
    const WIDGET_SRC =
      "https://app.squareup.com/appointments/buyer/widget/m37vogyxyg3cxb/L9K9470312P89.js";
    const SCRIPT_ID = "sq-appointments-script";

    // Add the script once (keep it for faster back/forward nav)
    let script = document.getElementById(SCRIPT_ID);
    if (!script) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.async = true;
      script.src = WIDGET_SRC;
      document.body.appendChild(script);
    }

    // Cleanup: Square injects its own container under our div.
    // Remove that DOM so it doesn’t stay around after navigation.
    return () => {
      const injected =
        document.querySelector("[data-sq-embed]") ||
        document.getElementById("sq-appointments");
      if (injected && injected.parentNode) {
        injected.parentNode.removeChild(injected);
      }
      // We intentionally keep the <script> so the next visit is instant.
    };
  }, []);

  // This placeholder is where Square mounts the widget
  return <div id="sq-appointments" data-sq-embed className="min-h-[600px]" />;
}
