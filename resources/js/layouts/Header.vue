<template>
  <v-app-bar class="app-header" color="grey lighten-5" fixed height="56">
    <img class="logo" src="img/logo.svg" />

    <v-spacer></v-spacer>

    <v-app-bar-nav-icon @click="openDrawer()"></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    openDrawer() {
      this.$store.commit('navigationDrawer/changeDrawerState', !this.drawer)
    }
  },
  computed: {
    ...mapState('navigationDrawer', ['drawer'])
  },
};
</script>