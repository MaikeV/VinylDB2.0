<template class="noScroll">
    <v-app class="noScroll">
        <v-navigation-drawer v-model="drawer" app clipped color="blue accent-4">
            <v-list class="d-flex flex-column" height="100%" dense>
                <NavbarItem linkto="/" title="Collection">
                    <v-icon>mdi-album</v-icon>
                </NavbarItem>
                <NavbarItem linkto="/wishlist" title="Wishlist">
                    <v-icon>mdi-format-list-checkbox</v-icon>
                </NavbarItem>
                <NavbarItem linkto="/conditions" title="Condition Grades">
                    <v-icon>mdi-alpha-m-circle-outline</v-icon>
                </NavbarItem>
                <v-spacer></v-spacer>
                <NavbarItem linkto="/settings" title="Settings">
                    <v-icon>mdi-tools</v-icon>
                </NavbarItem>
                <NavbarItem linkto="/legal" title="Impressum">
                    <v-icon>mdi-briefcase</v-icon>
                </NavbarItem>
                <NavbarItem linkto="/privacy" title="Datenschutz">
                    <v-icon>mdi-security</v-icon>
                </NavbarItem>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app clipped-left collapse-on-scroll color="blue darken-4">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>VinylDB</v-toolbar-title>
        </v-app-bar>
        <v-container class="content flex container--fluid pa-0 fill-height" fluid>
            <slot></slot>
        </v-container>
    </v-app>
</template>

<script>
    import NavbarItem from "./NavbarItem";
    import colors from 'vuetify/lib/util/colors';

    export default {
        name: "Layout",
        components: {
            NavbarItem
        },
        data: () => ({
            cards: [{title: 'test'}],
            drawer: false
        }),
        created() {
            this.$vuetify.theme.themes.dark.primary = colors.blue.darken4;
            this.$vuetify.theme.dark = true
        },
    }
</script>

<style scoped>
    .noScroll {
        position: fixed;
        width: 100%;
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
    }
    .content {
        margin-top: 60px;
    }
    .flex{
        display: flex;
        justify-content: center;
    }
</style>
