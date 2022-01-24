<template>
    <div class="w-full">
        <label
            class="relative flex items-center text-gray-400 focus-within:text-gray-700 w-full lg:w-auto">
            <span
                class="absolute lg:left-2 flex items-center h-6 w-6"
                v-html="searchOutlineIcon"></span>
            <input
                v-model="searchText"
                class="placeholder:italic placeholder:text-gray-400 block bg-white w-full lg:border lg:border-slate-300 lg:rounded-full py-2 pl-9 pr-9 lg:shadow-sm focus:outline-none lg:focus:border-red-500 lg:focus:ring-red-500 lg:focus:ring-1 text-base"
                placeholder="Search for anything..."
                type="text"
                name="search"
                :autofocus="autofocus"
                @keydown.enter="searchFor" />
            <span
                v-if="searchText"
                class="absolute right-2 flex items-center h-6 w-6 cursor-pointer"
                @click="searchText = ''"
                v-html="closeIcon"></span>
        </label>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { searchOutlineIcon, closeIcon } from './icon';

export default {
    props: {
        autofocus: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const router = useRouter();
        const searchText = ref(null);
        const mobileSearch = () => router.push({ name: 'Search' });
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
