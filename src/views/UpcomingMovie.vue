<template>
    <InfinityScroll page-title="Upcoming Movies" service-url="movie/upcoming" />
</template>

<script>
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
};
</script>
