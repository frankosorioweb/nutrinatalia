<template>
  <div
    class="
      small-calendar
      d-inline-block
      black
      rounded
      primary-font
      lh-1
      py-2
      px-3
    "
    :class="smallClendarClass"
  >
    <v-row class="justify-center" :class="countDownClass" align="center">
      <v-col cols="auto pr-2" :class="textWrapperClass">
        <div class="text-center">
          <div class="primary-text mb-1">
            <span>{{ primaryText }}</span>
          </div>
          <div class="secondary-text">
            <span>{{ secondaryText }}</span>
          </div>
        </div>
      </v-col>
      <v-col cols="auto" :class="textWrapperColClass">
        <v-row class="text-center date pr-2">
          <v-col :cols="cols" class="pl-0 pr-1">
            <div
              class="
                square
                d-flex
                flex-column
                justify-center
                align-center
                px-2
                py-1
                rounded
              "
              :class="squareClass"
            >
              <span>{{ date ? date.day : days }}</span>
              <span v-if="countDown" class="time-info d-inline-block mt-1 px-1"
                >DÍAS</span
              >
            </div>
          </v-col>
          <v-col :cols="cols" class="pl-0 pr-1">
            <div
              class="
                square
                d-flex
                flex-column
                justify-center
                align-center
                px-2
                py-1
                rounded
              "
              :class="squareClass"
            >
              <template v-if="date">
                <span>{{ date.month[0] }}</span>
                <span>{{ date.month[1] }}</span>
              </template>
              <template v-else>
                <span>{{ hours }}</span>
                <span class="time-info d-inline-block mt-1 px-1">HORAS</span>
              </template>
            </div>
          </v-col>
          <v-col :cols="cols" class="pl-0 pr-1">
            <div
              class="
                square
                d-flex
                flex-column
                justify-center
                align-center
                px-2
                py-1
                rounded
              "
              :class="squareClass"
            >
              <template v-if="date">
                <span>{{ date.year[0] }}</span>
                <span>{{ date.year[1] }}</span>
              </template>
              <template v-else>
                <span>{{ minutes }}</span>
                <span class="time-info d-inline-block mt-1 px-1">MINUTOS</span>
              </template>
            </div>
          </v-col>
          <v-col v-if="countDown" :cols="cols" class="pl-0 pr-1">
            <div
              class="
                square
                d-flex
                flex-column
                justify-center
                align-center
                px-2
                py-1
                rounded
              "
            >
              <span>{{ seconds }}</span>
              <span class="time-info d-inline-block mt-1 px-1">SEGUNDOS</span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["red", "primaryText", "secondaryText", "date", "countDown"],
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
      cols: this.countDown ? 3 : 4,
      countDownClass: {
        "flex-column": !_.isEmpty(this.countDown),
        "flex-sm-row": !_.isEmpty(this.countDown),
      },
      textWrapperClass: {
        "pb-0": !_.isEmpty(this.countDown),
        "pb-sm-3": !_.isEmpty(this.countDown),
      },
      textWrapperColClass: {
        "ml-3": !_.isEmpty(this.countDown),
        "ml-sm-0": !_.isEmpty(this.countDown),
      },
      smallClendarClass: {
        "count-down": !_.isEmpty(this.countDown),
      },
      squareClass: {
        "red darken-4": this.red,
      },
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
      const end = new Date(
        this.countDown.year,
        this.countDown.month,
        this.countDown.day
      );
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
    if(this.countDown) {
      this.showRemaining();
    }
  },
  mounted() {
    if(this.countDown) {
      const timer = setInterval(() => {
        this.showRemaining(timer);
      }, 1000);
    }
  },
};
</script>