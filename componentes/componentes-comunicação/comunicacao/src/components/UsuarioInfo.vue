<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário:<strong>{{inverteNome()}}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFN()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    //Esse valor dentro de props pode ser usado normalmente dentro deste componente!
    props: {
        //validando propriedade
        nome:{
            type:String,
            // required: true
            // default:function(){
            //     return Array(10).fill(3).join(',')
            // }
            default: "Anônimo",
        },
        reiniciarFN: function(){

        }
    },
    methods:{
        inverteNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome="José"
            this.$emit("nomeMudou", this.nome)
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
