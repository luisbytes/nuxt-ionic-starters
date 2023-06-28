// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic'],
  css: ["@/theme/variables.css"],
  ionic: {
    // https://ionic.nuxtjs.org/getting-started#options
    css: {
      utilities: true
    }
  }
})
