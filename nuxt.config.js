export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: '' }],
  },
  /*
   ** Global CSS
   */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/reset.css', // 引入全局样式
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/element-ui', '@/plugins/axios', '@/plugins/utils'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  axios: {
    // 如果你使用了反向代理的功能（也就是proxy: true），
    // 那么就不能定义baseURL，这两项之间是冲突的，我们可以使用prefix来代替baseURL
    proxy: true, // 开启代理,为true时，proxy配置才会生效
    prefix: '/api/', // 表示给url加个前缀/api，一定要有
    credentials: true, // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api/': {
      // 一定要有，因为不统一前缀的话没办法进行代理
      target: 'http://localhost:8081', // 这个网站是开源的可以请求到数据的
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true,
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    transpile: [/^element-ui/],
  },
  // 配置本地跑的时候服务器的一个配置
  server: {
    port: 3001, // 本地跑的时候的端口
    host: '0.0.0.0',
  },
}
