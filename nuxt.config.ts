// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'TKBGO購課網',
      htmlAttrs: {
        lang: 'zh-Tw'
      },
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, height=device-height, minimum-scale=1.0, user-scalable=0'
        },
        {
          hid: 'description',
          name: 'description',
          content: ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: ''
        },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper', '@element-plus/nuxt', '@pinia/nuxt'],
  elementPlus: {
    /** Options */
  },
  css: [
    '~/assets/scss/reset.scss',
    '~/assets/scss/main.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  imports: {
    dirs: ['composables', 'composables/*/index.{ts,js,mjs,mts}', 'composables/**']
  },
  plugins: [{ src: '~/plugins/fontawesome.js', ssr: false }],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  runtimeConfig: {
    public: {
      baseURL: 'https://www.tkbgo.com.tw/'
    }
  }
})
