<template>
    <div class="font-semibold md:text-lg mb-3">Watchlist</div>
    <div
        v-if="watchlist.result.length"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-for="item in watchlist.result" :key="item.id">
            <MainCardSkeleton v-if="watchlist.isLoading" />
            <MainCard
                v-else
                :id="item.id"
                :title="item.title"
                :vote-average="item.voteAverage"
                :vote-count="item.voteCount"
                :image="item.image"
                card-width="w-full" />
        </template>
    </div>
    <div v-else>There is no watchlist</div>
    <BackToTop />
</template>

<script>
import { onMounted, reactive } from 'vue';
import idb from '@/storage/service';
import defaults from '@/utils/defaults';
import MainCard from '@/components/MainCard.vue';
import BackToTop from '@/components/utility/BackToTop.vue';
import MainCardSkeleton from '@/components/skeleton/MainCardSkeleton.vue';

export default {
    components: { MainCard, BackToTop, MainCardSkeleton },
    provide: { detailLink: '/movie/detail' },
    setup() {
        const watchlist = reactive({ result: [], isLoading: true, isError: false });
        const getWatchlist = async () => {
            try {
                watchlist.result = await idb.getAll(defaults.watchlistStorage);
                watchlist.isLoading = false;
                watchlist.isError = false;
            } catch {
                watchlist.isError = true;
            }
        };

        onMounted(getWatchlist);

        return { watchlist };
    },
};
</script>
