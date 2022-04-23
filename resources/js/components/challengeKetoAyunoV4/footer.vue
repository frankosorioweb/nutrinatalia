<template>
  <v-footer
    class="challenge-footer white--text justify-center"
    fixed
    app
  >
    <img class="hero" src="/img/landing-reto/banner.jpg" alt="Hero" />
    <div class="hero-gradient gradient-bg-secondary"></div>
    <div class="content py-3">
      <small-calendar
        primaryText="Las inscripciones cierran en:"
        secondaryText="(o hasta llenar el cupo)"
        :countDown="{
          year: 2022,
          month: 4,
          day: 5,
        }"
      />
      <div class="cta text-center pt-3">
        <v-btn
          href="#section-inscription"
          @click="$vuetify.goTo('#section-inscription')"
          color="error"
          >¡RESERVAR MI LUGAR!</v-btn
        >
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