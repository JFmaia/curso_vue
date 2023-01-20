import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';

import Usuario from './components/usuario/Usuario';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
import UsuarioEditar from './components/usuario/UsuarioEditar';

// Registrando a Router no Vue
Vue.use(Router)

// Class de configuração do vue-router
export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Inicio,
            name:'inicio',
        },
        {
            path: '/usuario',
            component: Usuario,
            //Permitindo que todos os parametros da rota sejam passados como atributos
            props: true,
            //Rotas Aninhadas
            children:[
                { 
                    path: '', component: UsuarioLista,
                },
                { 
                    path: ':id', component: UsuarioDetalhe, props:true,
                },
                { 
                    path: ':id/editar', 
                    component: UsuarioEditar, 
                    props:true,
                    name: 'editarUsuario',
                },
            ]
        },
    ]
});