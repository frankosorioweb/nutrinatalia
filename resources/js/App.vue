<template>
  <v-app app>
    <banner-challenge v-if="!$store.getters.isChallengeRoute(this) && getInscriptionState" />
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