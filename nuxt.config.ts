// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: false },
    ssr: true, // Включает SSR
    modules: [
      "@nuxtjs/tailwindcss",
      "@vueuse/nuxt",
      "@pinia/nuxt",
      "nuxt-yandex-metrika",
      "nuxt-gtag",
      "nuxt-swiper",
      "@nuxtjs/strapi",
      "@nuxtjs/seo",
      "@nuxtjs/robots",
      "@nuxtjs/sitemap",
    ],
    robots: {
        // provide simple disallow rules for all robots `user-agent: *`
        disallow: ["/secret", "/admin"],
        allow: "/",
    },
    site: {
        url: "https://aurora-estate.ge",
        name: "Aurora Estate",
    },
    yandexMetrika: {
        id: "99644276",
        options: {
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
        },
    },
    gtag: {
        id: "G-GTC4MJX3XF",
    },
    sitemap: {
        hostname: 'https://aurora-estate.ge',
    },
    app: {
        head: {
            htmlAttrs: {
                lang: "ru",
            },
            link: [
                { rel: "icon", type: "image/png", href: "/favicon.ico" },
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/favicon.ico",
                },
            ],
            meta: [
                { name: "robots", content: "index, follow" },
                { property: "og:site_name", content: "" },
            ],
        },
    },
    nitro: {
        prerender: {
            routes: ["/robots.txt"],
        },
    },
    runtimeConfig: {
        public: {
            apiBaseURL:
                process.env.STATE_ENV == "dev"
                    ? "http://localhost:1337"
                    : "https://scms.aurora-estate.ge",
            frontendBaseURL: "https://aurora-estate.ge",
        },
    },
});