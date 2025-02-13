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
        "@nuxtjs/sitemap",
    ],
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
    app: {
        head: {
            titleTemplate: "", // Убирает суффикс
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
            meta: [{ name: "robots", content: "index, follow" }],
        },
    },
    sitemap: {
        hostname:
            process.env.STATE_ENV == "dev"
                ? "http://localhost:3000"
                : "https://aurora-estate.ge", // Укажите ваш домен
        routes: [
            "/", // Главная страница
        ],
    },
    nitro: {
        prerender: {
            routes: ["/sitemap.xml", "/robots.txt"],
        },
    },
    runtimeConfig: {
        public: {
            apiBaseURL:
                process.env.STATE_ENV == "dev"
                    ? "http://localhost:1337"
                    : "https://scms.aurora-estate.ge",
            frontendBaseURL:
                process.env.STATE_ENV == "dev"
                    ? "http://localhost:3000"
                    : "https://aurora-estate.ge",
        },
    },
});
