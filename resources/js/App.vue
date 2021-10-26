<template>
  <v-app app>
    <app-header></app-header>
    <app-navigation-drawer></app-navigation-drawer>
    <v-main class="mt-14">
      <router-view></router-view>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import appHeader from "./layouts/Header.vue";
import appNavigationDrawer from "./layouts/NavigationDrawer.vue";
import appFooter from "./layouts/Footer.vue";

export default {
  components: {
    appHeader,
    appNavigationDrawer,
    appFooter,
  },
};
</script>