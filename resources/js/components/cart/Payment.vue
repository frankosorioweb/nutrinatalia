<template>
  <article class="payment-card white elevation-5 rounded-lg">
    <header class="header pa-4">
      <v-row no-gutters align="center">
        <v-col cols="auto">
          <p class="primary-font font-weight-bold d-inline-block mb-0">
            Métodos de pago en
          </p>
        </v-col>
        <v-col cols="auto ml-auto">
          <v-row no-gutters align="center">
            <v-col cols="auto mr-2">
              <img :src="getFlagSrc" alt="bandera" />
            </v-col>
            <v-col cols="auto">
              <v-select
                hide-details
                class="money-type pa-0 ma-0"
                :items="['USD', 'GS']"
                v-model="moneyType"
              >
                <template v-slot:item="{ item, attrs, on }">
                  <v-list-item v-bind="attrs" v-on="on">
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item>
                </template>
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </header>
    <div class="payment-body pa-4">
      <ul class="list pl-0">
        <li v-for="payment in payments[moneyType]" :key="payment.name" class="pa-4 grey lighten-4 rounded mb-4 c-pointer">
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
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      moneyType: "USD",
      payments: {
        USD: [
          {
            name: "Western Union",
            logo: "/img/payments/Western-Union.png",
          },
        ],
        GS: [
          {
            name: "Depósito bancario",
            logo: "/img/payments/Itau.png",
          },
          {
            name: "Giros Claro",
            logo: "/img/payments/Claro.svg",
          },
        ],
      },
    };
  },
  computed: {
    getFlagSrc() {
      const flagsSrc = "/img/flags/";
      const result = `${flagsSrc}${
        this.moneyType === "USD" ? "world.svg" : "py.svg"
      }`;
      return result;
    },
  },
};
</script>