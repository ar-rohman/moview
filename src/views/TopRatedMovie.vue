<template>
    <InfinityScroll page-title="Top Rated Movies" service-url="movie/top_rated" />
</template>

<script>
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
};
</script>
