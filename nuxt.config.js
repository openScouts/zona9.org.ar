require('dotenv').config()

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
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
          'Zona 9 – Gran Bs. As. Noroeste -  Formamos parte de un Movimiento Mundial de jóvenes, niños y adultos. Nuestro medio es la educación no formal',
      },
      { property: 'og:type', content: 'business.business' },
      { property: 'og:title', content: 'Zona 9  - Scouts de Argentina' },
      { property: 'og:url', content: 'https://zona9.org.ar' },
      { property: 'og:image', content: 'https://zona9.org.ar/icon.png' },
      {
        property: 'business:contact_data:street_address',
        content: 'Pelagio Luna 2235',
      },
      { property: 'business:contact_data:locality', content: 'Caseros' },
      { property: 'business:contact_data:region', content: 'Buenos Aires' },
      { property: 'business:contact_data:postal_code', content: '1678' },
      { property: 'business:contact_data:country_name', content: 'Argentina' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'bootstrap-css-only/css/bootstrap.min.css',
    '~/node_modules/mdbvue/lib/css/mdb.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-169660723-1',
      },
    ],
    '@nuxtjs/dotenv',
  ],
  env: {
    FACEBOOK_TOKEN: process.env.FACEBOOK_TOKEN,
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],
  sitemap: {
    hostname: 'https://zona9.org.ar/',
    gzip: true,
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
