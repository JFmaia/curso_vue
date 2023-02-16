export default {
    state:{
        quantidade: 1,
        preco: 1.99
    },
    //Mutations são só para modificar o estado do state.
    mutations:{
        //Em todos os methodos de uma mutations só pode passar um parametro, aqui é o 'payload
        setQuantidade(state,payload){
            state.quantidade = payload;
        },
        setPreco(state,payload){
            state.preco = payload;
        }
    },

}