<template>
    <div>
        <app-header></app-header>
        <app-navigation-drawer></app-navigation-drawer>
        <v-main>
            <section-presentation></section-presentation>
            <section-social-media></section-social-media>
            <section-presentation-video></section-presentation-video>
            <section-about-academy></section-about-academy>
            <section-testimonials></section-testimonials>
        </v-main>
    </div>
</template>

<script>
import AppHeader from '../layouts/Header.vue'
import AppNavigationDrawer from '../layouts/NavigationDrawer.vue'
import SectionPresentation from '../components/home/SectionPresentation.vue'
import SectionSocialMedia from '../components/home/SectionSocialMedia.vue';
import SectionPresentationVideo from '../components/home/SectionPresentationVideo.vue';
import SectionAboutAcademy from '../components/home/SectionAboutAcademy.vue'
import sectionTestimonials from '../components/home/SectionTestimonials.vue';
export default {
    components: {
        AppHeader,
        AppNavigationDrawer,
        SectionPresentation,
        SectionSocialMedia,
        SectionPresentationVideo,
        SectionAboutAcademy,
        sectionTestimonials
    }
}
</script>