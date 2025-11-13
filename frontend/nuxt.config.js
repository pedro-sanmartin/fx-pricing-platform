export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'es-CL'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Montserrat:wght@400;600;700&display=swap',
        media: 'print',
        onload: "this.media='all'"
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
  css: ['~/assets/css/tailwind.css'],
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
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-i18n'],

  /*
   ** i18n configuration
   */
  i18n: {
    locales: [
      {
        code: 'es-CL',
        iso: 'es-CL',
        name: 'Español',
        file: 'es-CL.json'
      },
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English',
        file: 'en-US.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'es-CL',
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'es-CL'
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
