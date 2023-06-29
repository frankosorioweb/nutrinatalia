<template>
  <!-- <v-main class="pt-3 px-3 mb-6 text-center"> -->
  <v-main class="px-3 mb-6 text-center">
    <product-type-select />
    <workshops-info></workshops-info>
    <products-list />
  </v-main>
</template>

<script>
import productTypeSelect from "../components/products/productTypeSelect.vue";
import productsList from "../components/products/productsList.vue";
import workshopsInfo from "../components/products/workshopsInfo.vue";
export default {
  props: ["type"],
  components: {
    productTypeSelect,
    productsList,
    workshopsInfo
  },
};
</script>