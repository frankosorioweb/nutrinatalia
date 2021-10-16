<template>
  <article class="product-card">
    <v-card elevation="5" class="mx-auto rounded-lg">
      <v-img :src="this.type.posterSrc"></v-img>
      <v-card-title
        class="
          primary-font
          font-weight-bold
          secondary-color
          justify-center
          pb-2
        "
        ><h3 class="product-card-title">{{ this.type.name }}</h3>
      </v-card-title>
      <v-card-text class="secondary-font pb-4">
        <p class="mb-0 font-weight-bold">
          Son videos de aproximadamente 2 horas con el paso a paso de recetas
          saludables, deliciosas y fáciles de ejecutar.
        </p>
      </v-card-text>
      <div class="mx-4 pb-4">
        <v-btn color="primary" block>Ver todos los {{ this.type.name }}</v-btn>
      </div>
    </v-card>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: ['type'],
    computed: {
        ...mapGetters('productCard', ['getProductsTypes', 'getProductTypeText'])
    }
};
</script>