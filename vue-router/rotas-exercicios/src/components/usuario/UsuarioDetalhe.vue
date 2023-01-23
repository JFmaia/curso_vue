<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong>{{ id }}</p>

        <!--:to="`/usuario/${id}/editar`"-->
        <router-link 
            tag="button" 
            primario 
            :to="{name: 'editarUsuario', params:{id}, query:{completo:true, lingua:'pt'}, hash:'#rodape' }"
         >
            Editar
        </router-link>
    </div>
</template>
<script>
export default {
    //Pegando os parametros da rota
   props:['id'],
}
</script>
<style>
    
</style>