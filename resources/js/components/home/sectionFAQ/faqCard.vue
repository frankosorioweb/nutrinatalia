<template>
  <v-col cols="12" sm="6" md="4">
    <v-card elevation="5" class="rounded-lg d-flex flex-column h-100">
      <v-card-title class="justify-center">
        <h3
          class="
            faq-title
            primary-font
            secondary-color
            word-break
          "
        >
          {{ title }}
        </h3>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["title"],
};
</script>