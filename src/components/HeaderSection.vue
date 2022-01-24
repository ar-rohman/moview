<template>
    <header
        class="sticky top-0 flex justify-between gap-x-10 items-center bg-white h-[60px] px-4 sm:px-10 border-b">
        <template v-if="!isShowSearch">
            <div class="flex items-center">
                <img src="../assets/images/logo.png" alt="moview" class="h-10 w-10" />
                <p class="font-bold text-red-500 text-xl tracking-tighter ml-4">MOVIEW</p>
                <div class="md:ml-20 sm:ml-8">
                    <NavMenu />
                </div>
            </div>
            <div class="flex justify-end items-center gap-x-6">
                <!-- <div class="h-6 w-6" v-html="searchOutline"></div> -->
                <SearchSection @show-search-input="tiggerShowSearch" />
                <div class="h-6 w-6" v-html="sunOutlineIcon"></div>
                <div class="h-6 w-6" v-html="languageOutlineIcon"></div>
            </div>
        </template>
        <template v-else>
            <div class="w-full flex items-center">
                <button
                    class="mr-6 h6 w-6"
                    @click="isShowSearch = false"
                    v-html="arrowBackIcon"></button>
                <SearchInput autofocus />
            </div>
        </template>
    </header>
</template>

<script>
import { ref } from 'vue';
import NavMenu from './NavMenu.vue';
import SearchSection from './SearchSection.vue';
import SearchInput from './SearchInput.vue';
import { sunOutlineIcon, languageOutlineIcon, arrowBackIcon } from './icon';
export default {
    components: { NavMenu, SearchSection, SearchInput },
    setup() {
        const isShowSearch = ref(false);
        const tiggerShowSearch = () => {
            console.log('aaa');
            isShowSearch.value = true;
        };
        return {
            tiggerShowSearch,
            isShowSearch,
            // searchOutline,
            // close,
            sunOutlineIcon,
            languageOutlineIcon,
            arrowBackIcon,
            // searchText,
        };
    },
};
</script>
