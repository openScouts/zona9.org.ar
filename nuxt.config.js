import path from 'path'
import fs from 'fs'

export default {
  mode: 'spa',
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.cert'))
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Zona 9 – Gran Bs. As. Noroeste - Scouts de Argentina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'Andres Lacquaniti' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Zona 9 – Gran Bs. As. Noroeste -  Formamos parte de un Movimiento Mundial de jóvenes, niños y adultos. Nuestro medio es la educación no formal'
      },

      { property: 'og:type', content: 'business.business' },
      { property: 'og:title', content: 'Zona 9  - Scouts de Argentina' },
      { property: 'og:url', content: 'https://zona9.org.ar' },
      { property: 'og:image', content: 'https://zona9.org.ar/icon.png' },
      {
        property: 'business:contact_data:street_address',
        content: 'Pelagio Luna 2235'
      },
      { property: 'business:contact_data:locality', content: 'Caseros' },
      { property: 'business:contact_data:region', content: 'Buenos Aires' },
      { property: 'business:contact_data:postal_code', content: '1678' },
      { property: 'business:contact_data:country_name', content: 'Argentina' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    '~/node_modules/mdbvue/lib/css/mdb.min.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-92295998-1'
      }
    ],
    '@nuxtjs/onesignal',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/dotenv'
  ],
  sitemap: {
    hostname: 'https://zona9.org.ar/',
    gzip: true
  },
  oneSignal: {
    init: {
      appId: process.env.ONESIGNAL_KEY,
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
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},

    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
