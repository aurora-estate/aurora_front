// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr:false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-yandex-metrika',
    'nuxt-gtag',
    'nuxt-swiper',
  ],
  yandexMetrika: {
    id: '99644276',
    options: {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true

    },
  },
  gtag: {
    id: 'G-GTC4MJX3XF'
  },
  runtimeConfig: {
    public: {
      baseURL:
        process.env.STATE_ENV == "dev"
          ? "http://localhost:1337"
          : "https://scms.aurora-estate.ge",
    },
  },
})