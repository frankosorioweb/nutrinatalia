<template>
  <div>
    <product-type-select></product-type-select>
    <products-list></products-list>
  </div>
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