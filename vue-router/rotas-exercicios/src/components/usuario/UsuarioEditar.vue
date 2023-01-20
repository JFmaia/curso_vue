<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong>{{ id }}</p>
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