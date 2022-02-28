<template>
    <BackToPervious text="Similar Movies" tool-bar search-bar />
    <div class="font-semibold md:text-lg mb-3">Similar Movies</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-if="similarMovie.isLoading">
            <MainCardSkeleton v-for="i in 20" :key="i" />
        </template>
        <template v-else>
            <template v-for="item in similarMovie.result" :key="item.id">
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
import { useRoute } from 'vue-router';
import { mainCardResource } from '@/resources/card-resource';
import MainCard from '@/components/MainCard.vue';
import BackToTop from '@/components/utility/BackToTop.vue';
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
        const similarMovie = reactive({ result: [], isLoading: true, isError: false });
        const page = ref();
        const totalPage = ref();
        const route = useRoute();
        const infinite = ref(document);
        provide('detailLink', '/movie/detail');

        const getSimilarMovie = async () => {
            const query = {
                page: page.value,
            };
            try {
                const result = await MovieService.getSimilar(route.params.id, query);
                const { results } = result.data;
                page.value = result.data.page;
                totalPage.value = result.data.total_pages;
                const data = mainCardResource(results);
                similarMovie.result = [...similarMovie.result, ...data];
                similarMovie.isLoading = false;
                similarMovie.isError = false;
            } catch {
                similarMovie.isError = true;
            }
        };

        const isScreenLargerThanContent = () => {
            const target = document.documentElement;
            const largeScreen = target.scrollHeight - target.scrollTop === target.clientHeight;
            if (largeScreen && page.value < totalPage.value) {
                page.value += 1;
                getSimilarMovie();
            }
        };

        useInfiniteScroll(
            infinite,
            () => {
                if (page.value < totalPage.value) {
                    page.value += 1;
                    getSimilarMovie();
                }
            },
            { distance: 500 }
        );
        onMounted(getSimilarMovie);
        onUpdated(isScreenLargerThanContent);
        return { similarMovie };
    },
};
</script>
