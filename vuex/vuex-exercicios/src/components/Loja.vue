<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script lang="js">
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed:{
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        preco(){
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        /*
            Setando o sett 'adicionarProduto' nos methods. Se fosse para usar a mutations de forma direta.
            Ex:. ...mapMutations(['adicionarProduto']),
        */ 

        //Utilizando Actions
        ...mapActions('carrinho',['adicionarProduto']),

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            //Metodos para usar as actions.
            this.adicionarProduto(produto);
            // this.$store.dispatch('adicionarProduto',produto);

            //Modificando o estado usando uma mutation de forma direta. Formas:
            /*
                1-this.adicionarProduto(produto);
                2-this.$store.commit('adicionarProduto',produto);
                3-this.$store.state.produtos.push(produto);
            */ 
            
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
