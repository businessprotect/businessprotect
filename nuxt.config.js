module.exports = {
  /*
  ** Headers of the page
  */
  plugins: [
    { src: '~plugins/fb-sdk.js', ssr: false }
  ],
  head: {
    htmlAttrs: {
      lang: 'ro'
    },
    title: 'businessprotect',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NPC Business Protect' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  generate: {
    minify: {
      removeOptionalTags: false,
    },
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
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
