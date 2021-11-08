<template>
  <article class="white elevation-5 rounded-lg mt-6 product-card-responsive">
    <a>
      <v-img :aspect-ratio="16 / 9" src="/img/posters/Spaghetti.jpg">
        <template v-slot:placeholder>
          <v-sheet class="skeleton-loader-sheet">
            <v-skeleton-loader class="skeleton-loader" type="image" />
          </v-sheet>
        </template>
      </v-img>
      <h2
        class="
          secondary-color
          primary-font
          h3
          product-name
          text-center
          px-4
          pt-4
          pb-2
        "
      >
        Dulces que nos hacen bien bien
      </h2>
      <p
        class="px-4 pb-4 mb-0 text-center description grey--text text--darken-1"
      >
        Aprende a ejecutar recetas de postres dulces saludables, sin azúcar y
        sin harinas, con pocos pasos, ingredientes sencillos y súper deliciosos
      </p>
    </a>
    <footer class="grey lighten-4 pa-4">
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="auto">
          <label-type type="Taller"></label-type>
        </v-col>
        <v-col cols="auto">
          <p class="mb-0 font-weight-bold primary-font primary-color">
            <span
              class="red--text text-decoration-line-through"
              >36</span
            >
            13.9 USD
          </p>
        </v-col>
      </v-row>
    </footer>
  </article>
</template>

<script>
import labelType from "../productCard/labelType.vue";
export default {
  components: {
    labelType,
  },
};
</script>