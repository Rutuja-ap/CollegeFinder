import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://college-finder-git-main-rutuja-adhikar-patils-projects.vercel.app/sitemap.xml",
  };
}