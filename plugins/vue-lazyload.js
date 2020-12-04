import Vue from 'vue'
import vueLazyload from 'vue-lazyload'

// https://github.com/hilongjw/vue-lazyload#readme
Vue.use(vueLazyload, {
  // 预加载高度比例
  preLoad: 1.3,
  // 异常图片
  error: require('~/assets/img/common/error.png'),
  // 加载图片
  loading: require('~/assets/img/common/loading.gif'),
  // 重试次数
  attempt: 1,
  // 监听事件
  listenEvents: ['scroll'],
  // 使用 IntersectionObserver 改善性能
  observer: true,
  // 不打印调试信息
  silent: true,
  // // 图片监听过滤器
  // filter: {
  //   // 统一CDN
  //   cdn(listener, options) {
  //     listener.src = replaceCDN(listener.src)
  //   },
  //   // 自适应webp配置
  //   webp(listener, { supportWebp }) {
  //     const { src } = listener
  //     if (!src || !supportWebp) return
  //     // nuxt 图片统一通过oss-process处理
  //     if (src.startsWith('https://nuxt.cdn.huabbao.com')) {
  //       listener.src = `${src}?x-oss-process=image/quality,q_75/format,webp`
  //       return
  //     }
  //     if (src.startsWith('https://img.cdn.huabbao.com')) {
  //       // 原图
  //       if (src.endsWith('!pe')) {
  //         listener.src = src.replace(/!pe$/, '!pe.webp')
  //       }
  //       // 实际像素 w100,h100
  //       if (src.endsWith('!th_100')) {
  //         listener.src = src.replace(/!th_100$/, '!th_100.webp')
  //       }
  //       // 实际像素 w350,h350
  //       if (src.endsWith('!th_300')) {
  //         listener.src = src.replace(/!th_300$/, '!th_300.webp')
  //       }
  //       // 实际像素 w800
  //       if (src.endsWith('!th_750')) {
  //         listener.src = src.replace(/!th_750$/, '!th_750.webp')
  //       }
  //       // 实际像素 w690,h400
  //       if (src.endsWith('!th_690_400')) {
  //         listener.src = src.replace(/!th_690_400$/, '!th_690_400.webp')
  //       }
  //     }
  //   },
  // },
  // 支持懒加载组件
  lazyComponent: false,
})
