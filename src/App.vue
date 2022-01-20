<template>
    <q-layout view="hHh LpR lff">
        <q-header
            bordered
            class="row justify-between no-wrap bg-white text-blue-grey-9 q-px-lg"
            style="height: 60px">
            <q-toolbar class="zcol-2">
                <q-toolbar-title class="row items-center no-wrap">
                    <q-avatar>
                        <img src="src/assets/images/logo.png" />
                    </q-avatar>
                    <div class="text-primary text-weight-bold q-ml-sm">Moview</div>
                </q-toolbar-title>
            </q-toolbar>
            <q-toolbar class="zrow zjustify-between zitems-center col-5">
                <q-input
                    v-model="text"
                    rounded
                    outlined
                    dense
                    clearable
                    :clear-icon="evaClose"
                    class="full-width q-px-xl">
                    <template #prepend>
                        <q-icon :name="evaSearch"></q-icon>
                    </template>
                </q-input>
            </q-toolbar>
            <q-toolbar class="zcol-3">
                <q-tabs
                    shrink
                    no-caps
                    indicator-color="primary"
                    active-color="primary"
                    class="full-height">
                    <q-route-tab to="/" name="movie" label="Movie" />
                    <q-route-tab to="/about" name="tvshow" label="TV Show" />
                    <q-route-tab to="/about" name="watchlist" label="Watchlist" />
                    <q-route-tab to="/about" name="about" label="About" />
                </q-tabs>
                <q-separator vertical inset spaced="xl" />

                <q-btn flat round :icon="evaSunOutline" class="q-mr-sm" />
                <q-btn flat round :icon="ionLanguageOutline" class="zq-mr-md" />
            </q-toolbar>
            <!-- <q-toolbar class="row justify-end zcol-2">
                <q-btn flat round :icon="evaSunOutline" class="q-mr-sm" />
                <q-btn flat round :icon="ionLanguageOutline" class="zq-mr-md" />
            </q-toolbar> -->
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>

        <q-footer bordered class="bg-grey-8 text-white">
            <q-toolbar>
                <q-toolbar-title>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
                    </q-avatar>
                    <div>Title</div>
                </q-toolbar-title>
            </q-toolbar>
        </q-footer>
    </q-layout>
</template>

<script>
import { ref } from 'vue';
import { evaSearch, evaSunOutline, evaClose } from '@quasar/extras/eva-icons';
import { ionLanguageOutline } from '@quasar/extras/ionicons-v6';

export default {
    setup() {
        const drawerOpen = ref(false);
        const menuList = [
            {
                icon: 'mdi-home',
                to: '/',
                label: 'Home',
                separator: false,
            },
            {
                icon: 'mdi-send',
                to: '/s',
                label: 'Outbox',
                separator: false,
            },
            {
                icon: 'mdi-delete',
                to: '/about',
                label: 'About',
                separator: false,
            },
            {
                icon: 'mdi-error',
                to: '/e',
                label: 'Spam',
                separator: true,
            },
            {
                icon: 'mdi-settings',
                to: '/r',
                label: 'Settings',
                separator: false,
            },
            {
                icon: 'mdi-feedback',
                to: '/t',
                label: 'Send Feedback',
                separator: false,
            },
            {
                icon: 'mdi-help',
                to: '/y',
                iconColor: 'primary',
                label: 'Help',
                separator: false,
            },
        ];
        const text = ref(null);
        return {
            evaSearch,
            evaClose,
            evaSunOutline,
            ionLanguageOutline,
            drawer: ref(false),
            menuList,
            text,
            drawerOpen,
            tab: ref(''),
            toggleDrawer() {
                drawerOpen.value = !drawerOpen.value;
            },
        };
    },
};
</script>
