<template>
  <v-main class="mt-14 cart-page">
    <v-container class="pa-5">
      <stepper />
      <payment />
    </v-container>
  </v-main>
</template>

<script>
import stepper from "../components/cart/Payment/Stepper.vue";
import payment from "../components/cart/Payment/";
export default {
  components: {
    stepper,
    payment
  },
};
</script>SteppeStepperr