<template>
    <section class="consulta-online-section modalidad-section bg-lines-blur">
        <div class="content px-6 py-10 px-lg-14 py-lg-14">
            <v-row dense no-gutters justify="space-between">
                <v-col lg="6">
                    <div class="icon-desc">
                        <v-row dense no-gutters justify="center" justify-lg="start" align="center"
                            class="mb-sm-4 mb-lg-0">
                            <v-col cols="12" lg="auto" class="mb-lg-4">
                                <v-row dense no-gutters justify="center" justify-lg="start">
                                    <v-col cols="12" sm="auto" align-self="center">
                                        <div class="icon-wrapper text-center mb-2 mb-sm-0 mr-2">
                                            <img class="notebook" src="/img/consultas-2-icons/notebook.svg"
                                                alt="Consulta Online Icon">
                                        </div>
                                    </v-col>
                                    <v-col cols="12" sm="auto" align-self="center">
                                        <h1
                                            class="section-title lh-normal text-capitalize text-center primary-font ml-lg-2">
                                            Consulta <span class="primary-color">Online</span></h1>
                                    </v-col>
                                    <v-col v-if="!isDesktop()" cols="12" class="mb-2">
                                        <div class="leafs-img-wrapper text-center mt-2">
                                            <img class="leafs-img" src="/img/consulta-online-leafs.png"
                                                alt="Consulta Online Leafs">
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" lg="auto">
                                <v-row dense no-gutters class="mb-lg-8 mt-lg-2">
                                    <v-col lg="auto" v-if="isDesktop()">
                                        <div class="line-wrapper mt-1 mr-lg-2">
                                            <div class="line primary rounded mx-auto"></div>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="descriptions-wrapper text-center text-lg-left ml-lg-2">
                                            <p>Viví la experiencia de la consulta online! Con agendamiento previo, nos
                                                conectamos desde
                                                donde estés
                                                por Meet o Zoom. Previamente <span
                                                    class="primary-color font-weight-bold">recibirás las
                                                    indicaciones</span> para registrar tu peso, medidas, y despegamos!.
                                            </p>
                                            <p>En tu primera consulta de <span class="primary-color font-weight-bold">45
                                                    a 60
                                                    minutos</span>
                                                obtendrás evaluación, guía de inicio, lista de compras y menús con
                                                recetas.</p>
                                            <p>En cada control de <span class="primary-color font-weight-bold">30
                                                    minutos</span>
                                                realizaremos
                                                ajustes y renovaremos con más recetas saludables.</p>
                                        </div>
                                        <div class="prices-wrapper">
                                            <v-row dense>
                                                <template v-for="(priceDetail, index) in preciosConsultas.online">
                                                    <v-col cols="12" sm="6">
                                                        <price-card :primary="(index % 2 == 0)" :data="priceDetail"
                                                            :customClasses="index !== preciosConsultas.online.lenth - 1 ? { 'mb-2': true, 'mb-lg-0': true, 'ml-sm-2': true } : {}">
                                                        </price-card>
                                                    </v-col>
                                                </template>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                                <div class="actions-wrapper mt-2">
                                    <v-row dense no-gutters>
                                        <v-col class="mb-4 pr-lg-3" cols="12" lg="6">
                                            <a href="/img/consultas-2-guia-min.jpg" download="Guía de Consulta Online.jpg"
                                                class="d-flex justify-center align-center secondary white--text px-4 py-3 rounded-pill text-uppercase primary-font font-weight-medium elevation-5">
                                                <span class="mr-2">Descargar Guías</span>
                                                <img src="/img/consultas-2-icons/download-white.svg" alt="Button icon">
                                            </a>
                                        </v-col>
                                        <v-col cols="12" lg="6">
                                            <a target="_blank" :href="$store.getters.getAgendarConsultaWhatsAppLink(true)"
                                                class="d-flex justify-center align-center primary white--text px-4 py-3 rounded-pill text-uppercase primary-font font-weight-medium elevation-5">
                                                <span class="mr-2">Agendar Consulta Online</span>
                                                <img src="/img/consultas-2-icons/notebook-white.svg" alt="Button icon">
                                            </a>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
                <v-col v-if="isDesktop()" lg="auto">
                    <div class="leafs-img-wrapper text-center mb-4">
                        <img class="leafs-img" src="/img/consulta-online-leafs.png" alt="Consulta Online Leafs">
                    </div>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script>
import priceCard from './priceCard.vue';
export default {
    components: {
        priceCard
    },
    data() {
        return {
            preciosConsultas: {
                online: [
                    {
                        title: '1 Persona',
                        details: [
                            {
                                name: 'Primera Consulta',
                                price: {
                                    guarani: '250.000',
                                    dolar: '37'
                                }
                            },
                            {
                                name: 'Controles',
                                price: {
                                    guarani: '150.000',
                                    dolar: '22'
                                }
                            },
                        ]
                    },
                    {
                        title: 'Promo - Parejas',
                        details: [
                            {
                                name: 'Primera Consulta',
                                price: {
                                    guarani: '400.000',
                                    dolar: '59'
                                }
                            },
                            {
                                name: 'Controles',
                                price: {
                                    guarani: '280.000',
                                    dolar: '41'
                                }
                            },
                        ]
                    },
                ],
                presencial: {

                }
            }
        }
    },
    methods: {
        isDesktop() {
            return this.$vuetify.breakpoint.lgAndUp;
        },
    },
}
</script>