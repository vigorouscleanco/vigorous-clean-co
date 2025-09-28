// app/layout.js
import './globals.css';
import Script from 'next/script';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Vigorous Clean Co.',
  description: 'Eco-friendly cleaning with transparent flat-rate pricing in LA & Orange County.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800">
        <Navbar />
        {children}
        <Footer />

        {/* Tawk.to widget */}
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

