// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare_module",
    experimental: {
      asyncContext: true
    },

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  },

  modules: ['@nuxtjs/i18n', "nitro-cloudflare-dev"],
  i18n: {
    lazy: true,
    locales: [
      {
        code: 'en',
        language: 'en',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'zh-Hans',
        language: 'zh',
        name: '简体中文',
        file: 'zh-hans.json'
      }
    ]
  }
})
