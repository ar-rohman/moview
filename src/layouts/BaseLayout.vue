<template>
    <q-layout view="lhh lpr lff">
        <q-header
            reveal
            zbordered
            class="bg-white text-blue-grey-9 q-py-sm zq-px-lg zq-gutter-x-xl">
            <q-toolbar
                class="row full-width justify-between items-center zcontent-center zq-gutter-x-xl zq-px-xl">
                <q-btn dense flat round icon="mdi-text" padding="sm" @click="toggleDrawer" />
                <q-input
                    v-model="text"
                    rounded
                    outlined
                    dense
                    clearable
                    clear-icon="mdi-close"
                    class="full-width q-px-xl">
                    <template #prepend>
                        <q-icon name="mdi-magnify" class="q-pt-xs"></q-icon>
                    </template>
                    <!-- <template #append>
                        <q-icon name="mdi-close" class="cursor-pointer" @click="text = ''" />
                    </template> -->
                </q-input>
                <q-btn dense flat round icon="mdi-account-circle" padding="sm" />
            </q-toolbar>
        </q-header>
        <q-drawer v-model="drawerOpen" show-if-above :sbreakpoint="500" bordered>
            <q-scroll-area class="fit">
                <q-toolbar class="q-px-xl q-pt-xl">
                    <q-toolbar-title class="text-primary">
                        <q-avatar>
                            <img src="src/assets/images/logo.png" />
                        </q-avatar>
                        Moview
                    </q-toolbar-title>
                </q-toolbar>
                <q-list class="q-mt-xl">
                    <template v-for="(menu, index) in menuList" :key="index">
                        <q-item
                            v-ripple
                            clickable
                            :to="menu.to"
                            :active="menu.to === $route.path"
                            class="q-px-xl">
                            <q-item-section avatar>
                                <q-icon :name="menu.icon" />
                            </q-item-section>
                            <q-item-section>
                                {{ menu.label }}
                            </q-item-section>
                        </q-item>
                        <q-separator v-if="menu.separator" :key="'sep' + index" />
                    </template>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container class="zzzq-pa-xl">
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import { ref } from 'vue';

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
            drawer: ref(false),
            menuList,
            text,
            drawerOpen,
            toggleDrawer() {
                drawerOpen.value = !drawerOpen.value;
            },
        };
    },
};
</script>
