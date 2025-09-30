import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneWidget from "@/components/PhoneWidget";
import EmailWidget from "@/components/EmailWidget";

export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Home & Office Cleaning",
  description:
    "Your Space, Sparkling with Vigor. Eco-friendly cleaning services across Los Angeles & Orange County.",
  metadataBase: new URL("https://vigorouscleanco.com"),
  openGraph: {
    title: "Vigorous Clean Co.",
    description:
      "Eco-friendly home & office cleaning. Transparent, square-foot pricing. Book in minutes.",
    url: "https://vigorouscleanco.com",
    siteName: "Vigorous Clean Co.",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630, alt: "Vigorous Clean Co." }],
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {/* Tawk.to chat (your provided snippet) */}
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

        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />

        {/* Floating widgets */}
        <PhoneWidget />
        <EmailWidget />
      </body>
    </html>
  );
}
