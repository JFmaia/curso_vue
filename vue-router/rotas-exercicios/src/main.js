import './style.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
  //Registrando as rotas no Vue
  router:router,
  render: h => h(App),
}).$mount('#app')
