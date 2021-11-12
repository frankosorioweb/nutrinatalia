<template>
  <article class="white elevation-5 rounded-lg mt-6 product-card-responsive">
    <a>
      <v-img :aspect-ratio="16 / 9" :src="data.poster">
        <template v-slot:placeholder>
          <v-sheet class="skeleton-loader-sheet">
            <v-skeleton-loader class="skeleton-loader" type="image" />
          </v-sheet>
        </template>
      </v-img>
      <h2
        class="
          secondary-color
          primary-font
          h3
          product-name
          text-center
          px-4
          pt-4
          pb-2
        "
      >
        {{ data.name }}
      </h2>
      <p
        class="px-4 pb-4 mb-0 text-center description grey--text text--darken-1"
      >
        {{ data.description }}
      </p>
    </a>
    <footer class="grey lighten-4 pa-4">
      <v-row no-gutters align="center" justify="space-between">
        <v-col cols="auto">
          <label-type :type="data.type"></label-type>
        </v-col>
        <v-col cols="auto">
          <p class="mb-0 font-weight-bold primary-font primary-color">
            <span v-if="data.price.discount" class="red--text text-decoration-line-through mr-1">
              {{ getOldPrice }}
            </span>
            {{ getPrice }}
          </p>
        </v-col>
      </v-row>
    </footer>
  </article>
</template>

<script>
import labelType from "../productCard/labelType.vue";
export default {
  props: ['data', 'moneyType'],
  components: {
    labelType,
  },
  computed: {
    getPrice() {
      return this.data.price.dollar.value
    },
    getOldPrice() {
      return this.data.price.dollar.old
    }
  },
};
</script>