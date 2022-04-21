<template>
  <v-footer
    class="challenge-footer white--text justify-center gradient-bg-secondary"
    fixed
    app
  >
    <div class="content py-3">
      <small-calendar
        primaryText="El reto inicia en:"
        secondaryText="(cupos limitados)"
        :countDown="{
          days,
          hours,
          minutes,
          seconds,
        }"
      />
      <div class="cta text-center pt-3">
        <v-btn
          href="#section-inscription"
          @click="
            $vuetify.goTo('#section-inscription', {
              offset: 56,
            })
          "
          color="error"
          >¡RESERVAR MI LUGAR!</v-btn
        >
      </div>
    </div>
  </v-footer>
</template>

<script>
import * as easings from "vuetify/lib/services/goto/easing-patterns";
import smallCalendar from "./smallCalendar.vue";
export default {
  components: {
    smallCalendar,
  },
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    },
  },
  methods: {
    formatNum: (num) => (num < 10 ? `0${num}` : num),
    showRemaining(timer) {
      const now = new Date();
      const end = new Date(2022, 4, 8);
      const distance = end.getTime() - now.getTime();

      if (distance < 0) {
        this.days = this.formatNum(0);
        this.hours = this.formatNum(0);
        this.minutes = this.formatNum(0);
        this.seconds = this.formatNum(0);

        if (timer) {
          clearInterval(timer);
        }
        return;
      }

      const days = Math.floor(distance / this._days);
      const hours = Math.floor((distance % this._days) / this._hours);
      const minutes = Math.floor((distance % this._hours) / this._minutes);
      const seconds = Math.floor((distance % this._minutes) / this._seconds);

      this.days = this.formatNum(days);
      this.hours = this.formatNum(hours);
      this.minutes = this.formatNum(minutes);
      this.seconds = this.formatNum(seconds);
    },
  },
  created() {
    this.showRemaining();
  },
  mounted() {
    const timer = setInterval(() => {
      this.showRemaining(timer);
    }, 1000);
  },
};
</script>