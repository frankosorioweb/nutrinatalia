<template>
    <v-main class="consultas-online-2">
        <presentation />
        <beneficios v-if="!isDesktop()"/>
        <modalidades @showConsultaSection="showConsultaSection"/>
        <consulta-online ref="sectionConsultaOnline" v-show="showConsultaOnline" />
        <consulta-presencial ref="sectionConsultaPresencial" v-show="showConsultaPresencial" />
    </v-main>
</template>

<script>
import presentation from '../components/consultasOnline/sections/presentation.vue';
import beneficios from '../components/consultasOnline/sections/beneficios.vue';
import modalidades from '../components/consultasOnline/sections/modalidades.vue';
import consultaOnline from '../components/consultasOnline/sections/consultaOnline.vue';
import consultaPresencial from '../components/consultasOnline/sections/consultaPresencial.vue';
import { nextTick } from 'process';

export default {
    data() {
        return {
            showConsultaOnline: false,
            showConsultaPresencial: false,
        }
    },
    components: {
        presentation,
        beneficios,
        modalidades,
        consultaOnline,
        consultaPresencial,
    },
    methods: {
        isDesktop() {
            return this.$vuetify.breakpoint.lgAndUp;
        },
        showConsultaSection(type) {
            this.showConsultaOnline = type;
            this.showConsultaPresencial = !type;
            this.$nextTick(() => {
                this.$vuetify.goTo(type ? this.$refs.sectionConsultaOnline : this.$refs.sectionConsultaPresencial);
            })
        }
    },
}
</script>