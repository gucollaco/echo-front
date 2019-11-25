import colors from "vuetify/es5/util/colors"

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/styles.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/VuetifyToast"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/moment",
    // Simple usage
    "@nuxtjs/vuetify",

    // With options
    [
      "@nuxtjs/vuetify",
      {
        /* module options */
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/svg",
    "@nuxtjs/pwa",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            code: "pt-BR",
            iso: "pt-BR",
            file: "pt-BR.js"
          },
          {
            code: "en",
            iso: "en-US",
            file: "en-US.js"
          }
        ],
        lazy: true,
        langDir: "lang/",
        defaultLocale: "pt-BR",
        vueI18n: {
          fallbackLocale: "pt-BR",
          messages: {
            en: {
              welcome: "Welcome"
            },
            pt: {
              welcome: "Bem Vindo"
            }
          }
        }
      }
    ]
  ],
  moment: {
    defaultLocale: "pt-br",
    locales: ["pt-br"]
  },
  webfontloader: {
    google: {
      families: [
        "Open+Sans&display=swap",
        "Lato&display=swap",
        "Montserrat&display=swap"
      ]
    }
  },
  /*
   ** vuetify module configurations
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      light: true,
      theme: {
        options: {
          customProperties: true
        }
      },
      themes: {
        light: {
          primary: colors.teal,
          accent: colors.yellow.base,
          secondary: colors.amber.base,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        })
      }
    }
  }
}
