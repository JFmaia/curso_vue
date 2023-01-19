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
			<b-list-group-item v-for="usuario,id in usuarios" :key="id">
				<strong>Nome: </strong>{{ usuario.nome }} <br>
				<strong>Email: </strong>{{ usuario.email }} <br>
				<strong>ID: </strong>{{ id }} <br>
				<b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
				<b-button class="ml-2" variant="danger" size="lg" @click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>

export default {
	data(){
		return{
			id: null,
			usuarios:[],
			usuario:{
				nome:'',
				email:'',
			}
		}
	},
	methods: {
		limpar(){
			this.usuario.nome = '';
			this.usuario.email = '';
			this.id = null;
		},

		carregar(id){
            this.id = id;
			this.usuario = { ...this.usuarios[id] }
		},
	
		salvar(){
			const metodo = this.id ? 'patch' : 'post';
			const finaUrl = this.id ? `/${this.id}.json` : '.json';
			this.$http[metodo](`/usuarios${finaUrl}`, this.usuario)
				.then(_ => this.limpar())
		},

		obterUsuarios(){
			this.$http.get('usuarios.json').then(resp => {
				this.usuarios = resp.data
			})
			// const token = 'abc1234567890'
			//Adicionando um token de autorização depois de listar users.
			// this.$http.defaults.headers.common['Authorization'] = token
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
