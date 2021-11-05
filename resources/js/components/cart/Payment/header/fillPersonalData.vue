<template>
  <v-row no-gutters align="center" justify="center">
    <v-col cols="auto mr-1">
      <v-btn icon @click="$store.commit('stepper/previousStep')">
        <v-icon large>mdi-chevron-left</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="auto">
      <p class="primary-font font-weight-bold d-inline-block mb-0">
        Completa tus datos
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>