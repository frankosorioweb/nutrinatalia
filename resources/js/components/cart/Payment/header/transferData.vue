<template>
  <v-row no-gutters align="center">
    <v-col cols="auto mr-1">
      <v-btn icon @click="$store.commit('stepper/previousStep')">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <p class="primary-font font-weight-bold d-inline-block mb-0">
        {{ getPayment.name }}
      </p>
    </v-col>
    <v-col cols="auto ml-auto">
      <img class="payment-logo rounded" :src="getPayment.logo" alt="bandera" />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('stepper', ['getPayment'])
  },
};
</script>