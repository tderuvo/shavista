import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/experience", "/professionals", "/philosophy", "/academy", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/professionals" ? 0.9 : 0.7,
  }));
}
