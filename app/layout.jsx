import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneWidget from "@/components/PhoneWidget";

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Home & Office Cleaning",
  description:
    "Your Space, Sparkling with Vigor. Eco-friendly cleaning services across Los Angeles.",
  metadataBase: new URL("https://vigorouscleanco.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Vigorous Clean Co.",
    description:
      "Eco-friendly home & office cleaning. Transparent, square-foot pricing. Book in minutes.",
    url: "https://vigorouscleanco.com",
    siteName: "Vigorous Clean Co.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vigorous Clean Co." }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vigorous Clean Co.",
    description:
      "Eco-friendly home & office cleaning in Los Angeles. Book in minutes.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Tawk.to chat widget */}
        <Script id="tawk" strategy="afterInteractive">{`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/68d8270b34dcdf19500f9061/1j665h18j';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `}</Script>

        {/* LocalBusiness SEO (with socials) */}
        <Script id="ldjson" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vigorous Clean Co.",
            url: "https://vigorouscleanco.com",
            image: "https://vigorouscleanco.com/og-image.png",
            logo: "https://vigorouscleanco.com/icon-512.png",
            email: "vigorouscleanco@gmail.com",
            telephone: "+1-424-260-5986",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Los Angeles",
              addressRegion: "CA",
              addressCountry: "US"
            },
            areaServed: "Los Angeles",
            sameAs: [
              "https://www.instagram.com/vigorouss.co",
              "https://www.tiktok.com/@vigorouss.co"
            ]
          })}
        </Script>

        <Navbar />
        {/* extra padding accounts for promo bar in the navbar */}
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <PhoneWidget />
      </body>
    </html>
  );
}


