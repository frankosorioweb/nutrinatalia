<template>
  <v-main class="mt-14 cart-page">
    <v-container class="px-5 py-8">
      <stepper />
      <payment />
      <product-card-responsive />
    </v-container>
  </v-main>
</template>

<script>
import stepper from "../components/cart/Payment/Stepper.vue";
import payment from "../components/cart/Payment/";
import productCardResponsive from "../components/productCard/responsive.vue";
export default {
  components: {
    stepper,
    payment,
    productCardResponsive
  },
};
</script>SteppeStepperr