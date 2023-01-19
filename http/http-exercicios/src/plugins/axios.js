import Vue from 'vue'
import axios from 'axios'

//Url base que irá ser acessada!
axios.defaults.baseURL = 'https://curso-vue-c1867-default-rtdb.firebaseio.com/'

//Adicionando o axios em todas minhas instacias de VUE.
Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})