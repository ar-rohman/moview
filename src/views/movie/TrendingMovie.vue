<template>
    <BackToPervious text="Trending Movies" tool-bar search-bar />
    <div class="font-semibold md:text-lg mb-3">Trending Movies</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-if="trendingMovie.isLoading">
            <MainCardSkeleton v-for="i in 20" :key="i" />
        </template>
        <template v-else>
            <template v-for="item in trendingMovie.result" :key="item.id">
                <MainCard
                    :id="item.id"
                    :title="item.title"
                    :vote-average="item.vote_average"
                    :vote-count="item.vote_count"
                    :image="item.image"
                    card-width="w-full" />
            </template>
        </template>
    </div>
    <BackToTop />
</template>

<script>
import { onMounted, provide, reactive, ref, onUpdated } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import { mainCardResource } from '@/resources/card-resource';
import MainCard from '@/components/MainCard.vue';
import BackToTop from '@/components/BackToTop.vue';
import BackToPervious from '@/components/header/BackToPervious.vue';
import MovieService from '@/services/movie-service';
import MainCardSkeleton from '@/components/skeleton/MainCardSkeleton.vue';

export default {
    components: {
        MainCard,
        BackToTop,
        BackToPervious,
        MainCardSkeleton,
    },
    setup() {
        const trendingMovie = reactive({ result: [], isLoading: true, isError: false });
        const page = ref();
        const totalPage = ref();
        const infinite = ref(document);
        provide('detailLink', '/movie/detail');

        const getTrendingMovie = async () => {
            const query = {
                page: page.value,
            };
            try {
                const result = await MovieService.getTrendingByDay(query);
                const { results } = result.data;
                page.value = result.data.page;
                totalPage.value = result.data.total_pages;
                const data = mainCardResource(results);
                trendingMovie.result = [...trendingMovie.result, ...data];
                trendingMovie.isLoading = false;
                trendingMovie.isError = false;
            } catch {
                trendingMovie.isError = true;
            }
        };

        const isScreenLargerThanContent = () => {
            const target = document.documentElement;
            const largeScreen = target.scrollHeight - target.scrollTop === target.clientHeight;
            if (largeScreen && page.value < totalPage.value) {
                page.value += 1;
                getTrendingMovie();
            }
        };

        useInfiniteScroll(
            infinite,
            () => {
                if (page.value < totalPage.value) {
                    page.value += 1;
                    getTrendingMovie();
                }
            },
            { distance: 500 }
        );
        onMounted(getTrendingMovie);
        onUpdated(isScreenLargerThanContent);
        return { trendingMovie };
    },
};
</script>
