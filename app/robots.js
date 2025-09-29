export default function robots() {
  const base = "https://vigorouscleanco.com";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
