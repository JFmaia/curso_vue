<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome:">
				<b-form-input 
					type="text" 
					size="lg" v-model="usuario.nome" 
					placeholder="Informe seu Nome">
				</b-form-input>
			</b-form-group>

			<b-form-group label="E-mail:">
				<b-form-input 
					type="email" 
					size="lg" 
					v-model="usuario.email" 
					placeholder="Informe seu E-mail">
				</b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="dark">Salvar</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="primary" class="ml-2">Obter Usuários</b-button>
		</b-card>
		<hr>
		<b-list-group class="list-users">
			<b-list-group-item v-for="usuario in usuarios" :key="usuario.id">
				<strong>Nome: </strong>{{ usuario.nome }} <br>
				<strong>Email: </strong>{{ usuario.email }} <br>
				<strong>ID: </strong>{{ usuario.id}}
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>

export default {
	data(){
		return{
			usuarios:[],
			usuario:{
				nome:'',
				email:'',
			}
		}
	},
	methods: {
		salvar(){
			this.$http.post('usuarios.json', this.usuario)
				.then(resp => {
					this.usuario.nome = '';
					this.usuario.email = '';
				})
		},

		obterUsuarios(){
			this.$http.get('usuarios.json').then(resp => {
				this.usuarios = resp.data
				console.log(resp.data)
			})
			const token = 'abc1234567890'
			//Adicionando um token de autorização depois de listar users.
			this.$http.defaults.headers.common['Authorization'] = token
		}
	},
	// created() {
	// 	this.$http.post('usuarios.json',{
	// 		nome:"Maria",
	// 		email: "maria741@gmail.com"
	// 	}).then(res => console.log(res));
	// },
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
