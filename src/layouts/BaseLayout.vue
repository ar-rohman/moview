<template>
    <q-layout view="lhh lpr lff">
        <q-header reveal zbordered class="bg-white text-blue-grey-9 q-py-sm">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleDrawer" />
            </q-toolbar>
        </q-header>

        <!-- <q-drawer v-model="leftDrawerOpen" show-if-above side="left" bordered class="q-pa-xl">
            <q-toolbar>
                <q-toolbar-title class="text-primary">
                    <q-avatar>
                        <img src="src/assets/images/logo.png" />
                    </q-avatar>
                    Moview
                </q-toolbar-title>
            </q-toolbar>
            <div class="q-mt-lg q-ml-md q-gutter-md">
                <div class="">Home</div>
                <div class="">Home</div>
                <div class="">Home</div>
                <q-item v-ripple clickable :active="menu.label === 'Outbox'">
                    <q-item-section avatar>
                        <q-icon :name="menu.icon" />
                    </q-item-section>
                    <q-item-section>
                        {{ menu.label }}
                    </q-item-section>
                </q-item>
            </div>
        </q-drawer> -->

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
                            :active="menu.label === 'Outbox'"
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

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<!-- <script>
import { ref } from 'vue';

export default {
    setup() {
        const leftDrawerOpen = ref(false);

        return {
            leftDrawerOpen,
            toggleLeftDrawer() {
                leftDrawerOpen.value = !leftDrawerOpen.value;
            },
        };
    },
};
</script> -->
<script>
import { ref } from 'vue';

const menuList = [
    {
        icon: 'home',
        to: '/',
        label: 'Home',
        separator: false,
    },
    {
        icon: 'send',
        to: '/s',
        label: 'Outbox',
        separator: false,
    },
    {
        icon: 'delete',
        to: '/about',
        label: 'About',
        separator: false,
    },
    {
        icon: 'error',
        to: '/e',
        label: 'Spam',
        separator: true,
    },
    {
        icon: 'settings',
        to: '/r',
        label: 'Settings',
        separator: false,
    },
    {
        icon: 'feedback',
        to: '/t',
        label: 'Send Feedback',
        separator: false,
    },
    {
        icon: 'help',
        to: '/y',
        iconColor: 'primary',
        label: 'Help',
        separator: false,
    },
];

export default {
    setup() {
        const drawerOpen = ref(false);
        return {
            drawer: ref(false),
            menuList,
            drawerOpen,
            toggleDrawer() {
                drawerOpen.value = !drawerOpen.value;
            },
        };
    },
};
</script>
