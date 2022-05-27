<template>
  <div>
    <v-main class="challenge-page h-100 lh-1" :class="{'pb-auto-and-responsive': $store.getters['events/getInscriptionState']}">
      <section-presentation/>
      <section-more-info/>
      <section-not-suitable/>
      <section-challenge-duration/>
      <section-lessons/>
      <section-inscription/>
    </v-main>
    <app-footer v-if="$store.getters['events/getInscriptionState']"/>
  </div>
</template>

<script>
import sectionPresentation from "../components/challengeKetoAyuno/sections/presentation.vue";
import sectionMoreInfo from "../components/challengeKetoAyuno/sections/moreInfo.vue";
import sectionNotSuitable from "../components/challengeKetoAyuno/sections/notSuitable.vue";
import sectionChallengeDuration from "../components/challengeKetoAyuno/sections/challengeDuration.vue";
import sectionLessons from "../components/challengeKetoAyuno/sections/lessons.vue";
import sectionInscription from "../components/challengeKetoAyuno/sections/inscription.vue";
import appFooter from "../components/challengeKetoAyuno/footer.vue";
export default {
  components: {
    sectionPresentation,
    sectionMoreInfo,
    sectionNotSuitable,
    sectionChallengeDuration,
    sectionLessons,
    sectionInscription,
    appFooter
  },
}
</script>