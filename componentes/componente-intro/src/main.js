import Vue from 'vue'
import App from './App.vue'
import MyContadores from './MyContadores.vue'

Vue.config.productionTip = false
Vue.component('appContadores',MyContadores)

new Vue({
  render: h => h(App),
}).$mount('#app')
