<template>
    <section class="consulta-presencial-section modalidad-section bg-lines-blur">
        <div class="content px-6 py-10 px-lg-14 py-lg-14">
            <v-row dense no-gutters justify="space-between">
                <v-col lg="6">
                    <div class="icon-desc">
                        <v-row dense no-gutters justify="center" justify-lg="start" align="center" class="mb-sm-4 mb-lg-0">
                            <v-col cols="12" lg="auto" class="mb-lg-4">
                                <v-row dense no-gutters justify="center" justify-lg="start">
                                    <v-col cols="12" sm="auto" align-self="center">
                                        <div class="icon-wrapper text-center mb-2 mb-sm-0 mr-2">
                                            <img class="pin" src="/img/consultas-2-icons/pin.svg"
                                                alt="Consulta Presencial Icon">
                                        </div>
                                    </v-col>
                                    <v-col cols="12" sm="auto" align-self="center">
                                        <h1
                                            class="section-title lh-normal text-capitalize text-center primary-font ml-lg-2">
                                            Consulta <span class="secondary-color">Presencial</span></h1>
                                    </v-col>
                                    <v-col v-if="!isDesktop()" cols="12" class="mb-2">
                                        <div class="leafs-img-wrapper text-center mt-2">
                                            <img class="leafs-img" src="/img/consulta-presencial-leafs.png"
                                                alt="Consulta Presencial Leafs">
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" lg="auto">
                                <v-row dense no-gutters class="mb-lg-8 mt-lg-2">
                                    <v-col lg="auto" v-if="isDesktop()">
                                        <div class="line-wrapper mt-1 mr-lg-2">
                                            <div class="line secondary rounded mx-auto"></div>
                                        </div>
                                    </v-col>
                                    <v-col>
                                        <div class="descriptions-wrapper text-center text-lg-left ml-lg-2">
                                            <p>Si vivís en <span
                                                    class="secondary-color font-weight-bold">Paraguay</span> podemos
                                                personalizar tu
                                                proceso en una consulta presencial con <span
                                                    class="secondary-color font-weight-bold">agenda
                                                    previa</span>.
                                                Aquí te recibo en un espacio cómodo para tu evaluación, entrevista y
                                                planificación de estrategias.
                                            </p>
                                            <p>En tu primera consulta de <span
                                                    class="secondary-color font-weight-bold">45 a 60 minutos</span>
                                                obtendrás evaluación, guía de inicio, lista de compras y menús con
                                                recetas.</p>
                                            <p>En cada control de <span class="secondary-color font-weight-bold">30
                                                    minutos</span> realizaremos
                                                ajustes y renovaremos con más recetas saludables.</p>
                                        </div>
                                        <div class="prices-wrapper">
                                            <v-row dense>
                                                <template v-for="(priceDetail, index) in preciosConsultas.presencial">
                                                    <v-col cols="12" sm="6">
                                                        <price-card :primary="(index % 2 == 0)" :data="priceDetail"
                                                            :customClasses="index !== preciosConsultas.presencial.lenth - 1 ? 
                                                            {
                                                                'ml-sm-2': true , 
                                                                'mb-2': true,
                                                                'mb-lg-2': (index !== preciosConsultas.presencial.length - 1),
                                                                'mb-lg-0': (index === preciosConsultas.presencial.length - 1),
                                                            } : {}">
                                                        </price-card>
                                                    </v-col>
                                                </template>
                                            </v-row>
                                        </div>
                                    </v-col>
                                </v-row>
                                <div class="actions-wrapper mt-2">
                                    <v-row dense no-gutters>
                                        <v-col class="mb-4 pr-lg-3" cols="12" lg="auto">
                                            <a target="_blank" :href="$store.getters.getAgendarConsultaWhatsAppLink(false)"
                                                class="d-flex justify-center align-center secondary white--text px-6 py-3 rounded-pill text-uppercase primary-font font-weight-medium elevation-5">
                                                <span class="mr-2">Agendar Consulta Presencial</span>
                                                <img src="/img/consultas-2-icons/pin-white.svg" alt="Button icon">
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
                        <img class="leafs-img" src="/img/consulta-presencial-leafs.png" alt="Consulta Presencial Leafs">
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
                presencial: [
                    {
                        title: '1 Persona',
                        details: [
                            {
                                name: 'Primera Consulta',
                                price: {
                                    guarani: '330.000',
                                    dolar: '48'
                                }
                            },
                            {
                                name: 'Controles',
                                price: {
                                    guarani: '220.000',
                                    dolar: '32'
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
                                    guarani: '550.000',
                                    dolar: '80'
                                }
                            },
                            {
                                name: 'Controles',
                                price: {
                                    guarani: '330.000',
                                    dolar: '48'
                                }
                            },
                        ]
                    },
                    {
                        title: 'Promo - 3 Personas',
                        details: [
                            {
                                name: 'Primera Consulta',
                                price: {
                                    guarani: '660.000',
                                    dolar: '96'
                                }
                            },
                            {
                                name: 'Controles',
                                price: {
                                    guarani: '440.000',
                                    dolar: '64'
                                }
                            },
                        ]
                    },
                ],
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