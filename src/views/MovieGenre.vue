<template>
    <InfinityScroll :page-title="pageTitle" service-url="discover/movie" :query="state.query" />
</template>

<script>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import InfinityScroll from '@/components/InfinityScroll.vue';
import { titleCase } from '../utils/string';

export default {
    components: {
        InfinityScroll,
    },
    setup() {
        const route = useRoute();
        const pageTitle = ref(null);
        const query = { with_genres: '' };
        const state = reactive({ query });
        const title = route.params.genre.replace(/-/g, ' ');
        pageTitle.value = `${titleCase(title)} Movies`;
        state.query = { with_genres: route.params.id };
        return { pageTitle, state };
    },
};
</script>
