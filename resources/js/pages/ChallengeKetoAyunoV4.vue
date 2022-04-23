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
import sectionPresentation from "../components/challengeKetoAyunoV4/sections/presentation.vue";
import sectionMoreInfo from "../components/challengeKetoAyunoV4/sections/moreInfo.vue";
import sectionNotSuitable from "../components/challengeKetoAyunoV4/sections/notSuitable.vue";
import sectionChallengeDuration from "../components/challengeKetoAyunoV4/sections/challengeDuration.vue";
import sectionInscription from "../components/challengeKetoAyunoV4/sections/inscription.vue";
import appFooter from "../components/challengeKetoAyunoV4/footer.vue";
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