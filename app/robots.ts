import type { MetadataRoute } from "next";

const APP_BASE_URL = process.env.APP_BASE_URL;

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/",
        },
        sitemap: `${APP_BASE_URL}/sitemap.xml`,
    };
}
