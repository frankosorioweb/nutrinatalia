<template>
  <v-container>
    <v-row>
      <v-col v-for="(product, index) in getProducts" :key="index" cols="12">
        <product-card :data="product"></product-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import productCard from "../productCard";
export default {
  components: {
    productCard,
  },
  computed: {
    ...mapGetters("products", ["getCustomProducts"]),
    ...mapGetters("productTypes", ["getProductsTypes"]),
    getProducts() {
      return this.getCustomProducts(this.$route.name);
    },
  },
};
</script>