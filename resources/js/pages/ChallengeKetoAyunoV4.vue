<template>
  <v-main class="challenge-page h-100 pt-14 lh-1">
    <section-presentation/>
    <section-more-info/>
    <section-not-suitable/>
  </v-main>
</template>

<script>
import sectionPresentation from "../components/challengeKetoAyunoV4/sections/presentation.vue";
import sectionMoreInfo from "../components/challengeKetoAyunoV4/sections/moreInfo.vue";
import sectionNotSuitable from "../components/challengeKetoAyunoV4/sections/notSuitable.vue";
export default {
  components: {
    sectionPresentation,
    sectionMoreInfo,
    sectionNotSuitable
  }
}
</script>