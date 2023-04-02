<template>
  <section class="presentation-section">
    <div class="presentation-wrapper content px-6 py-10 px-lg-14 py-lg-14">
      <div class="py-lg-4">
        <v-row dense justify-lg="space-between">
          <v-col cols="12" lg="7">
            <div v-if="isDesktop()" v-html="getLicNutricion()"></div>
            <h1 class="section-title text-capitalize primary-font text-center lh-normal text-lg-left">La <span
                class="secondary-color">oportunidad</span> de ajustar tu proceso de forma <span
                class="secondary-color">personalizada</span> y alcanzar tus metas de <span class="secondary-color">
                salud</span></h1>
            <beneficios v-if="isDesktop()" />
            <!-- <modalidades v-if="isDesktop()" /> -->
          </v-col>
          <v-col cols="12" lg="auto">
            <div class="foto-frontal px-5 my-6 px-lg-0 my-lg-0 text-center">
              <img class="foto-frontal-img" src="/img/foto-frontal-consultas-2-min.png" alt="Foto frontal">
            </div>
          </v-col>
        </v-row>
        <div v-if="!isDesktop()" class="presentation-lic-wrapper" v-html="getLicNutricion()">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import beneficios from './beneficios.vue';
import modalidades from './modalidades.vue';
export default {
  components: {
    beneficios,
    modalidades
  },
  methods: {
    getLicNutricion() {
      return `
        <p class="text-center `+(this.isDesktop() ? 'text-uppercase' : '')+` text-lg-left text-capitalize primary-font lh-normal font-weight-bold mb-0"><span class="primary-color">Lic. en
          Nutrición</span>`+(this.isDesktop() ? ' ' : '<br>')+`<span class="secondary-color">Natalia Chaparro Fox</span></p>
        `
    },
    isDesktop() {
      return this.$vuetify.breakpoint.lgAndUp;
    }
  },
}
</script>