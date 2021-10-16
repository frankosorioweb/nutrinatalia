<template>
  <section class="text-center py-6 mx-3">
    <h2 class="mb-3 primary-font font-weight-bold">
      ¿Qué hay para <span class="primary-color">ti</span> en esta
      <span class="primary-color">academia</span>?
    </h2>
    <v-container>
      <v-row>
        <v-col cols="12">
          <product-card
            :title="getProductsTypes.WORKSHOP.name"
            :poster="getProductsTypes.WORKSHOP.posterSrc"
            :description="getProductsTypes.WORKSHOP.description"
          ></product-card>
        </v-col>
        <v-col cols="12">
          <product-card
            :title="getProductsTypes.EBOOK.name"
            :poster="getProductsTypes.EBOOK.posterSrc"
            :description="getProductsTypes.EBOOK.description"
          ></product-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import productCard from "../../layouts/ProductCard.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    productCard,
  },
  computed: {
    ...mapGetters('productCard', ['getProductsTypes'])
  }
};
</script>