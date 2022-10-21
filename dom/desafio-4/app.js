new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		caixa: true,
		caixaAzul:true,
		class3:"",
		class4:"",
		cor5: 'green',
		estilo5:{
			width: "100px",
			height: "100px",
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(()=>{
				this.class1 = this.class1 == "destaque" ? "encolher" : "destaque"
			}, 1000)
		},
		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(()=>{
				valor += 5
				this.width = `${valor}%`
				if(valor == 100){
					clearInterval(temporizador)
				}
			}, 500)
		},
		setCaixa(event){
			if(event.target.value == "true"){
				this.caixaAzul = true
			}else if(event.target.value == "false"){
				this.caixaAzul = false
			}
		}
	},
})
