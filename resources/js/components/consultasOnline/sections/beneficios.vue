<template>
    <section class="beneficios-section">
        <div class="content px-6 py-10 px-lg-0 pb-lg-0 pt-lg-12">
            <h1 v-if="!isDesktop()" class="section-title lh-normal text-capitalize text-center primary-font mb-4">Lo que <span
                    class="primary-color">obtendrás</span> en
                tu consulta con la <span class="primary-color">NutriNatalia</span></h1>
            <h2 v-else class="section-title presentation font-weight-bold text-uppercase lh-normal text-capitalize text-left primary-font primary-color mb-4">Lo que <span
                    class="secondary-color">obtendrás</span> en
                tu consulta con la <span class="secondary-color">NutriNatalia</span></h2>
            <div class="icon-desc-wrapper text-center py-4">
                <v-row dense>
                    <template v-for="(beneficio, index) in beneficios">
                        <v-col cols="12" sm="6">
                            <div class="icon-desc" :class="index !== beneficios.length - 1 ? 'pb-5' : ''">
                                <v-row dense no-gutters>
                                    <v-col cols="12" lg="auto">
                                        <div class="icon-wrapper mb-4">
                                            <img :class="beneficio.iconClass" :src="'/img/consultas-2-icons/' + beneficio.icon"
                                                alt="icono-beneficio">
                                        </div>
                                    </v-col>
                                    <v-col class="text-lg-left ml-lg-5">
                                        <div class="title-wrapper">
                                            <template v-if="isDesktop()">
                                                <h3 class="icon-desc-title primary-font font-weight-bold mb-0">{{ beneficio.title }}
                                                </h3>
                                            </template>
                                            <template v-else>
                                                <h2 class="icon-desc-title primary-font font-weight-bold mb-0">{{ beneficio.title }}
                                                </h2>
                                            </template>
                                        </div>
                                        <div class="icon-desc-description-wrapper">
                                            <p class="icon-desc-description mb-0">{{ beneficio.description }}</p>
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
            beneficios: [
                {
                    icon: 'heart.svg',
                    iconClass: 'heart',
                    title: 'Reconectarte con Tu Cuerpo',
                    description: 'Descubriremos tu objetivo, tus “para que” y tu conexión diaria con ellas.'
                },
                {
                    icon: 'person.svg',
                    iconClass: 'person',
                    title: 'Recibir Ajustes Personalizados',
                    description: 'Sumando hábitos y suplementación según las señales de tu cuerpo.'
                },
                {
                    icon: 'cutlery.svg',
                    iconClass: 'cutlery',
                    title: 'Descubrir la Cocina Saludable',
                    description: 'A través de recetas prácticas y deliciosas, que incluiré en tu plan.'
                },
                {
                    icon: 'focus.svg',
                    iconClass: 'focus',
                    title: 'Reaprender sobre',
                    description: 'Metabolismo, a comprar saludable, leer etiquetas y más durante tu proceso.'
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