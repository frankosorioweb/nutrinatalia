<template>
  <a
    class="d-inline-flex justify-center align-center social-media-small-button rounded-circle pa-1"
    :class="{'facebook': type, 'instagram': type === false}"
    :href="link"
    target="_blank"
  >
    <v-icon class="icon">mdi-{{ type ? 'facebook' : 'instagram' }}</v-icon>
  </a>
</template>

<script>
export default {
  props: {
    type: Boolean,
    link: String
  }
};
</script>