<template>
  <v-banner ref="banner" class="banner-challenge text-center" app elevation="3">
    <router-link :to="{ name: 'challenge-15-dias-keto-ayuno' }">
      <img class="hero" src="/img/landing-reto/banner.jpg" alt="Hero" />
      <div class="hero-gradient gradient-bg-secondary"></div>
      <div class="content white--text">
        <v-row no-gutters>
          <v-col cols="12" class="mb-2">
            <p class="mb-0 event-name font-weight-bold primary-font">
              <span class="primary-color">Reto</span>
              15 Días Keto + Ayuno
              <span class="primary-color">Versión 4.0</span>
            </p>
          </v-col>
          <v-col cols="12" class="mb-2">
            <small-calendar
              primaryText="Las inscripciones cierran en:"
              secondaryText="(o hasta llenar el cupo)"
              :countDown="getChallengeKetoAyunoV4Event.inscriptionEndDate"
            />
          </v-col>
          <v-col cols="12">
            <router-link
              :to="{ name: 'challenge-15-dias-keto-ayuno' }"
              class="font-weight-bold primary-font"
              >Click <span class="white--text">aquí</span> para más información</router-link
            >
          </v-col>
        </v-row>
      </div>
    </router-link>

    <v-btn
      class="btn-close-banner"
      color="secondary"
      x-small
      @click="$refs.banner.toggle()"
      fab
    >
      <v-icon> mdi-close </v-icon>
    </v-btn>
  </v-banner>
</template>

<script>
import { mapGetters } from 'vuex';
import smallCalendar from "../components/challengeKetoAyuno/smallCalendar.vue";
export default {
  components: {
    smallCalendar,
  },
  computed: {
    ...mapGetters('events', ['getChallengeKetoAyunoV4Event'])
  },
};
</script>