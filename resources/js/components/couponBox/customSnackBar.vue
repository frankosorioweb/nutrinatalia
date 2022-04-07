<template>
  <v-snackbar color="primary" class="pb-0" v-model="snackBar">
    {{ $store.state.coupon.snackBarText }}
    <template v-slot:action="{ attrs }">
      <v-btn color="secondary" text v-bind="attrs" @click="snackBar = false">
        Cerrar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackBar: {
      get() {
        return this.$store.state.coupon.snackBar;
      },
      set(value) {
        this.$store.commit("coupon/setSnackBarState", value);
      },
    },
  },
  destroyed() {
    this.$store.commit("coupon/resetSnackBar");
  },
};
</script>