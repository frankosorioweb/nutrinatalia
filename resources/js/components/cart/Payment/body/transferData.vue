<template>
  <div class="transfer-step">
    <div class="steps mb-2">
      <p
        class="
          primary-title
          mb-1
          primary-font
          font-weight-bold
          primary-color
          text-center
        "
      >
        Pasos
      </p>
      <ol class="grey--text text--darken-1">
        <li>
          Realizá la transferencia correspondiente según los datos que se
          presentan a continuación.
        </li>
        <li>
          Presiona en el botón “Continuar” para enviar el comprobante de la
          transferencia.
        </li>
      </ol>
    </div>
    <div class="transfer-data mb-4">
      <p
        class="
          primary-title
          mb-1
          primary-font
          font-weight-bold
          primary-color
          text-center
        "
      >
        Datos para la transferencia
      </p>
      <ul class="grey--text text--darken-1">
        <li v-for="item in getPayment.transferData" :key="item.field">
          <span class="grey--text text--darken-4 font-weight-bold"
            >{{ item.field }}:
          </span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <v-btn @click="$store.commit('stepper/nextStep')" color="primary" block>Continuar</v-btn>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("stepper", ["getPayment"]),
  },
};
</script>