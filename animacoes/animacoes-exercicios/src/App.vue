<template>
	<div id="app" class="container-fluid">
		<!-- <h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide" appear>
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="slide_fade" type="animation" appear>
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>

		<hr>
		<b-select v-model="typeAnimation" class="mb-4" appear>
			<option value="fade">Fade</option>
			<option value="slide_fade">Slide-Fade</option>
		</b-select>
		<transition :name="typeAnimation">
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>

		<transition name="fade" mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{msg}}</b-alert>
			<b-alert variant="warning" show v-else key="warning">{{msg}}</b-alert>
		</transition>

		<hr>
		<b-button variant="dark" @click="exibir2=!exibir2">Alternar</b-button>
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
		</transition> -->

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Adicionar aluno</b-button>
		<!--Transição em grupos-->
		<transition-group name="slide_fade" tag="div">
			<b-list-group v-for="aluno,i in alunos" :key="aluno">		
				<b-list-grou-item @click="removeAluno(i)">
					{{ aluno }}
				</b-list-grou-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
import AlertaAdvertencia from './AlertaAdvertencia.vue';
import AlertaInfo from './AlertaInfo.vue';
export default {
	components:{ AlertaAdvertencia, AlertaInfo},
	data(){
		return{
			alunos:['Roberto','Julia','Teresa', 'Paulo'],
			msg: 'Uma mensagem de informações para o Usuário!',
			exibir:true,
			exibir2:true,
			typeAnimation: 'fade',
			larguraBase: 0,
			componenteSelecionado:"",
		}
	},
	methods:{
		adicionarAluno(){
			const s = Math.random().toString(36).substring(2);
			this.alunos.push(s);
		},
		removeAluno(indece){
			this.alunos.splice(indece, 1);	
		},
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
	position: absolute;
	width: 100%;
	animation: slide-out 1s ease;
	transition: opacity 1s;
}

.slide_fade-enter, .slide_fade-leave-to{
	opacity: 0;
}

.slide_fade-move{
	transition: transform 1s;
}

</style>
