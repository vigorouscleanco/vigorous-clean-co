import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneWidget from "@/components/PhoneWidget";

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Cleaning in Los Angeles",
  description:
    "New clients save 10% with code VIGOR10. Professional eco-friendly home & office cleaning. Book in minutes.",
  metadataBase: new URL("https://vigorouscleanco.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    // Transparent iOS share icon (180x180 PNG, transparent)
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  // Open Graph (big preview image used by iMessage/FB/etc.)
  openGraph: {
    title: "Vigorous Clean Co. — Eco-Friendly Cleaning in Los Angeles",
    description:
      "Eco-friendly cleaning with transparent pricing. New clients save 10% — code VIGOR10.",
    url: "https://vigorouscleanco.com",
    siteName: "Vigorous Clean Co.",
    images: [
      {
        // Transparent PNG so the chat bubble background shows through
        url: "/og-image-transparent.png?v=3",
        width: 1200,
        height: 630,
        alt: "Vigorous Clean Co. — Eco-Friendly Cleaning in Los Angeles",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter/X preview (also uses transparent image)
  twitter: {
    card: "summary_large_image",
    title: "Vigorous Clean Co. — Eco-Friendly Cleaning in Los Angeles",
    description:
      "Book an eco-friendly home or office clean in minutes. New clients save 10% — VIGOR10.",
    images: ["/og-image-transparent.png?v=3"],
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

        {/* LocalBusiness SEO with your socials */}
        <Script id="ldjson" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vigorous Clean Co.",
            url: "https://vigorouscleanco.com",
            image: "https://vigorouscleanco.com/og-image-transparent.png",
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
        {/* extra top padding for the promo bar in navbar */}
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <PhoneWidget />
      </body>
    </html>
  );
}

