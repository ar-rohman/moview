<template>
    <div class="font-semibold md:text-lg mb-3">{{ searchFor }}</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-if="searchMovie.isLoading">
            <MainCardSkeleton v-for="i in 20" :key="i" />
        </template>
        <template v-else>
            <template v-for="item in searchMovie.result" :key="item.id">
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
import { onMounted, provide, reactive, ref, onUpdated, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useInfiniteScroll } from '@vueuse/core';
import { mainCardResource } from '@/resources/card-resource';
import MainCard from '@/components/MainCard.vue';
import BackToTop from '@/components/utility/BackToTop.vue';
import SearchService from '@/services/search-service';
import MainCardSkeleton from '@/components/skeleton/MainCardSkeleton.vue';

export default {
    components: {
        MainCard,
        BackToTop,
        MainCardSkeleton,
    },
    setup() {
        const route = useRoute();
        const searchMovie = reactive({ result: [], isLoading: true, isError: false });
        const page = ref();
        const totalPage = ref();
        const searchQuery = ref(route.query.q);
        const searchFor = ref();
        const infinite = ref(document);
        provide('detailLink', '/movie/detail');

        const getSearchMovie = async () => {
            const query = {
                query: searchQuery.value,
                include_adult: false,
                page: page.value,
            };
            try {
                const result = await SearchService.searchMovie(query);
                const { results } = result.data;
                page.value = result.data.page;
                totalPage.value = result.data.total_pages;
                const data = mainCardResource(results);
                searchMovie.result = [...searchMovie.result, ...data];
                searchMovie.isLoading = false;
                searchMovie.isError = false;
                searchFor.value = results.length
                    ? `Result for ${searchQuery.value}`
                    : `No result found for ${searchQuery.value}. Try another keyword`;
            } catch {
                searchMovie.isError = true;
            }
        };

        const isScreenLargerThanContent = () => {
            const target = document.documentElement;
            const largeScreen = target.scrollHeight - target.scrollTop === target.clientHeight;
            if (largeScreen && page.value < totalPage.value) {
                page.value += 1;
                getSearchMovie();
            }
        };

        useInfiniteScroll(
            infinite,
            () => {
                if (page.value < totalPage.value) {
                    page.value += 1;
                    getSearchMovie();
                }
            },
            { distance: 500 }
        );

        watch(
            () => route.query.q,
            (newQuery) => {
                if (newQuery) {
                    searchMovie.result = [];
                    searchMovie.isLoading = true;
                    searchMovie.isError = false;
                    searchQuery.value = newQuery;
                    page.value = 1;
                    getSearchMovie();
                }
            }
        );

        onMounted(getSearchMovie);
        onUpdated(isScreenLargerThanContent);
        return { searchMovie, searchFor };
    },
};
</script>
