<template>
  <section class="text-center py-6 mx-3">
    <h2 class="mb-3 primary-font font-weight-bold">
      ¿Qué hay para <span class="primary-color">ti</span> en esta
      <span class="primary-color">academia</span>?
    </h2>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12">
          <product-card :type="true"></product-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import productCard from "../../layouts/ProductCard.vue";
export default {
  components: {
    productCard,
  },
};
</script>