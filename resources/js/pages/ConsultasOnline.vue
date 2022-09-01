<template>
    <v-main class="consultas-online-2">
        <presentation/>
        <beneficios/>
    </v-main>
</template>

<script>
    import presentation from '../components/consultasOnline/sections/presentation.vue';
    import beneficios from '../components/consultasOnline/sections/beneficios.vue';
    export default {
        components: {
            presentation,
            beneficios
        }
    }
</script>