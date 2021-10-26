<template>
  <div>
    <app-header></app-header>
    <app-navigation-drawer></app-navigation-drawer>
    <v-main class="mt-14 mb-footer">
      <product-type-select></product-type-select>
    </v-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../layouts/Header.vue";
import appNavigationDrawer from "../layouts/NavigationDrawer.vue";
import appFooter from "../layouts/Footer.vue";
import productTypeSelect from '../components/products/productTypeSelect.vue';
export default {
  props: ["type"],
  components: {
    appHeader,
    appNavigationDrawer,
    appFooter,
    productTypeSelect
  },
};
</script>