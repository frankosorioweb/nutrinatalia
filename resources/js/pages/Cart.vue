<template>
  <v-main class="mt-14 cart-page">
    <v-container class="px-5 py-8">
      <v-row no-gutters>
        <v-col cols="12" lg="5">
          <stepper />
          <payment />
        </v-col>
        <v-col cols="12" lg="7">
          <product-card-responsive :data="getProduct" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import stepper from "../components/cart/Payment/Stepper.vue";
import payment from "../components/cart/Payment/";
import productCardResponsive from "../components/productCard/responsive.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    stepper,
    payment,
    productCardResponsive,
  },
  computed: {
    ...mapGetters("products", ["getProductFromShortName"]),
    getProduct() {
      const params = this.$route.params;
      return this.getProductFromShortName(params.type, params.shortName);
    },
  },
};
</script>