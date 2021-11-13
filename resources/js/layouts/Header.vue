<template>
  <v-app-bar class="app-header" color="grey lighten-5" fixed height="56">
    <img @click="goToHome" class="logo c-pointer" src="/img/logo.svg" />

    <v-spacer></v-spacer>

    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click="openDrawer()"
    ></v-app-bar-nav-icon>

    <nav v-if="!$vuetify.breakpoint.mobile">
      <v-btn
        color="grey darken-2"
        class="text-capitalize"
        v-for="menuItem in menuList"
        :key="menuItem.name"
        :to="menuItem.to"
        text
        exact
      >
        <v-icon class="mr-1">{{ menuItem.icon }}</v-icon>
        {{ menuItem.name }}
      </v-btn>
    </nav>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    openDrawer() {
      this.$store.commit("navigationDrawer/changeDrawerState", !this.drawer);
    },
    goToHome() {
      if (this.$route.name !== "home") this.$router.push({ name: "home" });
    },
  },
  computed: {
    ...mapState("navigationDrawer", ["drawer"]),
    ...mapState("productTypes", ["types"]),
    menuList() {
      return [
        {
          name: "Talleres",
          icon: "mdi-school",
          to: { name: this.types.WORKSHOP },
        },
        {
          name: "Ebooks",
          icon: "mdi-bookshelf",
          to: { name: this.types.EBOOK },
        },
        {
          name: "Consultas",
          icon: "mdi-notebook-edit",
        },
        {
          name: "Soporte",
          icon: "mdi-face-agent",
        },
      ];
    },
  },
};
</script>