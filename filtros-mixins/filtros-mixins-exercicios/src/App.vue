<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!-- Cada resultado de um filtro passa para o outro.-->
		<p>{{cpfDoAluno | cpf() | inverter()}}</p>
		<input type="text" :value="cpfDoAluno | cpf()">
		<hr>
		<Frutas></Frutas>
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">
					{{fruta}}
				</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add()">  
		</div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
export default {
	components:{Frutas},
	//Filtros servem para modificar valores de uma variavel, podendo ser utilizados como mascaras.
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3,0,'.')
			arr.splice(7,0,'.')
			arr.splice(11,0,'-')
			return arr.join('')
		}
	},
	data(){
		return{
			cpfDoAluno: "08220675446",
			fruta:'',
            frutas:['banana','tangerina','abacaxi']
		}
	},
	methods:{
		add(){
            this.frutas.push(this.fruta)
            this.fruta=''
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

input{
	font-size: 2.5rem;
}
</style>
