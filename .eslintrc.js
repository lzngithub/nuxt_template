module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  // 全局变量 需要整改
  globals: {
    uni: true,
    layer: true,
    utils: true,
    setCookie: true,
    getCookie: true,
    delCookie: true,
    setShareInfo: true,
    $: true,
    BSL: true,
    Swiper: true,
    previewImage: true,
    html2canvas: true,
    plupload: true,
    mui: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
}
