// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  pinia: {
    storesDirs: ['./stores/**',],
  },
  piniaPersistedstate: {
    debug: true
  },
  imports: {
    dirs: [
      './types'
    ]
  },
  devtools: { enabled: true }
})
