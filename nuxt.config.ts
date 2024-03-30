// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules:['nuxt-primevue', '@nuxtjs/tailwindcss'],
  primevue: {
    options: {
      unstyled: true,
      ripple:true
    },
    importPT: {
      from: "~/presets/wind/",
    },
  },
})