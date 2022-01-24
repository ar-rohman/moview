<template>
    <div class="">
        <div class="hidden lg:block">
            <SearchInput />
        </div>
        <!-- <label
            class="relative hidden lg:flex items-center text-gray-400 focus-within:text-gray-700">
            <span
                class="absolute left-2 flex items-centerh-6 w-6"
                v-html="searchOutlineIcon"></span>
            <input
                v-model="searchText"
                class="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-9 shadow-sm focus:outline-none focus:border-red-500 focus:ring-red-500 focus:ring-1 text-base"
                placeholder="Search for anything..."
                type="text"
                name="search"
                @keydown.enter="searchFor" />
            <span
                v-if="searchText"
                class="absolute right-2 flex items-center h-6 w-6 cursor-pointer"
                @click="searchText = ''"
                v-html="closeIcon"></span>
        </label> -->
        <button
            class="h-6 w-6 lg:hidden flex items-center"
            @click="$emit('showSearchInput')"
            v-html="searchOutlineIcon"></button>
        <!-- <button
            class="h-6 w-6 lg:hidden flex items-center"
            @click="mobileSearch"
            v-html="searchOutlineIcon"></button> -->
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { searchOutlineIcon, closeIcon } from './icon';
import SearchInput from './SearchInput.vue';

export default {
    components: { SearchInput },
    emits: ['showSearchInput'],
    setup(props, { emit }) {
        const router = useRouter();
        const searchText = ref(null);
        const mobileSearch = () => {
            emit('showSearchInput');
        };
        const searchFor = () => {
            router.push({
                name: 'Search',
                query: {
                    q: searchText.value,
                },
            });
            searchText.value = null;
        };
        return {
            searchText,
            mobileSearch,
            searchFor,
            searchOutlineIcon,
            closeIcon,
        };
    },
};
</script>
