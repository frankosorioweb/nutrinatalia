<template>
    <v-main class="consultas-online-2">
        <presentation/>
        <beneficios/>
        <modalidades/>
        <consulta-online/>
    </v-main>
</template>

<script>
    import presentation from '../components/consultasOnline/sections/presentation.vue';
    import beneficios from '../components/consultasOnline/sections/beneficios.vue';
    import modalidades from '../components/consultasOnline/sections/modalidades.vue';
    import consultaOnline from '../components/consultasOnline/sections/consultaOnline.vue';
    export default {
        components: {
            presentation,
            beneficios,
            modalidades,
            consultaOnline
        }
    }
</script>