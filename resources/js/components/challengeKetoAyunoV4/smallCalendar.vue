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
    <v-row
      class="justify-center"
      :class="countDownClass"
      align="center"
    >
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
              <span>{{ date ? date.day : countDown.days }}</span>
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
                <span>{{ countDown.hours }}</span>
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
                <span>{{ countDown.minutes }}</span>
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
              <span>{{ countDown.seconds }}</span>
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
      cols: this.countDown ? 3 : 4,
      countDownClass: {
        'flex-column': !_.isEmpty(this.countDown),
        'flex-sm-row': !_.isEmpty(this.countDown),
      },
      textWrapperClass: {
        'pb-0': !_.isEmpty(this.countDown),
        'pb-sm-3': !_.isEmpty(this.countDown),
      },
      textWrapperColClass: {
        'ml-3': !_.isEmpty(this.countDown),
        'ml-sm-0': !_.isEmpty(this.countDown),
      },
      smallClendarClass: {
        'count-down': !_.isEmpty(this.countDown),
      },
      squareClass: {
        'red darken-4': this.red
      }
    };
  },
};
</script>