<template>
  <div>
    <app-header></app-header>
    <app-navigation-drawer></app-navigation-drawer>
    <v-main class="mt-14 mb-footer">
      <v-container>
        <v-row>
          <v-col cols="12">
            
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../layouts/Header.vue";
import appNavigationDrawer from "../layouts/NavigationDrawer.vue";
import appFooter from "../layouts/Footer.vue";
export default {
  props: ["type"],
  components: {
    appHeader,
    appNavigationDrawer,
    appFooter
  },
};
</script>