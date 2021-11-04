<template>
  <div class="stepper">
    <v-stepper class="rounded-lg" elevation="5" v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2"></v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"></v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <h1 class="main-title primary-font text-center lh-1 my-6">Elegí tu método de pago</h1>
  </div>
</template>

<script>
export default {
  computed: {
    step: {
      get() {
        return this.$store.state.stepper.step;
      }
    }
  },
}
</script>