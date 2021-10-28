<template>
  <v-main class="mt-14 pt-3 px-3 mb-6 text-center">
    <product-type-select />
    <products-list />
  </v-main>
</template>

<script>
import productTypeSelect from "../components/products/productTypeSelect.vue";
import productsList from "../components/products/productsList.vue";
export default {
  props: ["type"],
  components: {
    productTypeSelect,
    productsList
  },
};
</script>