<template>
    <InfinityScroll page-title="Popular Movies" service-url="movie/popular" />
</template>

<script>
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
};
</script>
