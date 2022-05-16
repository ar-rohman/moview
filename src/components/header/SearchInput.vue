<template>
    <div class="w-full">
        <label
            class="relative flex items-center text-gray-400 dark:text-slate-600 focus-within:text-gray-600 dark:focus-within:text-slate-400 w-full lg:w-auto">
            <span class="absolute lg:left-2 flex items-center">
                <BaseIcon name="searchOutline" />
            </span>
            <input
                v-model="searchText"
                class="placeholder:italic placeholder:text-gray-400 dark:placeholder:text-slate-500 block bg-white dark:bg-slate-900 w-full lg:border lg:border-slate-300 dark:lg:border-slate-50/20 lg:rounded-full py-2 pl-9 pr-9 lg:shadow-sm dark:lg:shadow-none focus:outline-none lg:focus:border-red-400 dark:lg:focus:border-red-400 lg:focus:ring-red-400 dark:lg:focus:ring-red-400 lg:focus:ring-1 text-base"
                placeholder="Search for movie..."
                type="text"
                name="search"
                autocomplete="off"
                :autofocus="autofocus"
                @keydown.enter="searchFor" />
            <span
                v-if="searchText"
                class="absolute right-2 flex items-center cursor-pointer text-gray-500 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-400 focus:text-gray-800 dark:focus:text-slate-300"
                @click="searchText = ''">
                <BaseIcon name="close" />
            </span>
        </label>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    props: {
        autofocus: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const router = useRouter();
        const searchText = ref(null);
        const searchFor = () => {
            router.push({
                name: 'search',
                query: {
                    q: searchText.value,
                },
            });
            searchText.value = null;
        };
        return {
            searchText,
            searchFor,
        };
    },
};
</script>
