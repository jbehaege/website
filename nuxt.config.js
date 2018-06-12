module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'VaHI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'VaHI' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: [
    '@nuxtjs/vuetify',
    [
      'nuxt-i18n', {
        locales: [
          { 
            code: 'en',
            name: 'English',
          },
          { 
            code: 'nl',
            name: 'Nederlands',
          },
        ],
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
          messages: {
            'en': require('./locales/dist/en.json'),
            'nl': require('./locales/dist/nl.json'),
          }
        }
      }
    ]
  ],
  plugins: [
    '~/plugins/vahi'
  ],
  vuetify: {
    materialIcons: true,
    css: false,
    theme: {
      // This are the VaHI colors
      primary: '#6E90A6', 
      secondary: '#CD003A',
      warning: '#FFAB00',
      error: '#D32F2F',
      info: '#64B5F6',
      accent: '#FF5B77'
    }
  },
  css: [
      '~/assets/style/vahi.styl'
  ],
  router: {
    middleware: ['auth'],
    extendRoutes (routes, resolve) {
      routes.push({
        path: '/admin/show/admin/:id', 
        component: 'pages/dynamic/show-admin.vue'
      })
      routes.push({
        path: '/admin/edit/admin/:id', 
        component: 'pages/dynamic/edit-admin.vue'
      })
      routes.push({
        path: '/admin/show/user/:id', 
        component: 'pages/dynamic/show-user.vue'
      })
      routes.push({
        path: '/admin/edit/user/:id', 
        component: 'pages/dynamic/edit-user.vue'
      })
      routes.push({
        path: '/admin/show/eye/:id', 
        component: 'pages/dynamic/show-eye.vue'
      })
      routes.push({
        path: '/admin/edit/eye/:id', 
        component: 'pages/dynamic/edit-eye.vue'
      })
      routes.push({
        path: '/admin/edit/picture/:id', 
        component: 'pages/dynamic/edit-picture.vue'
      })
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
