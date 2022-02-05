<template>
    <InfinityScroll page-title="Similar Movies" :service-url="serviceUrl" />
</template>

<script>
import { useRoute } from 'vue-router';
import InfinityScroll from '@/components/InfinityScroll.vue';
import { ref } from 'vue';

export default {
    components: {
        InfinityScroll,
    },
    setup() {
        const route = useRoute();
        const serviceUrl = ref(null);
        serviceUrl.value = `movie/${route.params.id}/similar`;

        return { serviceUrl };
    },
};
</script>
