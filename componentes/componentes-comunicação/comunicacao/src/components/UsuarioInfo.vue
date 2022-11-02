<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário:<strong>{{inverteNome()}}</strong></p>
    </div>
</template>

<script>
export default {
    //Esse valor dentro de props pode ser usado normalmente dentro deste componente!
    props: {
        //validando propriedade
        nome:{
            type:String,
            required: true
        }
    },
    methods:{
        inverteNome(){
            return this.nome.split('').reverse().join('')
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
