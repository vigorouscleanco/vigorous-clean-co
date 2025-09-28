// app/layout.js
import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'Vigorous Clean Co.',
  description:
    'Eco-friendly cleaning services in Los Angeles & Orange County with transparent flat-rate pricing.',
  metadataBase: new URL('https://vigorous-clean-co.vercel.app'),
  openGraph: {
    title: 'Vigorous Clean Co.',
    description:
      'Eco-friendly cleaning services in Los Angeles & Orange County with transparent flat-rate pricing.',
    url: 'https://vigorous-clean-co.vercel.app',
    siteName: 'Vigorous Clean Co.',
    images: [{ url: '/og-cover.png', width: 1200, height: 630 }],
  },
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-slate-800">
        {children}

        {/* Tawk.to widget (safe Next.js way) */}
        <Script id="tawk" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
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
