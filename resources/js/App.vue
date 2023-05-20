<template>
  <v-app app>
    <banner-challenge v-if="!$store.getters.isChallengeRoute(this) && getInscriptionState" />

    <!-- Banner de descuento aniversario -->
    <!-- <v-banner ref="banner" class="banner-aniversario-1 secondary-bg" app elevation="3">
      <div class="content text-center">
        <p class="mb-0 white--text">Utilizá el cupón <span class="font-weight-bold black--text">ANIVERSARIO1</span> para obtener <span class="primary-color font-weight-bold">20% de descuento</span></p>
        <p class="mb-0 white--text text-subtitle-2">Válido por el mes de Abril en los Talleres y Ebooks</p>
      </div>
    </v-banner> -->
    <!-- Fin Banner de descuento aniversario -->

    <app-header />
    <app-navigation-drawer />
    <router-view />
    <app-footer v-if="!$store.getters.isChallengeRoute(this)"/>
    <support-button />
  </v-app>
</template>

<script>
import appHeader from "./layouts/Header.vue";
import appNavigationDrawer from "./layouts/NavigationDrawer.vue";
import appFooter from "./layouts/Footer.vue";
import supportButton from './layouts/SupportButton.vue';
import bannerChallenge from './layouts/BannerChallengeKetoAyuno.vue'
import { mapGetters } from 'vuex';

export default {
  components: {
    appHeader,
    appNavigationDrawer,
    appFooter,
    supportButton,
    bannerChallenge
  },
  computed: {
    ...mapGetters('events', ['getInscriptionState'])
  },
};
</script>