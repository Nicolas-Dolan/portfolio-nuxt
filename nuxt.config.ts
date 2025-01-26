// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // baseURL: "/portfolio-nuxt/",
    pageTransition: { name: "slide-left", mode: "out-in" },
    head: {
      // meta: [
      //   { httpEquiv: 'utf-8' },
      // ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Forum&display=swap",
        },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css",
        // },

        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css",
        // },

        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/devicon.min.css",
        },
      ],
    },
  },
  // css: ["@/assets/scss/bootstrap.scss"],
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  pages: true,
  ssr: false,
});
