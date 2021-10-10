<template>
    <div>
        <app-header></app-header>
        <app-navigation-drawer></app-navigation-drawer>
        <v-main>
            <section-presentation></section-presentation>
            <section-social-media></section-social-media>
        </v-main>
    </div>
</template>

<script>
import AppHeader from '../layouts/Header.vue'
import AppNavigationDrawer from '../layouts/NavigationDrawer.vue'
import SectionPresentation from '../components/home/SectionPresentation.vue'
import SectionSocialMedia from '../components/home/SectionSocialMedia.vue';
export default {
    components: {
        AppHeader,
        AppNavigationDrawer,
        SectionPresentation,
        SectionSocialMedia
    }
}
</script>