<template>
    <div>
        <app-header></app-header>
        <app-navigation-drawer></app-navigation-drawer>
        <v-main>
            <section-presentation></section-presentation>
        </v-main>
    </div>
</template>

<script>
import AppHeader from '../layouts/Header.vue'
import AppNavigationDrawer from '../layouts/NavigationDrawer.vue'
import SectionPresentation from '../components/home/SectionPresentation.vue'
export default {
    components: {
        AppHeader,
        AppNavigationDrawer,
        SectionPresentation
    }
}
</script>