// 全局方法
import Vue from 'vue'
console.log();
var utils = {
    install(Vue) {
        Vue.prototype.$say = function(){
            console.log('I love you');
        };
        Vue.prototype.$she = 'lijianhua'
    }
}
Vue.use(utils);