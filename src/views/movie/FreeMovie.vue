<template>
    <!-- NOT USED ANYMORE -->
    <InfinityScroll
        v-if="state.query.watch_region"
        page-title="Free Movies"
        service-url="discover/movie"
        :query="state.query" />
</template>

<script>
import { onMounted, reactive, ref } from 'vue';
import { useCountryCodeStore } from '@/stores/country';
import InfinityScroll from '@/components/InfinityScroll.vue';

export default {
    components: {
        InfinityScroll,
    },
    provide: { detailLink: '/movie/detail' },
    setup() {
        const countryCodeStore = useCountryCodeStore();
        const query = {
            include_adult: false,
            watch_region: '',
            with_watch_monetization_types: 'free',
        };
        const state = reactive({ query });
        onMounted(async () => {
            state.query.watch_region = await countryCodeStore.getCountryCode();
        });

        return { state };
    },
};
</script>
