<template>
    <InfinityScroll page-title="Now Playing Movies" service-url="movie/now_playing" />
</template>

<script>
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: { InfinityScroll },
    provide: { detailLink: '/movie/detail' },
};
</script>
