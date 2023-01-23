<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong>{{ id }}</p>
        <p><strong>Completo:</strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua:</strong>{{ $route.query.lingua}}</p>

        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>
<script>
export default {
    //Pegando os parametros da rota
   props:['id'],
}
</script>
<style>
    #rodape{
        margin-top: 800px;
    }
</style>