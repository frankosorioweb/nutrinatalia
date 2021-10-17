<template>
  <section class="gradient-bg text-center py-6 px-3">
    <h2 class="primary-font font-weight-bold mb-3 grey--text text--lighten-5">
      Testimonios
    </h2>
    <p class="grey--text text--lighten-5 mb-0">
      Comparto <span class="grey--text text--darken-4">contigo</span> los
      <span class="grey--text text--darken-4">comentarios</span> de mis alumnos.
    </p>
    <v-container>
      <v-row class="flex-nowrap overflow-x-auto">
        <v-col cols="12">
          <testimony></testimony>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import testimony from './Testimony.vue';
export default {
  components: {
    testimony
  }
};
</script>