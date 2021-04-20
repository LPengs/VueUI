import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//加载第三方 axios 模块  忽略不写时 默认引入index文件
// import qs from 'qs'
import './apis';
import './vendor/swiper'
// Vue.prototype.qs = qs;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
