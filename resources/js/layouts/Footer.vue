<template>
  <v-footer padless>
    <v-card flat tile width="100%" class="dark-gray-bg text-center">
      <v-card-text>
        <v-btn v-for="smButton in this.getSmButtons" :key="smButton.name" color="white" :href="smButton.link" target="_blank" class="mx-1" icon>
          <v-icon :class="smButton.iconClass" large>
            mdi-{{ smButton.name }}
          </v-icon>
        </v-btn>
        <!-- <v-btn color="white" :href="links.socialMedia.instagram" target="_blank" class="mx-1" icon>
          <v-icon class="ig-color" large>
            mdi-instagram
          </v-icon>
        </v-btn> -->
      </v-card-text>

      <v-divider class="grey darken-2"></v-divider>

      <v-card-text class="white--text">
        Copyright © {{ new Date().getFullYear() }} — <strong>Nutrinatalia</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['links']),
    getSmButtons() {
      return [
        {
          name: 'facebook',
          link: this.links.socialMedia.facebook,
          iconClass: 'fb-color'
        },
        {
          name: 'instagram',
          link: this.links.socialMedia.instagram,
          iconClass: 'ig-color'
        },
      ]
    }
  },
};
</script>