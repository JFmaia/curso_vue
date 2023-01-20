import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Usuario from './components/usuario/Usuario';

// Registrando a Router no Vue
Vue.use(Router)

// Class de configuração do vue-router
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Inicio
        },
        {
            path: '/usuario/:id',
            component: Usuario,
            //Permitindo que todos os parametros da rota sejam passados como atributos
            props: true,
        },
    ]
});