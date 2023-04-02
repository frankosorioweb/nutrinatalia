<template>
  <section class="section-challenge-duration px-5 py-8 pa-lg-14">
    <v-row>
      <v-col cols="12" md="6">
        <div class="content">
          <div
            class="img small-content rounded-lg elevation-5"
            style="background-image: url('/img/landing-reto/pesaje.jpg')"
          ></div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="content text-center">
          <h2 class="main-title primary-font mb-8">
            ¿Cuando inicia el <span class="secondary-color">reto</span>?
          </h2>
          <div class="dates-wrapper white--text">
            <div class="date mb-3">
              <small-calendar
                primaryText="El taller inicia el:"
                :secondaryText="getChallengeKetoAyunoV4Event.textDateInfo.startChallenge.dayName"
                :date="getChallengeKetoAyunoV4Event.textDateInfo.startChallenge"
              />
            </div>
            <div class="date mb-3">
              <small-calendar
                primaryText="El taller finaliza el:"
                :secondaryText="getChallengeKetoAyunoV4Event.textDateInfo.endChallenge.dayName"
                :date="getChallengeKetoAyunoV4Event.textDateInfo.endChallenge"
              />
            </div>
            <div class="date mb-5">
              <small-calendar
                primaryText="Inscripciones hasta el:"
                :secondaryText="getChallengeKetoAyunoV4Event.textDateInfo.inscriptionEnd.dayName"
                :red="true"
                :date="getChallengeKetoAyunoV4Event.textDateInfo.inscriptionEnd"
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
import { mapGetters } from 'vuex';
export default {
  components: {
    smallCalendar,
  },
  computed: {
    ...mapGetters('events', ['getChallengeKetoAyunoV4Event'])
  }
};
</script>