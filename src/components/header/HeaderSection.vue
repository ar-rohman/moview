<template>
    <header
        class="w-full fixed top-0 flex justify-between gap-x-4 md:gap-x-10 items-center h-[60px] px-4 sm:px-10 max-w-screen-xl mx-auto z-30"
        :class="[
            { 'bg-white dark:bg-slate-900': route.meta.isShowNav },
            scrollY > route.meta.showBackgroundAfter
                ? 'bg-white dark:bg-slate-900 border-b dark:border-slate-50/20'
                : 'bg-transparent',
        ]">
        <template v-if="!isShowSearch">
            <div v-if="nav" class="flex items-center">
                <img :src="logo" :alt="appName" class="h-10 w-10" />
                <p
                    class="font-bold text-red-500 dark:text-red-400 text-xl tracking-tighter ml-4 uppercase">
                    {{ appName }}
                </p>
                <div class="md:ml-20 sm:ml-8">
                    <NavMenu />
                </div>
            </div>
            <div v-else class="flex gap-x-4 items-center">
                <button
                    class="bg-white/50 rounded-full p-2 hover:bg-white/70 focus:bg-white dark:bg-slate-900/30 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900/70"
                    @click="router.back()">
                    <BaseIcon name="arrowBack" />
                </button>
                <div
                    v-if="scrollY > route.meta.showTextAfter"
                    class="line-clamp-1 text-sm md:text-base font-semibold">
                    {{ route.meta.pageName }}
                </div>
            </div>
            <div class="relative flex justify-end items-center gap-x-2">
                <SearchBar v-if="route.meta.showSearch" @show-search-input="tiggerShowSearch" />
                <ThemeSwitcher />
                <button
                    v-if="route.meta.showShare"
                    class="bg-white/50 rounded-full p-2 block hover:bg-white/70 focus:bg-white dark:bg-slate-900/30 dark:hover:bg-slate-900/50 dark:focus:bg-slate-900/70"
                    @click="shareMovie">
                    <BaseIcon name="shareOutline" />
                </button>
            </div>
        </template>
        <template v-else>
            <div class="w-full flex items-center">
                <button class="mr-6" @click="isShowSearch = false">
                    <BaseIcon name="arrowBack" />
                </button>
                <SearchInput autofocus />
            </div>
        </template>
    </header>
</template>

<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useScroll } from '@vueuse/core';
import NavMenu from './NavMenu.vue';
import SearchBar from './SearchBar.vue';
import SearchInput from './SearchInput.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import ThemeSwitcher from './ThemeSwitcher.vue';
import logo from '@/assets/images/logo.png';
export default {
    components: { NavMenu, SearchBar, SearchInput, BaseIcon, ThemeSwitcher },
    props: {
        nav: {
            type: Boolean,
            default: false,
        },
        search: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const isShowSearch = ref(false);
        const appName = ref(import.meta.env.VITE_APP_NAME);
        const element = ref(document);
        const { y: scrollY } = useScroll(element);
        const tiggerShowSearch = () => {
            isShowSearch.value = true;
        };
        const shareMovie = () => {
            navigator.share({
                title: appName.value,
                text: `Look ${route.meta.pageName} at ${appName.value}`,
                url: `${route.path}`,
            });
        };
        return {
            tiggerShowSearch,
            shareMovie,
            isShowSearch,
            logo,
            route,
            router,
            scrollY,
            appName,
        };
    },
};
</script>
