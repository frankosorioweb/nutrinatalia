<template>
  <v-container>
    <v-row>
      <v-col v-for="product in getProducts" :key="product.name" cols="12">
        <product-card :cardTo="getDetailsTo(product)" :data="product" :removeCTA="true"></product-card>
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
    ...mapGetters("products", ["getCustomProducts", "getDetailsTo"]),
    ...mapGetters("productTypes", ["getProductsTypes"]),
    getProducts() {
      return this.getCustomProducts(this.$route.name);
    },
  },
};
</script>