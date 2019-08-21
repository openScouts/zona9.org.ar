import path from "path";
import fs from "fs";

export default {
  mode: "spa",

  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "localhost.key")),
      cert: fs.readFileSync(path.resolve(__dirname, "localhost.cert"))
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "Zona 9 – Gran Bs. As. Noroeste - Scouts de Argentina",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Zona 9 – Gran Bs. As. Noroeste - Scouts de Argentina - Formamos parte de un Movimiento Mundial de jóvenes, niños y adultos.Nuestro medio es la educación no formal, educación alternativa que potencie las capacidades de las personas, que no se agota en un tiempo o en un lugar específico y que se brinda en forma permanente"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    //"@/assets/scss/style.scss"
    "bootstrap-css-only/css/bootstrap.min.css",
    "mdbvue/build/css/mdb.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-92295998-1"
      }
    ],
    "@nuxtjs/onesignal",
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  oneSignal: {
    init: {
      appId: "5609dcae-8202-473f-8fc5-406e64d420af",
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ["mdbvue"]
  }
};
