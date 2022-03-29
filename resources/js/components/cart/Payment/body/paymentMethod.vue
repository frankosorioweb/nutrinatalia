<template>
  <ul class="list pl-0">
    <li
      v-for="payment in payments[getMoneyType]"
      :key="payment.name"
      class="pa-4 grey lighten-4 rounded mb-4 c-pointer"
      @click="onSelectPaymentMethod(payment)"
    >
      <v-row align="center">
        <v-col>
          <span class="grey--text text--darken-1">{{ payment.name }}</span>
        </v-col>
        <v-col cols="auto">
          <img
            class="payment-logo ml-auto d-inline-block rounded"
            :src="payment.logo"
            :alt="payment.name"
          />
        </v-col>
      </v-row>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      payments: {
        USD: [
          {
            name: "Western Union",
            logo: "/img/payments/Western-Union.png",
            transferData: [
              {
                field: "País",
                value: "Paraguay",
              },
              {
                field: "Cédula de identidad",
                value: "3408455",
              },
              {
                field: "Nombres y Apellidos",
                value: "Natalia Maria Chaparro Fox",
              },
            ],
          },
        ],
        GS: [
          {
            name: "Depósito bancario",
            logo: "/img/payments/Itau.png",
            transferData: [
              {
                field: "Cuenta Corriente",
                value: "100075636",
              },
              {
                field: "Banco",
                value: "Itaú",
              },
              {
                field: "Nombres y Apellidos",
                value: "Natalia Maria Chaparro Fox",
              },
              {
                field: "Cédula de identidad",
                value: "3408455",
              },
            ],
          },
          {
            name: "Giros Claro",
            logo: "/img/payments/Claro.svg",
            transferData: [
              {
                field: "Celular",
                value: "(0986) 576 - 037",
              },
              {
                field: "Comisión",
                value: "Se debe enviar +10% por comisión",
              },
            ],
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters('stepper', ['getPayment']),
    ...mapGetters('cart', ['getMoneyType']),
  },
  methods: {
    onSelectPaymentMethod(payment) {
      this.$store.commit('stepper/setPayment', payment);
      this.$store.commit('stepper/nextStep');
    }
  },
};
</script>