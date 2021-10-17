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
        <v-col v-for="(testimony, index) in getTestimonials" :key="index" cols="12">
          <testimony 
            :avatar="testimony.avatar"
            :name="testimony.name"
            :text="testimony.text"
            :socialMedia="testimony.socialMedia"
          ></testimony>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import testimony from './Testimony.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    testimony
  },
  computed: {
    ...mapGetters(['getTestimonials'])
  }
};
</script>