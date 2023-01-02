<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<!--O 'appear' serve para quando sua aplicação for carregada sua animação seja executada-->
		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<!-- Adicionando o type vc define quem manda na transição logo o time ha ser seguido será do escolhido-->
		<!-- V-show tbm é suportado nessa situação-->
		<transition name="slide_fade" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return{
			msg: 'Uma mensagem de informações para o Usuário!',
			exibir:true,
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
	font-size: 1.5rem;
}

/* Primeira animação */
.fade-enter, .fade-leave-to{
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 1s;
}

/* Segunda animação  */
@keyframes slide-in{
	from {transform: translateY(40px);}
	to {transform: translateY(0);}
}

@keyframes slide-out {
	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}

.slide-enter-active{
	animation: slide-in 1s ease;
}

.slide-leave-active{
	animation: slide-out 1s ease;
}

/* Terceira animação */

.slide_fade-enter-active{
	animation: slide-in 1s ease;
	transition: opacity 1s;
}

.slide_fade-leave-active{
	animation: slide-out 1s ease;
	transition: opacity 1s;
}

.slide_fade-enter, .slide_fade-leave-to{
	opacity: 0;
}

</style>
