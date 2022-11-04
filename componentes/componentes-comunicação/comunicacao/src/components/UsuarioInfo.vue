<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário:<strong>{{inverteNome()}}</strong></p>
        <p>Idade do Usuário:<strong>{{idade}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFN()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'
export default {
    //Esse valor dentro de props pode ser usado normalmente dentro deste componente!
    props:{
        //validando propriedade
        nome:{
            type:String,
            // required: true
            // default:function(){
            //     return Array(10).fill(3).join(',')
            // }
            default: "Anônimo",
        },
        idade:Number,
        reiniciarFN: Function,
    },
    methods:{
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome="José"
            this.$emit("nomeMudou", this.nome)
        }
    },
    created() {
        barramento.$on('idadeMudou',idade => {
            this.idade = idade
        })
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
