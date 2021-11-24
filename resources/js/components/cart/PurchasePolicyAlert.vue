<template>
  <v-col cols="12">
    <v-alert
      color="primary"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-information"
    >
      Al continuar, entendemos que estás de acuerdo con nuestra
      <strong>
        <a class="text-decoration-underline" @click="showPurchasePolicyDialog"
          >política de compra</a
        >
      </strong>
    </v-alert>
  </v-col>
</template>

<script>
export default {
  methods: {
    showPurchasePolicyDialog() {
      console.log("show dialog");
    },
  },
};
</script>