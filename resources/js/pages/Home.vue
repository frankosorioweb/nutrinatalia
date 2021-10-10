<template>
    <div>
        <app-header></app-header>
        <app-navigation-drawer></app-navigation-drawer>
    </div>
</template>

<script>
import AppHeader from '../layouts/Header.vue'
import AppNavigationDrawer from '../layouts/NavigationDrawer.vue'
export default {
    components: {
        AppHeader,
        AppNavigationDrawer
    }
}
</script>