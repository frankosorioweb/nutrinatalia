<template>
    <a
        class="social-media-button-container d-block rounded-pill grey--text text--lighten-5 py-2 px-6"
        :class="facebook ? 'facebook': 'instagram'"
        :href="facebook ? links.socialMedia.facebook : links.socialMedia.instagram"
        target="_blank"
    >
        <span class="follow-text d-block primary-font lh-1">seguime en</span>
        <span class="social-media-text d-block primary-font font-weight-bold lh-1">{{ facebook ? 'Facebook' : 'Instagram' }}</span>
        <span class="icon-circle d-flex justify-center align-center grey lighten-5 rounded-circle">
            <v-icon class="icon">{{ facebook ? 'mdi-facebook' : 'mdi-instagram' }}</v-icon>
        </span>
    </a>
</template>

<script>
import { mapState } from 'vuex';
export default {
    props: ['facebook'],
    computed: {
        ...mapState(['links'])
    },
}
</script>