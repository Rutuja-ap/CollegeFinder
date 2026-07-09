import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://college-finder-git-main-rutuja-adhikar-patils-projects.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/compare`, lastModified: new Date() },
    { url: `${base}/predictor`, lastModified: new Date() },
    { url: `${base}/login`, lastModified: new Date() },
    { url: `${base}/signup`, lastModified: new Date() },
    { url: `${base}/qa`, lastModified: new Date() },
  ];
}