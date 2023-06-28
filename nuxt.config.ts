// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic'],
  routeRules: {
    '/': { redirect: '/tabs/tab1' },
    '/tabs': { redirect: '/tabs/tab1' },
  },
  css: ["@/theme/variables.css"],
  ionic: {
    // https://ionic.nuxtjs.org/getting-started#options
    css: {
      utilities: true
    }
  }
})
