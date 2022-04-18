<template>
  <v-app app>
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

export default {
  components: {
    appHeader,
    appNavigationDrawer,
    appFooter,
    supportButton
  },
};
</script>