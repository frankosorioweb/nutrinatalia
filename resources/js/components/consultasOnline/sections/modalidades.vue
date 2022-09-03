<template>
    <section class="secondary-section">
        <div class="content px-6 py-10 px-lg-0 py-lg-0">
            <template v-if="!isDesktop()">
                <h1 class="section-title lh-normal text-capitalize text-center primary-font mb-6">Elegí tu <span
                        class="secondary-color">modalidad</span> preferida</h1>
            </template>
            <template v-else>
                <h2 class="section-title presentation font-weight-bold text-uppercase lh-normal text-capitalize text-left primary-font primary-color mb-6">Elegí tu <span
                        class="secondary-color">modalidad</span> preferida</h2>
            </template>
            <div class="icon-desc-wrapper text-center">
                <v-row dense>
                    <template v-for="(modalidad, index) in modalidades">
                        <v-col cols="12" sm="6">
                            <div class="icon-desc" :class="index !== modalidades.length - 1 ? 'pb-5' : ''">
                                <v-row dense no-gutters>
                                    <v-col cols="12" lg="auto">
                                        <div class="icon-wrapper mb-4">
                                            <img :class="modalidad.iconClass" :src="'/img/consultas-2-icons/' + modalidad.icon"
                                                alt="icono-modalidad">
                                        </div>
                                    </v-col>
                                    <v-col class="text-lg-left ml-lg-5">
                                        <div class="title-wrapper">
                                            <template v-if="isDesktop()">
                                                <h3 class="icon-desc-title primary-font font-weight-bold mb-0">{{ modalidad.title }}</h3>
                                            </template>
                                            <template v-else>
                                                <h2 class="icon-desc-title primary-font font-weight-bold mb-0">{{ modalidad.title }}</h2>
                                            </template>
                                        </div>
                                        <div class="icon-desc-description-wrapper">
                                            <p class="icon-desc-description mb-0">{{ modalidad.description }}</p>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </template>
                </v-row>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            modalidades: [
                {
                    icon: 'notebook.svg',
                    iconClass: 'notebook',
                    title: 'Consulta Online',
                    description: 'Con una guía previa para pesarte y medirte, nos conectamos.'
                },
                {
                    icon: 'pin.svg',
                    iconClass: 'pin',
                    title: 'Consulta Presencial',
                    description: 'Te recibo en mi consultorio con agendamiento previo.'
                },
            ]
        }
    },
    methods: {
        isDesktop() {
            return this.$vuetify.breakpoint.lg;
        }
    },
}
</script>