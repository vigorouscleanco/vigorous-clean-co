export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://vigorous-clean-co.vercel.app/sitemap.xml",
  };
}
