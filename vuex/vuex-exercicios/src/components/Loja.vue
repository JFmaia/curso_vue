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

export default {
    data() {
        return {
            sequencia: 1,
            quantidade: 1,
            preco: 9.99,
        }
    },
    // computed: {
    //     quantidade: {
    //         get () {
    //             return this.$store.state.parametros.quantidade
    //         },
    //         set (valor) {
    //             this.$store.commit('setQuantidade', valor)
    //         }
    //     },
    //     preco: {
    //         get () {
    //             return this.$store.state.parametros.preco
    //         },
    //         set (valor) {
    //             this.$store.commit('setPreco', valor)
    //         }
    //     },
    // },
    methods: {
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            //Adicionando no stado central do vuex, onde vai atualizar todos os outros componentes.
            this.$store.state.produtos.push(produto);
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
