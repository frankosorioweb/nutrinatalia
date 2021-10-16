<template>
  <article class="product-card">
    <v-card elevation="5" class="mx-auto rounded-lg">
      <v-img :src="this.poster"></v-img>
      <v-card-title
        class="
          primary-font
          font-weight-bold
          secondary-color
          justify-center
          pb-2
        "
        ><h3 class="product-card-title">{{ this.title }}</h3>
      </v-card-title>
      <v-card-text class="secondary-font pb-4">
        <p class="mb-0">{{ this.description }}</p>
      </v-card-text>
      <div class="mx-4 pb-4">
        <v-btn color="primary" block>Ver todos los {{ this.title }}</v-btn>
      </div>
    </v-card>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: ['poster', 'title', 'description'],
    computed: {
        ...mapGetters('productCard', ['getProductsTypes', 'getProductTypeText'])
    }
};
</script>