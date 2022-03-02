<template>
    <div class="font-semibold md:text-lg mb-3">{{ pageTitle }}</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-if="movieByGenre.isLoading">
            <MainCardSkeleton v-for="i in 20" :key="i" />
        </template>
        <template v-else>
            <template v-for="item in movieByGenre.result" :key="item.id">
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
import { useRoute } from 'vue-router';
import { useInfiniteScroll } from '@vueuse/core';
import { mainCardResource } from '@/resources/card-resource';
import { titleCase } from '@/utils/string';
import MainCard from '@/components/MainCard.vue';
import BackToTop from '@/components/utility/BackToTop.vue';
import MovieService from '@/services/movie-service';
import MainCardSkeleton from '@/components/skeleton/MainCardSkeleton.vue';

export default {
    components: {
        MainCard,
        BackToTop,
        MainCardSkeleton,
    },
    setup() {
        const movieByGenre = reactive({ result: [], isLoading: true, isError: false });
        const page = ref();
        const totalPage = ref();
        const genre = ref();
        const infinite = ref(document);
        const route = useRoute();
        const pageTitle = ref();
        const title = route.params.genre.replace(/-/g, ' ');
        pageTitle.value = `${titleCase(title)} Movies`;
        provide('detailLink', '/movie/detail');

        const getMovieByGenre = async () => {
            const query = {
                with_genres: genre.value,
                page: page.value,
            };
            try {
                const result = await MovieService.getDiscover(query);
                const { results } = result.data;
                page.value = result.data.page;
                totalPage.value = result.data.total_pages;
                const data = mainCardResource(results);
                movieByGenre.result = [...movieByGenre.result, ...data];
                movieByGenre.isLoading = false;
                movieByGenre.isError = false;
            } catch {
                movieByGenre.isError = true;
            }
        };

        const isScreenLargerThanContent = () => {
            const target = document.documentElement;
            const largeScreen = target.scrollHeight - target.scrollTop === target.clientHeight;
            if (largeScreen && page.value < totalPage.value) {
                page.value += 1;
                getMovieByGenre();
            }
        };

        useInfiniteScroll(
            infinite,
            () => {
                if (page.value < totalPage.value) {
                    page.value += 1;
                    getMovieByGenre();
                }
            },
            { distance: 500 }
        );
        onMounted(getMovieByGenre);
        onUpdated(isScreenLargerThanContent);
        return { movieByGenre, pageTitle };
    },
};
</script>
