import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  metadataBase: new URL("https://vigorous-clean-co.vercel.app"),
  title: "Vigorous Clean Co.",
  description: "Eco-friendly cleaning services in LA & OC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
