<template>
    <nav
        class="flex justify-between gap-x-6 md:gap-x-8 items-center fixed bottom-0 inset-x-0 w-full sm:w-auto sm:bottom-auto sm:inset-x-auto sm:static px-6 sm:px-0 py-2 sm:py-0 sm:mr-2 md:mr-8 border-t dark:border-slate-50/20 sm:border-none text-sm sm:text-base sm:max-w-max bg-white dark:bg-slate-900">
        <template v-for="menu in menuList" :key="menu.to">
            <router-link
                :to="menu.to"
                :class="[
                    route.path === menu.to
                        ? `text-red-500 dark:text-red-600`
                        : 'text-gray-600 dark:text-slate-400',
                ]"
                class="flex flex-col items-center justify-center min-w-[40px] min-h-[40px] sm:h-[60px] sm:hover:text-red-500 dark:sm:hover:text-red-500 focus:outline-none focus-visible:text-red-500 dark:focus-visible:text-red-600">
                <div class="sm:hidden">
                    <BaseIcon :name="route.path === menu.to ? menu.activeIcon : menu.icon" />
                </div>
                <p class="text-xs sm:text-base sm:font-bold whitespace-nowrap">{{ menu.label }}</p>
            </router-link>
        </template>
    </nav>
</template>

<script>
import { toRefs, reactive } from 'vue';
import { useRoute } from 'vue-router';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    setup() {
        const route = useRoute();
        const menu = reactive({
            menuList: [
                {
                    icon: 'videoOutline',
                    activeIcon: 'video',
                    to: '/',
                    label: 'Movies',
                },
                {
                    icon: 'tvOutline',
                    activeIcon: 'tv',
                    to: '/tv-show',
                    label: 'TV Shows',
                },
                {
                    icon: 'bookmarkOutline',
                    activeIcon: 'bookmark',
                    to: '/watchlist',
                    label: 'Watchlist',
                },
                {
                    icon: 'infoOutline',
                    activeIcon: 'info',
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
