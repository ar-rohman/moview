<template>
    <InfinityScroll page-title="Free Movies" service-url="discover/movie" :query="state.query" />
</template>

<script>
import { reactive } from 'vue';
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
    setup() {
        const query = {
            include_adult: false,
            watch_region: 'ID', // TODO
            with_watch_monetization_types: 'free',
        };
        const state = reactive({ query });
        return { state };
    },
};
</script>
