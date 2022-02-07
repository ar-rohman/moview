<template>
    <div class="">
        <div class="hidden lg:block">
            <SearchInput />
        </div>
        <button class="lg:hidden flex items-center" @click="$emit('showSearchInput')">
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
        };
    },
};
</script>
