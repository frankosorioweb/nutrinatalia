<template>
  <div>
    <product-type-select></product-type-select>
  </div>
</template>

<script>
import productTypeSelect from "../components/products/productTypeSelect.vue";
export default {
  props: ["type"],
  components: {
    productTypeSelect,
  },
};
</script>