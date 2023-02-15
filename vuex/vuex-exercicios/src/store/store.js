import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        produtos:[],
        quantidade: 0,
        preco: 0
    },
    getters:{
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        },
    },
    //Mutations são só para modificar o estado do state.
    mutations:{
        //Em todos os methodos de uma mutations só pode passar um parametro, aqui é o 'payload
        adicionarProduto(state, produto){
            state.produtos.push(produto);
        },
        setQuantidade(state,payload){
            state.quantidade = payload;
        },
        setPreco(state,payload){
            state.preco = payload;
        }
    },

    /*
        Actions existem para fazemos regras de negocio e mandar para a mutation só o resultado, 
        example: requisições async 
    */
    actions:{
        adicionarProduto(context,payload){
            context.commit('adicionarProduto',payload);
        }
    }
    
});