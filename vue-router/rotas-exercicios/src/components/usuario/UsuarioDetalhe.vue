<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
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