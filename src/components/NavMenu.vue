<template>
    <nav
        class="flex justify-between gap-x-6 md:gap-x-8 items-center fixed bottom-0 inset-x-0 w-full sm:w-auto sm:bottom-auto sm:inset-x-auto sm:relative px-6 sm:px-0 py-2 sm:py-0 sm:mr-2 md:mr-8 border-t sm:border-none text-sm sm:text-base sm:max-w-max bg-white">
        <template v-for="menu in menuList" :key="menu.to">
            <div class="">
                <router-link
                    :to="menu.to"
                    :class="[route.path === menu.to ? `text-red-500` : 'text-gray-600']"
                    class="flex flex-col items-center justify-center min-w-[40px] min-h-[40px] sm:h-[60px] sm:hover:text-red-500 sm:focus:text-red-600 focus:outline-none">
                    <div class="sm:hidden">
                        <div
                            class="h-6 w-6"
                            v-html="route.path === menu.to ? menu.activeIcon : menu.icon"></div>
                    </div>
                    <p class="text-xs sm:text-base sm:font-bold">{{ menu.label }}</p>
                </router-link>
            </div>
        </template>
    </nav>
</template>

<script>
import { toRefs, reactive } from 'vue';
import { useRoute } from 'vue-router';
import {
    tvOutline,
    tv,
    videoOutline,
    video,
    bookmarkOutline,
    bookmark,
    infoOutline,
    info,
} from './icon';

export default {
    setup() {
        const route = useRoute();
        const menu = reactive({
            menuList: [
                {
                    icon: tvOutline,
                    activeIcon: tv,
                    to: '/',
                    label: 'Movies',
                },
                {
                    icon: videoOutline,
                    activeIcon: video,
                    to: '/tv-show',
                    label: 'TV Shows',
                },
                {
                    icon: bookmarkOutline,
                    activeIcon: bookmark,
                    to: '/watchlist',
                    label: 'Watchlist',
                },
                {
                    icon: infoOutline,
                    activeIcon: info,
                    to: '/about',
                    label: 'About',
                },
            ],
        });
        return {
            route,
            ...toRefs(menu),
        };
    },
};
</script>
