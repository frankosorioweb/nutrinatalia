<template>
  <v-card class="lesson rounded-lg">
    <v-img height="250" :src="lesson.poster"></v-img>
    <v-card-title
      class="
        lesson-title
        justify-center
        text-center
        lh-normal
        word-break
        primary-color primary-font
        font-weight-bold
        py-4
      "
      >{{ lesson.title }}</v-card-title
    >
    <v-card-text>
      <ul class="list-style-type-none pl-0 ls-none">
        <li class="py-1" v-for="item in lesson.items" :key="item">
          <v-row no-gutters>
            <v-col cols="auto">
              <v-icon color="secondary" class="mr-1">mdi-check-circle</v-icon>
            </v-col>
            <v-col class="black--text">
              {{ item }}
            </v-col>
          </v-row>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ["lesson"],
};
</script>

<style lang="scss">
.lesson {
  height: 100%;
  .lesson-title {
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>