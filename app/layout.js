export const metadata = {
  title: "Vigorous Clean Co. — Eco-Friendly Cleaning in LA & OC",
  description: "Transparent flat-rate pricing. Eco & pet-safe products. Book online in minutes.",
  openGraph: {
    title: "Vigorous Clean Co.",
    description: "Your Space, Sparkling with Vigor.",
    url: "https://vigorouscleanco.com",
    siteName: "Vigorous Clean Co.",
    images: [
      { url: "/og-cover.png", width: 1200, height: 630, alt: "Vigorous Clean Co." }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
