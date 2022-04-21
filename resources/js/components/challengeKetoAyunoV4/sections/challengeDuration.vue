<template>
  <section class="section-challenge-duration pa-4 pa-lg-14">
    <v-row>
      <v-col cols="12" md="6">
        <div class="content">
          <div
            class="img small-content rounded-lg"
            style="background-image: url('/img/landing-reto/pesaje.jpg')"
          ></div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content text-center text-md-left">
          <h2 class="main-title primary-font mb-8">
            ¿Cuando inicia el <span class="secondary-color">reto</span>?
          </h2>
          <div class="dates-wrapper white--text">
            <div class="date d-inline-block mb-5">
              <small-calendar
                primaryText="El reto inicia el:"
                secondaryText="DOMINGO"
                :date="{
                  day: '08',
                  month: ['MA', 'YO'],
                  year: ['20', '22'],
                }"
              />
            </div>
            <div class="date d-inline-block">
              <small-calendar
                primaryText="El reto finaliza el:"
                secondaryText="DOMINGO"
                :date="{
                  day: '22',
                  month: ['MA', 'YO'],
                  year: ['20', '22'],
                }"
              />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import smallCalendar from "../smallCalendar.vue";
export default {
  components: {
    smallCalendar,
  },
};
</script>