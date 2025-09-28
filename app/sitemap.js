// app/sitemap.js
export default function sitemap() {
  const base = "https://vigorous-clean-co.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/pricing`, lastModified: new Date() },
    { url: `${base}/services`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/faq`, lastModified: new Date() },
    { url: `${base}/account`, lastModified: new Date() },
    { url: `${base}/signup`, lastModified: new Date() },
    { url: `${base}/terms`, lastModified: new Date() },
    { url: `${base}/privacy`, lastModified: new Date() },
  ];
}
