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
  loading: { color: "#23b7e5" },
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
    "@nuxtjs/pwa",
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://example.com',
    gzip: true
  },
  oneSignal: {
    init: {
      appId: "5609dcae-8202-473f-8fc5-406e64d420af",
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    }
  },

  manifest: {
    name: "Zona 9 - Scouts de Argentina",
    short_name: "Zona 9",
    description: "Zona 9 – Gran Bs. As. Noroeste - Scouts de Argentina",
    lang: "es",
    background_color: "#E1E1E1",
    display: "standalone",
    orientation: "portrait",
    theme_color: "#23b7e5"
  },
  messages: {
    loading: "Loading...",
    error_404: "Esta página no se pudo encontrar",
    server_error: "Error del Servidor",
    nuxtjs: "Nuxt.js",
    back_to_home: "Volver a la página de inicio",
    server_error_details:
      "Ocurrió un error en la aplicación y su página no pudo ser servida. Si usted es el propietario de la aplicación, revise sus registros para más detalles.",
    client_error: "Error",
    client_error_details:
      "Se produjo un error al crear la página. Verifique la consola de herramientas para desarrolladores para más detalles."
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
    publicPath: "/_app/",
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ["mdbvue"]
  }
};
