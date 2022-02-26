<template>
    <InfinityScroll :page-title="`Result for ${query}`" :service-url="serviceUrl" :query="params" />
</template>

<script>
import { ref, provide, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: { InfinityScroll },
    setup() {
        const route = useRoute();
        const serviceUrl = ref('search/movie');
        const query = ref();
        provide('detailLink', '/movie/detail');
        query.value = route.query.q;
        const params = reactive({
            query: query.value,
            include_adult: false,
        });

        // TODO
        watch(
            () => route.query.q,
            (newQuery) => {
                if (newQuery) {
                    query.value = newQuery;
                }
            }
        );

        return { query, serviceUrl, params };
    },
};
</script>
