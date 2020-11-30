// 全局方法
import Vue from 'vue'
const utils = {
  install(Vue) {
    Vue.prototype.$say = function (origin, targe) {
      return origin + targe
    }
    Vue.prototype.$password = 'lijianhua'
  },
}
Vue.use(utils)
