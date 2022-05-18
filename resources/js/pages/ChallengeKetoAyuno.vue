<template>
  <div>
    <v-main class="challenge-page h-100 lh-1">
      <section-presentation/>
      <section-more-info/>
      <section-not-suitable/>
      <section-challenge-duration/>
      <section-inscription/>
    </v-main>
    <app-footer/>
  </div>
</template>

<script>
import sectionPresentation from "../components/challengeKetoAyuno/sections/presentation.vue";
import sectionMoreInfo from "../components/challengeKetoAyuno/sections/moreInfo.vue";
import sectionNotSuitable from "../components/challengeKetoAyuno/sections/notSuitable.vue";
import sectionChallengeDuration from "../components/challengeKetoAyuno/sections/challengeDuration.vue";
import sectionInscription from "../components/challengeKetoAyuno/sections/inscription.vue";
import appFooter from "../components/challengeKetoAyuno/footer.vue";
export default {
  components: {
    sectionPresentation,
    sectionMoreInfo,
    sectionNotSuitable,
    sectionChallengeDuration,
    sectionInscription,
    appFooter
  },
}
</script>