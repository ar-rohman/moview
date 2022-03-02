<template>
    <header
        class="w-full fixed top-0 flex justify-between gap-x-10 items-center text-gray-900 h-[60px] px-4 sm:px-10 z-30"
        :class="[
            route.meta.isShowNav
                ? 'bg-white'
                : scrollY > route.meta.showBackgroundAfter
                ? 'bg-white border-b'
                : 'bg-transparent',
        ]">
        <template v-if="!isShowSearch">
            <div v-if="nav" class="flex items-center">
                <img :src="logo" :alt="appName" class="h-10 w-10" />
                <p class="font-bold text-red-500 text-xl tracking-tighter ml-4 uppercase">
                    {{ appName }}
                </p>
                <div class="md:ml-20 sm:ml-8">
                    <NavMenu />
                </div>
            </div>
            <div v-else class="flex gap-x-4 items-center">
                <button
                    class="bg-white/50 rounded-full p-2 hover:bg-white/70 focus:bg-white zpx-4 zsm:px-10"
                    @click="router.back()">
                    <BaseIcon name="arrowBack" />
                </button>
                <div v-if="scrollY > route.meta.showTextAfter" class="line-clamp-1 font-semibold">
                    {{ route.meta.pageName }}
                </div>
            </div>
            <div class="flex justify-end items-center gap-x-3 lg:gap-x-6">
                <SearchBar v-if="route.meta.showSearch" @show-search-input="tiggerShowSearch" />
                <button class="bg-white/50 rounded-full p-2 hover:bg-white/70 focus:bg-white">
                    <BaseIcon name="sunOutline" />
                </button>
                <button class="bg-white/50 rounded-full p-2 hover:bg-white/70 focus:bg-white">
                    <BaseIcon name="languageOutline" />
                </button>
                <button
                    v-if="route.meta.showShare"
                    class="text-gray-800 bg-white/50 rounded-full p-2 block hover:bg-white/70 focus:bg-white"
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
import logo from '@/assets/images/logo.png';
export default {
    components: { NavMenu, SearchBar, SearchInput, BaseIcon },
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
