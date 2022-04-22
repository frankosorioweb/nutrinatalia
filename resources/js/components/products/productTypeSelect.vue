<template>
  <v-container class="pt-6 px-1">
    <v-row no-gutters>
      <v-col cols="12">
        <v-btn-toggle v-model="btnToggle" id="btn-toggle-product-type" mandatory tile group>
          <v-btn
            :to="{name: this.types.WORKSHOP}"
            active-class="active"
            class="btn-primary-toggle primary-font font-weight-bold rounded"
            :value="this.types.WORKSHOP"
          >
            <v-icon class="mr-1">mdi-school</v-icon>
            Talleres
          </v-btn>
          <v-btn
            :to="{name: this.types.EBOOK}"
            active-class="active"
            class="btn-secondary-toggle primary-font font-weight-bold rounded"
            :value="this.types.EBOOK"
          >
            <v-icon class="mr-1">mdi-bookshelf</v-icon>
            Ebooks
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      btnToggle: this.$route.name
    }
  },
  computed: {
    ...mapState('productTypes', ['types'])
  }
};
</script>