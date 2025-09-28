// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Vigorous Clean Co.",
  description:
    "Eco-friendly residential & office cleaning in Los Angeles & Orange County with flat-rate transparency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {/* PROMO BANNER — appears once, site-wide */}
        <div className="bg-emerald-700 text-white text-sm sm:text-base">
          <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-2">
            <span aria-hidden>🎉</span>
            <span>
              New clients get <strong>10% off</strong> with code{" "}
              <span className="inline-block rounded bg-white/15 px-2 py-0.5">
                VIGOR10
              </span>{" "}
              — applied at checkout for first-time clients.
            </span>
          </div>
        </div>

        {/* Global Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Tawk.to – add your real property/widget IDs here */}
        <Script id="tawk" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),
                  s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68d8270b34dcdf19500f9061/1j665h18j';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
