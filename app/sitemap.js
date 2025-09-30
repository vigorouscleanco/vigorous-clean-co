export default function sitemap() {
  const base = "https://vigorouscleanco.com";
  const routes = ["", "/about", "/services", "/pricing", "/terms", "/faq", "/contact"];
  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }));
}

