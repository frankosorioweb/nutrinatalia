<template>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="primary white--text">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-school</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Talleres</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bookshelf</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Ebooks</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-notebook-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Consultas</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi-face-agent" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Soporte</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>WhatsApp</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Correo</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.navigationDrawer.drawer;
      },
      set(value) {
        this.$store.commit('navigationDrawer/changeDrawerState', value)
      }
    },
    group: {
      get() {
        return this.$store.state.navigationDrawer.group;
      },
      set(value) {
        this.$store.commit('navigationDrawer/changeGroupState', value)
      }
    }
  },
};
</script>