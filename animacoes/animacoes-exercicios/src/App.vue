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

		<!-- Manipulando com :bind-->
		<hr>
		<b-select v-model="typeAnimation" class="mb-4" appear>
			<option value="fade">Fade</option>
			<option value="slide_fade">Slide-Fade</option>
		</b-select>
		<transition :name="typeAnimation">
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>

		<!-- Animação entre um ou outro elemento -->
		<!-- Existe tbm o mode para escolhe como inicia: exmplo primeiro o elemento sai e depois o outro inicia -->
		<transition name="fade" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
		</transition>

		<!-- Animações com JS -->
		<hr>
		<b-button variant="dark" @click="exibir2=!exibir2">Alternar</b-button>
		<!-- O ':css' evita que qualquer css interfira nessa transição -->
		<transition
			:css="false"
			
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div v-if="exibir2" class="caixa"></div>
		</transition>

		<hr>
		<div class="mb-4">
			<b-button class="mr-2" variant="primary" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertencia</b-button>
		</div>
		<transition name="slide_fade" appear mode="out-in">
			<component :is="componenteSelecionado"></component>
		</transition>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue';
import AlertaInfo from './AlertaInfo.vue';
export default {
	components:{ AlertaAdvertencia, AlertaInfo},
	data(){
		return{
			msg: 'Uma mensagem de informações para o Usuário!',
			exibir:true,
			exibir2:true,
			typeAnimation: 'fade',
			larguraBase: 0,
			componenteSelecionado:"",
		}
	},
	methods:{
		animar(el, done, negativo){
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + (negativo ?  -rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20);
		},

		beforeEnter(el){
			this.larguraBase = 0;
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el,done,false)
		},

		// afterEnter(el){
		// 	console.log('afterEnter');
		// },

		// enterCancelled(){
		// 	console.log('enterCancelled');
		// },

		beforeLeave(el){
			this.larguraBase = 300;
			el.style.width = `${this.larguraBase}px`
		},

		leave(el, done){
			this.animar(el,done,true)
		},

		// afterLeave(el){
		// 	console.log('afterLeave');
		// },

		// leaveCancelled(){
		// 	console.log('leaveCancelled');
		// },
	},
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

/* TRASIÇÕES COM JS */
.caixa{
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightcoral;
}

/* TRASIÇÕES COM CSS */

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
