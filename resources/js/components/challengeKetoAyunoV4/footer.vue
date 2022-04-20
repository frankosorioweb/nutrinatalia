<template>
  <v-footer
    class="challenge-footer white--text justify-center gradient-bg-secondary"
    fixed
    app
  >
    <div class="content py-3">
      <small-calendar />
      <div class="cta text-center pt-3">
        <v-btn color="error">¡RESERVAR MI LUGAR!</v-btn>
      </div>
    </div>
  </v-footer>
</template>

<script>
import smallCalendar from "./smallCalendar.vue";
export default {
  components: {
    smallCalendar,
  },
};
</script>