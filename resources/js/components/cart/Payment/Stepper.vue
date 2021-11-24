<template>
  <div class="stepper">
    <h1 class="main-title primary-font text-center lh-1 mb-6">
      {{ titles[step] }}
    </h1>
    <v-stepper class="rounded-lg mb-6" elevation="5" v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" :complete="step > 2"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"></v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: {
        1: "Elegí tu método de pago",
        2: "Realizá la transferencia",
        3: "Envía tu comprobante",
      },
    };
  },
  computed: {
    step: {
      get() {
        return this.$store.state.stepper.step;
      },
    },
  },
};
</script>