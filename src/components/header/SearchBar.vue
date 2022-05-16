<template>
    <div>
        <div class="ml-2 hidden lg:block">
            <SearchInput />
        </div>
        <button
            class="bg-white/50 rounded-full p-2 hover:bg-white/70 lg:hidden flex items-center dark:bg-slate-900/60 dark:hover:bg-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
            @click="$emit('showSearchInput')">
            <BaseIcon name="searchOutline" />
        </button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import SearchInput from './SearchInput.vue';

export default {
    components: { SearchInput, BaseIcon },
    emits: ['showSearchInput'],
    setup(props, { emit }) {
        const router = useRouter();
        const searchText = ref(null);
        // const mobileSearch = () => {
        //     emit('showSearchInput');
        // };
        // const searchFor = () => {
        //     router.push({
        //         name: 'search',
        //         query: {
        //             q: searchText.value,
        //         },
        //     });
        //     searchText.value = null;
        // };
        return {
            searchText,
            // mobileSearch,
            // searchFor,
        };
    },
};
</script>
