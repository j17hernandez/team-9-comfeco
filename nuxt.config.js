import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Comfeco',
    title: 'Comfeco',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

   // Modules: https://go.nuxtjs.dev/config-modules
   modules: [
    '@nuxtjs/firebase',
  ],
  // Firebase SDK 
  // https://firebase.nuxtjs.org/
  firebase: {
    config: {
      apiKey: process.env.VUE_APP_FIREBASE_KEY,
      authDomain: "team-vue-9-comfeco.firebaseapp.com",
      databaseURL: "https://team-vue-9-comfeco-default-rtdb.firebaseio.com",
      projectId: "team-vue-9-comfeco",
      storageBucket: "team-vue-9-comfeco.appspot.com",
      messagingSenderId: "288922534401",
      appId: "1:288922534401:web:e4ebaa5664bc1396ae3600",
      measurementId: "G-DNBS9RPX82"
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      performance: true,
      analytics: true,
      database: true
    }
  },
  // Variables de entorno
  env: {
    VUE_APP_FIREBASE_KEY: process.env.VUE_APP_FIREBASE_KEY
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          brand: '#69156A',
          brandsecondary: '#dfab01'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
