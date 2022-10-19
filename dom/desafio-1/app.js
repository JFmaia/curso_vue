new Vue({
    el:"#desafio",
    data:{
        nome: "José Flávio Maia",
        idade: 22,
        link: "https://matriculas.estacio.br/blog/wp-content/uploads/2020/02/16estacio-jogos-digitais.jpg"
    },
    methods:{
        numberRamdon: function(){
            return Math.random(0,1)
        },
        calc: function(){
            return this.idade * 3
        }
    }
})