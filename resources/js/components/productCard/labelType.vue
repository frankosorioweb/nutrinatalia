<template>
  <div class="product-card-label-type-container d-flex align-center rounded px-2 py-1" :class="this.getTypeClassName">
    <v-icon class="icon" dense>{{ this.getIconType }}</v-icon>
    <span class="ml-1 label-type primary-font font-weight-bold">{{ type }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: ['type'],
  computed: {
    ...mapGetters('productTypes', ['isWorkshop']),
    getIconType() {
      return this.isWorkshop(this.type) ? 'mdi-school' : 'mdi-bookshelf';
    },
    getTypeClassName() {
      return this.isWorkshop(this.type) ? 'workshop' : 'ebook'
    }
  }
};
</script>