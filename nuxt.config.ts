// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: "/portfolio-nuxt/",
  },
  // css: ["@/assets/scss/bootstrap.scss"],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  pages: true,
});
