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
import headerTransferData from "./header/transferData.vue";
import bodyTransferData from "./body/transferData.vue";
import headerFillPersonalData from "./header/fillPersonalData.vue";
import bodyFillPersonalData from "./body/fillPersonalData.vue";
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      moneyType: "USD",
      stepComponents: {
        1: {
          header: "headerPaymentMethod",
          body: "bodyPaymentMethod"
        },
        2: {
          header: 'headerTransferData',
          body: 'bodyTransferData'
        },
        3: {
          header: 'headerFillPersonalData',
          body: 'bodyFillPersonalData'
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
    headerTransferData,
    bodyTransferData,
    headerFillPersonalData,
    bodyFillPersonalData,
  },
};
</script>