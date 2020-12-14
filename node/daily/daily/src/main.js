import Vue from 'vue'       //引入包 import
import App from './App.vue'
import router from './router/index' //引入router  --- 解构
// console.log(Router);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router.router
}).$mount('#app')
