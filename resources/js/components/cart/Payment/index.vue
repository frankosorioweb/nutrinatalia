<template>
  <article class="payment-card white elevation-5 rounded-lg">
    <header class="header pa-4">
      <component v-model="moneyType" :is="getStepComponent.header"></component>
    </header>
    <div class="body pa-4">
      <component :moneyType="moneyType" :is="getStepComponent.body"></component>
    </div>
  </article>
</template>

<script>
import headerPaymentMethod from "./header/paymentMethod.vue";
import bodyPaymentMethod from "./body/paymentMethod.vue";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      moneyType: "USD",
      stepComponents: {
        1: {
          header: "headerPaymentMethod",
          body: "bodyPaymentMethod"
        }
      }
    };
  },
  computed: {
    ...mapGetters('stepper', ['getStep']),
    getStepComponent() {
      return {
        header: this.stepComponents[this.getStep].header,
        body: this.stepComponents[this.getStep].body,
      };
    },
  },
  components: {
    headerPaymentMethod,
    bodyPaymentMethod,
  },
};
</script>