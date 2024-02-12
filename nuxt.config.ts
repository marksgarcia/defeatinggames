// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],
  plugins: ["~/plugins/fontawesome", "~/plugins/count-up"],
  runtimeConfig: {
    public: {
      gtagId: "G-ZGE1ED86E5",
    },
  },
});
