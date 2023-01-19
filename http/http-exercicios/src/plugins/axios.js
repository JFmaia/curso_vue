import Vue from 'vue'
import axios from 'axios'

//Url base que irá ser acessada!
// axios.defaults.baseURL = 'https://curso-vue-c1867-default-rtdb.firebaseio.com/'

//Adicionando o axios em todas minhas instacias de VUE.
Vue.use({
    install(Vue){
        // Vue.prototype.$http = axios
        // Uma instacia axios, podendo ter varias outras para varias apis
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-c1867-default-rtdb.firebaseio.com/',
            //Autorização de forma global
            // headers:{
            //     "Authorization": "abc123",
            // }
        })

        // Forma de interceptar uma request
        // Vue.prototype.$http.interceptors.request.use(config =>{
        //     console.log(config.method);
        //     return config
        // }, error => Promise.reject(error));

        // Tratando os dados que vem do firebase
        // Vue.prototype.$http.interceptors.response.use(res =>{
        //     const array = [];
        //     for(let chave in res.data){
        //         array.push(
        //             {
        //                 id: chave,
        //                 ...res.data[chave]
        //             }
        //         )
        //     }
        //     res.data = array;
        //     return res;
        // }, error => Promise.reject(error));
    }
})