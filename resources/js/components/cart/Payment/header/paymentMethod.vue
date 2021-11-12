<template>
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
          <!--<v-select
            hide-details
            class="money-type pa-0 ma-0"
            :items="['USD', 'GS']"
            v-model="moneyTypeSelect"
          >-->
          <v-select
            hide-details
            class="money-type pa-0 ma-0"
            :items="getMoneyTypes"
            v-model="moneyTypeSelect"
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
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('cart', ['getMoneyType', 'getMoneyTypes']),
    getFlagSrc() {
      const flagsSrc = "/img/flags/";
      const result = `${flagsSrc}${this.getMoneyType === "USD" ? "world.svg" : "py.svg"}`;
      return result;
    },
    moneyTypeSelect: {
      get() {
        return this.getMoneyType;
      },
      set(value) {
        this.$store.commit('cart/setMoneyType', value)
      }
    }
  },
};
</script>