<template>
    <InfinityScroll :page-title="pageTitle" service-url="discover/movie" :query="state.query" />
</template>

<script>
import { reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
    setup() {
        const route = useRoute();
        const pageTitle = ref(null);
        const query = { with_genres: '' };
        const state = reactive({ query });
        pageTitle.value = `${route.params.genre} Movies`;
        state.query = { with_genres: route.params.id };
        return { pageTitle, state };
    },
};
</script>
