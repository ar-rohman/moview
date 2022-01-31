<template>
    <InfinityScroll page-title="Trending Movies" service-url="trending/movie/day" />
</template>

<script>
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
};
</script>
