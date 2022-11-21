<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<!--PEGA o texto ou codigo esperado e coloca na tag em questão-->
		<p v-text="'Usando ddiretiva v-text'"></p>
		<!--PEGA o texto ou codigo com html e executa as tags htmls-->
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque:fundo.atrasar="cor">Usando diretiva personalizada</p>
		<p v-destaque="cor">Usando diretiva personalizada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="cor">Usando diretiva personalizada</p>
		<p v-destaque-local.atrasar="cor">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	directives:{
		'destaque-local':{
			bind(el,binding){
				const aplicarCor = cor =>{
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					}else{
						el.style.color= cor
					}
				}

				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = 3000;

				const cor1 = binding.value;
				const cor2 = "purple"
				let corAtual = cor1

				setTimeout(()=>{
					if(binding.modifiers['alternar']) {
						setInterval(()=>{
							corAtual = corAtual === cor1 ? cor2 : cor1;
							aplicarCor(corAtual)
						},1000)
					}else{
						aplicarCor(binding.value)
					}
				},atraso)
			}
		}
	},
	data(){
		return{
			cor: 'lightblue'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
