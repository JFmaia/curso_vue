import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//Criando um filtro global
Vue.filter('inverter', function(valor){
	return valor.split('').reverse().join('')
})

Vue.mixin({
	data(){
		return{
			global:'Estou no mixin global.'
		}
	},
	created(){
		console.log('Created -- Mixin Global!')
	}
})

new Vue({
	render: h => h(App)
}).$mount('#app')
