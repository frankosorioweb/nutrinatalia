<template>
  <v-btn color="white" :href="link" target="_blank" class="mx-1" icon>
    <v-icon
      :class="{ 'fb-color': type === true, 'ig-color': type === false }"
      large
    >
      mdi-{{ this.getSocialMediaName }}
    </v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    type: Boolean,
    link: String,
  },
  computed: {
    getSocialMediaName() {
      return this.type ? "facebook" : "instagram";
    },
  },
};
</script>