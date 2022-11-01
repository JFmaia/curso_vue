<template>
    <div class="contadores">
        <h2>Contadores</h2>
        <contador v-for="c in 5" :key="c"></contador>
    </div>
</template>

<script>
import Contador from './MyContador.vue' 
export default {
    components:{
        'contador': Contador
    }
}
</script>

<style>
</style>