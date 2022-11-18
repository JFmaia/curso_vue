<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<!--PEGA o texto ou codigo esperado e coloca na tag em questão-->
		<p v-text="'Usando ddiretiva v-text'"></p>
		<!--PEGA o texto ou codigo com html e executa as tags htmls-->
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque="cor">Usando diretiva personalizada</p>
	</div>
</template>

<script>
export default {
	data(){
		return{
			cor: 'green'
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
