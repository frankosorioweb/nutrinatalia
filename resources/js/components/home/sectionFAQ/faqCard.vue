<template>
  <v-col cols="12">
    <v-card elevation="5" class="rounded-lg d-flex flex-column h-100">
      <v-card-title>
        <h3 class="faq-title primary-font secondary-color word-break">
          {{ title }}
        </h3>
        <v-card-text class="pb-0">
          <slot></slot>
        </v-card-text>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["title"],
};
</script>