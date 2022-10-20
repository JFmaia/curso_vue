new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alert(){
            alert("Botão clicado!")
        },
        read(event){
            this.valor = event.target.value;
        }
    }
})