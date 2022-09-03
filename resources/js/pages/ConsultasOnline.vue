<template>
    <v-main class="consultas-online-2">
        <presentation />
        <beneficios v-if="!isDesktop()"/>
        <modalidades v-if="!isDesktop()"/>
        <consulta-online />
        <consulta-presencial />
    </v-main>
</template>

<script>
import presentation from '../components/consultasOnline/sections/presentation.vue';
import beneficios from '../components/consultasOnline/sections/beneficios.vue';
import modalidades from '../components/consultasOnline/sections/modalidades.vue';
import consultaOnline from '../components/consultasOnline/sections/consultaOnline.vue';
import consultaPresencial from '../components/consultasOnline/sections/consultaPresencial.vue';
import ConsultaPresencial from '../components/consultasOnline/sections/consultaPresencial.vue';

export default {
    components: {
        presentation,
        beneficios,
        modalidades,
        consultaOnline,
        consultaPresencial,
        ConsultaPresencial
    },
    methods: {
        isDesktop() {
            return this.$vuetify.breakpoint.lg;
        }
    },
}
</script>