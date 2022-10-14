<template>
    <section class="secondary-section bg-lines-blur">
        <div class="content px-6 py-10 px-lg-14 py-lg-14">
            <template v-if="!isDesktop()">
                <h1 class="section-title lh-normal text-capitalize text-center primary-font mb-6">Elegí tu <span
                        class="secondary-color">modalidad</span> preferida</h1>
            </template>
            <template v-else>
                <h2 class="section-title presentation font-weight-bold text-center lh-normal text-capitalize primary-font mb-6">Elegí tu <span
                        class="secondary-color">modalidad</span> preferida</h2>
            </template>
            <div class="icon-desc-wrapper text-center">
                <v-row justify="center" dense>
                    <template v-for="(modalidad, index) in modalidades">
                        <v-col cols="12" sm="6" class="px-2 mb-2 mb-sm-0">
                            <div class="icon-desc modalidad-card h-100 rounded-lg pa-4 mx-auto elevation-5" :class="index === 0 ? 'mr-sm-0' : 'ml-sm-0'">
                                <div class="d-flex flex-column h-100">
                                    <div class="column">
                                        <div class="icon-wrapper mb-4">
                                            <img :class="modalidad.iconClass" :src="'/img/consultas-2-icons/' + modalidad.icon"
                                                alt="icono-modalidad">
                                        </div>
                                    </div>
                                    <div class="column">
                                        <div class="title-wrapper">
                                            <template v-if="isDesktop()">
                                                <h3 class="icon-desc-title text-center primary-font font-weight-bold mb-0">{{ modalidad.title }}</h3>
                                            </template>
                                            <template v-else>
                                                <h2 class="icon-desc-title text-center primary-font font-weight-bold mb-0">{{ modalidad.title }}</h2>
                                            </template>
                                        </div>
                                        <div class="icon-desc-description-wrapper">
                                            <p class="icon-desc-description mb-0">{{ modalidad.description }}</p>
                                        </div>
                                    </div>
                                    <div class="column mt-auto">
                                        <v-btn @click="onBtnMoreInfoClick(index)" class="mt-2" block :color="index=== 0 ? 'primary' : 'secondary'">Más información</v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </template>
                </v-row>
                <p class="font-weight-bold mt-6 red--text">* Los agendamientos son con pago previo</p>
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
            return this.$vuetify.breakpoint.lgAndUp;
        },
        onBtnMoreInfoClick(index) {
            this.$emit('showConsultaSection', index === 0 ? true : false);
        }
    },
}
</script>