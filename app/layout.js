import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  metadataBase: new URL("https://vigorouscleanco.com"),
  title: {
    default: "Vigorous Clean Co. | Eco-Friendly Cleaning in LA & OC",
    template: "%s | Vigorous Clean Co.",
  },
  description:
    "Transparent flat-rate residential & office cleaning. Eco- and pet-safe products. Serving Los Angeles County & Orange County. Book online in minutes.",
  keywords: [
    "cleaning service",
    "house cleaning",
    "office cleaning",
    "Los Angeles",
    "Orange County",
    "eco-friendly cleaning",
    "flat-rate cleaning",
  ],
  openGraph: {
    title: "Vigorous Clean Co. | Eco-Friendly Cleaning in LA & OC",
    description:
      "Transparent flat-rate residential & office cleaning. Eco- and pet-safe products. Serving LA & OC.",
    url: "https://vigorouscleanco.com",
    siteName: "Vigorous Clean Co.",
    images: [
      { url: "/og-cover.png", width: 1200, height: 630, alt: "Vigorous Clean Co." },
      { url: "/logo.png", width: 800, height: 800, alt: "Vigorous Clean Co. Logo" },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://vigorouscleanco.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}

        {/* LocalBusiness schema with your Instagram & TikTok */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Vigorous Clean Co.",
              url: "https://vigorouscleanco.com",
              image: "https://vigorouscleanco.com/logo.png",
              description:
                "Transparent flat-rate residential & office cleaning with eco- and pet-safe products. Serving Los Angeles & Orange County.",
              areaServed: ["Los Angeles County", "Orange County"],
              telephone: "+1-424-260-5986",
              email: "vigorouscleanco@gmail.com",
              sameAs: [
                "https://www.instagram.com/vigorouss.co",
                "https://www.tiktok.com/@vigorouss.co"
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
