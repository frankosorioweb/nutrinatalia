<template>
  <v-banner ref="banner" class="banner-challenge text-center" app elevation="3">
    <router-link to="/ebooks/e-book-dulces-saludables">
      <img class="hero" src="/img/landing-reto/banner.jpg" alt="Hero" />
      <div class="hero-gradient gradient-bg-secondary"></div>
      <div class="content white--text">
        <v-row no-gutters>
          <v-col cols="12" class="mb-2">
            <p class="mb-0 event-name font-weight-bold primary-font">
              <span class="primary-color">NUEVO</span>
              E-BOOK CON
              <span class="primary-color">+60 RECETAS</span>
              DE DULCES SALUDABLES
            </p>
            <p class="mb-0 event-name font-weight-bold primary-font">
              A <span class="primary-color">PRECIO</span> DE
              <span class="primary-color">LANZAMIENTO</span>
            </p>
          </v-col>
          <v-col cols="12" class="mb-2">
            <!-- Enero empieza en 0 -->
            <small-calendar
              primaryText="El precio de lanzamiento finaliza en:"
              secondaryText="(No lo dejes pasar)"
              :countDown="{year: 2023, month: 7, day: 6}"
            />
          </v-col>
          <v-col cols="12">
            <a class="font-weight-bold primary-font mb-0">Click <span class="white--text">aquí</span> para más información</a>
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