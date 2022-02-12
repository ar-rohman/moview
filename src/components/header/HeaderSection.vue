<template>
    <header
        class="sticky top-0 flex justify-between gap-x-10 items-center bg-white h-[60px] px-4 sm:px-10 z-30"
        :class="border">
        <template v-if="!isShowSearch">
            <div class="flex items-center">
                <img :src="logo" alt="moview" class="h-10 w-10" />
                <p class="font-bold text-red-500 text-xl tracking-tighter ml-4">MOVIEW</p>
                <div class="md:ml-20 sm:ml-8">
                    <NavMenu />
                </div>
            </div>
            <div class="flex justify-end items-center gap-x-6">
                <SearchBar @show-search-input="tiggerShowSearch" />
                <BaseIcon name="sunOutline" />
                <BaseIcon name="languageOutline" />
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
import { onMounted, onUnmounted, ref } from 'vue';
import NavMenu from './NavMenu.vue';
import SearchBar from './SearchBar.vue';
import SearchInput from './SearchInput.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import logo from '@/assets/images/logo.png';
export default {
    components: { NavMenu, SearchBar, SearchInput, BaseIcon },
    setup() {
        const isShowSearch = ref(false);
        const border = ref(null);
        const tiggerShowSearch = () => {
            isShowSearch.value = true;
        };

        const scrolling = () => {
            const htmlScroll = document.documentElement.scrollTop;
            if (htmlScroll > 5) {
                border.value = 'border-b';
            } else {
                border.value = '';
            }
        };
        onMounted(() => window.addEventListener('scroll', scrolling));
        onUnmounted(() => window.removeEventListener('scroll', scrolling));

        return {
            tiggerShowSearch,
            isShowSearch,
            logo,
            border,
        };
    },
};
</script>
