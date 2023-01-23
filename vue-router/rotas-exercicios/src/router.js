import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio';
import Menu from './components/template/Menu';
import MenuAlt from './components/template/MenuAlt';

import Usuario from './components/usuario/Usuario';
import UsuarioLista from './components/usuario/UsuarioLista';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe';
import UsuarioEditar from './components/usuario/UsuarioEditar';

// Registrando a Router no Vue
Vue.use(Router)

// Class de configuração do vue-router
export default new Router({
    mode: 'history',
    // Função de scroll até a ancora desejada com o hash
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }
        else if(to.hash){
            return { selector: to.hash}
        }
        else{
            return { x: 0, y: 0 }
        }
    },
    routes:[
        {
            path: '/',
            name:'inicio',
            // component: Inicio,
            components:{
                default: Inicio,
                menu:Menu,
            }
        },
        {
            path: '/usuario',
            components:{
                default: Usuario,
                menu: MenuAlt,
            },
            //Permitindo que todos os parametros da rota sejam passados como atributos
            props: true,
            //Rotas Aninhadas
            children:[
                { 
                    path: '', 
                    component: UsuarioLista,
                },
                { 
                    path: ':id', 
                    component: UsuarioDetalhe, 
                    props:true,
                },
                { 
                    path: ':id/editar', 
                    component: UsuarioEditar, 
                    props:true,
                    name: 'editarUsuario',
                },
            ]
        }, 

        //redirecionando para o usuario pela url 'redirecionar'
        {
            path:'/redirecionar',
            redirect:'/usuario'
        },

        //redirecionando qualquer url não suportada para o inicio 
        {
            path:'*',
            redirect:'/'
        },
    ]
});