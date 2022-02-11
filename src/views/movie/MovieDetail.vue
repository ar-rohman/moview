<template>
    <template v-if="movieDetail.detail.isError">
        <div class="text-center">
            <h1 class="text-2xl font-semibold">
                <BaseIcon name="error" class="text-red-500" /><!-- TODO -->
                <span class="text-red-500">
                    {{ movieDetail.detail.errorMessage }}
                </span>
            </h1>
        </div>
    </template>
    <template v-else>
        <div class="relative -mt-4 -mx-4 sm:-mx-10">
            <img
                :src="movieDetail.detail.data.backdrop"
                :alt="movieDetail.detail.data.title"
                class="h-80 w-full object-cover object-center" />
            <div class="absolute inset-0">
                <div class="bg-gradient-to-b from-white/20 to-white w-full h-full">
                    <div class="h-full flex flex-col justify-between p-4 sm:px-10">
                        <div class="flex justify-between">
                            <BackToPervious
                                display-text-after="275"
                                :text="movieDetail.detail.data.title"
                                styles="text-black" />
                            <div class="flex items-center mb-4">
                                <button
                                    class="text-gray-800 bg-white/50 rounded-full p-2 block hover:bg-white/70 focus:bg-white"
                                    @click="shareMovie">
                                    <BaseIcon name="shareOutline" />
                                </button>
                            </div>
                        </div>
                        <div class="flex justify-between pb-4">
                            <RatingCount
                                text-class="text-sm font-semibold text-gray-700"
                                :vote-average="movieDetail.detail.data.vote_average"
                                :vote-count="movieDetail.detail.data.vote_count" />
                            <div class="flex gap-x-4 sm:gap-x-8 items-center">
                                <div
                                    v-if="movieDetail.detail.data.adult"
                                    class="font-bold border-2 border-red-500 py-2 px-1.5 rounded-full text-red-500">
                                    18+
                                </div>
                                <button
                                    class="bg-red-500 rounded-xl p-3 flex shadow-md hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                                    title="Add to watchlist">
                                    <BaseIcon name="bookmarkOutline" color="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col md:flex-row gap-10 lg:gap-20 mt-10">
            <div class="w-full md:w-2/3">
                <div class="flex gap-4">
                    <img
                        :src="movieDetail.detail.data.poster"
                        :alt="movieDetail.detail.data.title"
                        class="h-[128px] w-[96px] rounded-3xl object-cover object-center" />
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-y-2">
                            <div class="font-semibold sm:font-bold sm:text-xl">
                                {{ movieDetail.detail.data.title }}
                            </div>
                            <div
                                class="flex gap-x-4 divide-x divide-gray-700 text-gray-500 text-sm font-semibold">
                                <div class="flex gap-x-2 items-center">
                                    <BaseIcon name="calendarOutline" size="w-5 h-5" />
                                    {{ movieDetail.detail.data.release }}
                                </div>
                                <div class="pl-2 flex gap-x-2 items-center">
                                    <BaseIcon name="clockOutline" size="w-5 h-5" />
                                    {{ movieDetail.detail.data.runtime }}
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-2 flex-wrap">
                            <template v-for="item in movieDetail.detail.data.genres" :key="item.id">
                                <button
                                    class="px-4 py-1 border rounded-full text-sm font-semibold hover:border-red-500 hover:text-red-500 focus:text-white focus:bg-red-500 focus:border-transparent focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                                    @click="gotoMovieGenre(item.name, item.id)">
                                    {{ item.name }}
                                </button>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-10 mt-6">
                    <div class="w-full lg:w-2/3">
                        <div v-if="movieDetail.detail.data.original_title" class="text-sm mb-4">
                            Original title: {{ movieDetail.detail.data.original_title }}
                        </div>
                        <div class="font-semibold mb-2">Overview</div>
                        <p>
                            {{ movieDetail.detail.data.overview }}
                        </p>
                        <template v-if="movieReview.review.isLoading">
                            <div class="">Loading..</div>
                        </template>
                        <template v-else-if="movieReview.review.isError">
                            <div class="">Error please reload</div>
                        </template>
                        <UserReview v-else :data="movieReview.review.result" />
                    </div>
                    <div class="w-full lg:w-1/3">
                        <PeopleList :data="castMovie.cast" title="Cast" />
                    </div>
                </div>
            </div>
            <div class="w-full md:w-1/3">
                <SidebarList
                    :data="recomendation.recomen"
                    title="Recommendations"
                    :see-more-link="`/movie/recommendation/${movieDetail.detail.data.id}`" />
            </div>
        </div>
        <ListCarousel
            title="More like this"
            :data="similarMovie.similar"
            :see-more-link="`/movie/similar/${movieDetail.detail.data.id}`" />
    </template>
</template>
<script>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MovieService from '@/services/MovieService';
import { useGenreStore } from '@/stores';
import { movieDetailResource } from '@/resources/movie-detail-resource';
import { mainCardResource, sidebarCardResource } from '@/resources/card-resource';
import { peopleListResource } from '@/resources/people-resource';
import { reviewResource } from '@/resources/review-resource';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import ListCarousel from '@/components/ListCarousel.vue';
import UserReview from '@/components/UserReview.vue';
import RatingCount from '@/components/RatingCount.vue';
import SidebarList from '@/components/SidebarList.vue';
import PeopleList from '@/components/PeopleList.vue';
import BackToPervious from '@/components/BackToPervious.vue';

export default {
    components: {
        ListCarousel,
        SidebarList,
        UserReview,
        RatingCount,
        PeopleList,
        BackToPervious,
        BaseIcon,
    },
    provide: { detailLink: '/movie/detail' },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const genreStore = useGenreStore();
        const detail = { data: {}, isLoading: true, isError: false, errorMessage: '' };
        const movieDetail = reactive({ detail });
        const recomen = { result: {}, isLoading: true, isError: false };
        const recomendation = reactive({ recomen });
        const similar = { result: {}, isLoading: true, isError: false };
        const similarMovie = reactive({ similar });
        const cast = { result: {}, isLoading: true, isError: false };
        const castMovie = reactive({ cast });
        const review = { result: {}, isLoading: true, isError: false };
        const movieReview = reactive({ review });

        const getMovieDetail = async () => {
            try {
                const result = await MovieService.getDetail(route.params.id);
                const { data } = result;
                movieDetail.detail.data = movieDetailResource(data);
                movieDetail.detail.isLoading = false;
                movieDetail.detail.isError = false;
            } catch (error) {
                movieDetail.detail.isError = true;
            }
        };
        const getRecomendation = async () => {
            try {
                const result = await MovieService.getRecommendation(route.params.id);
                const { results } = result.data;
                const data = results.map((item) => {
                    const genre = getGenreName(item.genre_ids.slice(0, 2));
                    return { ...item, genre_name: genre };
                });
                recomendation.recomen.result = sidebarCardResource(data.slice(0, 3));
                recomendation.recomen.isLoading = false;
                recomendation.recomen.isError = false;
            } catch (error) {
                recomendation.recomen.isError = true;
                recomendation.recomen.errorMessage = error.message;
            }
        };
        const getSimilarMovie = async () => {
            try {
                const result = await MovieService.getSimilar(route.params.id);
                const { results } = result.data;
                const data = mainCardResource(results);
                similarMovie.similar.result = data;
                similarMovie.similar.isLoading = false;
                similarMovie.similar.isError = false;
            } catch (error) {
                similarMovie.similar.isError = true;
            }
        };
        const getCast = async () => {
            try {
                const result = await MovieService.getCredit(route.params.id);
                const { cast } = result.data;
                castMovie.cast.result = peopleListResource(cast.slice(0, 5));
                castMovie.cast.isLoading = false;
                castMovie.cast.isError = false;
            } catch (error) {
                castMovie.cast.isError = true;
            }
        };
        const getReview = async () => {
            try {
                const result = await MovieService.getReview(route.params.id);
                const { results } = result.data;
                const data = reviewResource(results);
                movieReview.review.result = data.reverse();
                movieReview.review.isLoading = false;
                movieReview.review.isError = false;
            } catch (error) {
                movieReview.review.isError = true;
            }
        };

        const gotoMovieGenre = (name, id) => {
            const genreName = name.replace(/ /g, '-').toLowerCase();
            router.push({ path: `/movie/genre/${genreName}/${id}` });
        };

        const getMovieGenreStore = async () => {
            if (!genreStore.movieGenre) {
                const result = await MovieService.getGenre();
                const { data } = result;
                genreStore.movieGenre = data.genres;
            }
        };

        const getGenreName = (arrayGenreId) => {
            const genreName = [];
            for (const id of arrayGenreId) {
                const genreStoreName = genreStore.getMovieGenreById(id);
                genreName.push(genreStoreName);
            }
            return genreName.join(', ');
        };

        const shareMovie = () => {
            navigator.share({
                title: 'MOVIEW',
                text: `Look ${movieDetail.result.title} movie at MOVIEW`,
                url: `${route.path}`,
            });
        };

        const fetchData = () => {
            getMovieDetail();
            getRecomendation();
            getSimilarMovie();
            getCast();
            getReview();
        };

        watch(
            () => route.params.id,
            (newId) => {
                if (route.name === 'movie-detail' && newId) fetchData();
            }
        );

        onMounted(getMovieGenreStore);
        onMounted(fetchData);
        return {
            router,
            movieDetail,
            recomendation,
            similarMovie,
            castMovie,
            movieReview,
            gotoMovieGenre,
            shareMovie,
        };
    },
};
</script>
