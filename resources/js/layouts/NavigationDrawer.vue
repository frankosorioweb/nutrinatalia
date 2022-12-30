<template>
  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list nav>
      <v-list-item-group color="primary" mandatory>
        <v-list-item :to="{name: 'home'}" exact>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: this.types.WORKSHOP}" exact>
          <v-list-item-icon>
            <v-icon>mdi-school</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Talleres</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: this.types.EBOOK}" exact>
          <v-list-item-icon>
            <v-icon>mdi-bookshelf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ebooks</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: this.types.EXTRA}" exact>
          <v-list-item-icon>
            <v-icon>mdi-download</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Descargables</v-list-item-title>
        </v-list-item>

        <v-list-item  :to="{name: 'online-consultations'}">
          <v-list-item-icon>
            <v-icon>mdi-notebook-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Consultas</v-list-item-title>
        </v-list-item>

        <v-list-item :to="{name: 'support'}">
          <v-list-item-icon>
            <v-icon>mdi-face-agent</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Soporte</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.navigationDrawer.drawer;
      },
      set(value) {
        this.$store.commit("navigationDrawer/changeDrawerState", value);
      },
    },
    group: {
      get() {
        return this.$store.state.navigationDrawer.group;
      },
      set(value) {
        this.$store.commit("navigationDrawer/changeGroupState", value);
      },
    },
    ...mapState('productTypes', ['types'])
  },
};
</script>