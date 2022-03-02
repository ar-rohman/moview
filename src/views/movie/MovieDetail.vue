<template>
    <MovieDetailSkeleton v-if="movieDetail.isLoading" />
    <template v-else-if="movieDetail.isError">
        <!-- TODO -->
        <div class="text-center">
            <h1 class="text-2xl font-semibold">ERROR</h1>
            <p>{{ movieDetail.errorCode }}</p>
            <p>{{ movieDetail.errorMessage }}</p>
        </div>
    </template>
    <div v-else class="flex flex-col gap-y-10 relative">
        <div class="relative -mt-[75px] -mx-4 sm:-mx-10">
            <img
                :src="movieDetail.result.backdrop"
                :alt="movieDetail.result.title"
                class="aspect-video w-full object-cover object-top" />
            <div class="absolute inset-0 -bottom-px">
                <div
                    class="bg-gradient-to-b from-white/20 via-white/90 to-white w-full h-full"></div>
            </div>
        </div>
        <div class="absolute top-3/4 md:top-1/2 lg:top-1/4 w-full">
            <div class="flex flex-col gap-y-10 mb-10">
                <div class="flex justify-between pb-4 items-center">
                    <div>
                        <RatingCount
                            text-class="text-sm font-semibold text-gray-700"
                            :vote-average="movieDetail.result.vote_average"
                            :vote-count="movieDetail.result.vote_count" />
                    </div>
                    <div>
                        <button
                            v-if="!video.isLoading && !video.isError && video.result"
                            class="-translate-x-1/2 border-2 border-red-500 text-red-500 rounded-xl py-2 px-6 flex shadow-md hover:border-transparent hover:bg-red-600 hover:text-white focus:bg-red-700 focus:outline-none focus:border-transparent focus-visible:ring-red-400 focus-visible:ring-2 focus:text-white"
                            @click="showVideo">
                            <BaseIcon name="play" />
                        </button>
                    </div>
                    <div class="flex gap-x-4 sm:gap-x-8 items-center">
                        <div
                            v-if="movieDetail.result.adult"
                            class="font-bold border-2 border-red-500 py-2 px-1.5 rounded-full text-red-500">
                            18+
                        </div>
                        <ToggleWatchlist :data="movieDetail.result" />
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
                    <div class="w-full md:w-2/3">
                        <div class="flex gap-4">
                            <img
                                :src="movieDetail.result.poster"
                                :alt="movieDetail.result.title"
                                class="aspect-[2/3] h-full rounded-xl object-cover object-center" />
                            <div class="flex flex-col gap-4">
                                <div class="flex flex-col gap-y-2">
                                    <div class="font-semibold sm:font-bold sm:text-xl">
                                        {{ movieDetail.result.title }}
                                    </div>
                                    <div
                                        class="flex gap-x-4 divide-x divide-gray-700 text-gray-500 text-sm font-semibold">
                                        <div class="flex gap-x-2 items-center">
                                            <BaseIcon name="calendarOutline" size="w-5 h-5" />
                                            {{ movieDetail.result.release }}
                                        </div>
                                        <div class="pl-2 flex gap-x-2 items-center">
                                            <BaseIcon name="clockOutline" size="w-5 h-5" />
                                            {{ movieDetail.result.runtime }}
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-2 flex-wrap">
                                    <template
                                        v-for="item in movieDetail.result.genres"
                                        :key="item.id">
                                        <button
                                            class="px-4 py-1 border border-gray-500 rounded-full text-sm font-semibold hover:border-red-500 select-none hover:text-red-500 focus:text-white focus:bg-red-500 focus:border-transparent focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                                            @click="gotoMovieGenre(item.name, item.id)">
                                            {{ item.name }}
                                        </button>
                                    </template>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col lg:flex-row gap-10 mt-6">
                            <div class="w-full lg:w-2/3 flex flex-col gap-y-10">
                                <div v-if="movieDetail.result.original_title">
                                    <div class="font-semibold mb-2">Original title</div>
                                    <p>{{ movieDetail.result.original_title }}</p>
                                </div>
                                <div>
                                    <div class="font-semibold mb-2">Overview</div>
                                    <p>{{ movieDetail.result.overview }}</p>
                                </div>
                                <UserReview :data="review" />
                            </div>
                            <div class="w-full lg:w-1/3">
                                <PeopleList :data="theCast" title="Cast" />
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3">
                        <SidebarList
                            :data="recomendation"
                            title="Recommendations"
                            :see-more-link="`/movie/recommendation/${movieDetail.result.id}`" />
                    </div>
                </div>
                <ListCarousel
                    title="More like this"
                    :data="similarMovie"
                    :see-more-link="`/movie/similar/${movieDetail.result.id}`" />
            </div>
        </div>
        <VideoTrailer v-if="showVideo" :id="video.result" />
    </div>
</template>
<script>
import { onMounted, onUnmounted, reactive, watch, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { emitter } from '@/utils/emitter';
import { useHead } from '@vueuse/head';
import MovieService from '@/services/movie-service';
import { useGenreStore } from '@/stores';
import { movieDetailResource } from '@/resources/movie-detail-resource';
import { mainCardResource, sidebarCardResource } from '@/resources/card-resource';
import { videoResource } from '@/resources/video-resource';
import { peopleListResource } from '@/resources/people-resource';
import { reviewResource } from '@/resources/review-resource';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import ListCarousel from '@/components/ListCarousel.vue';
import UserReview from '@/components/UserReview.vue';
import RatingCount from '@/components/RatingCount.vue';
import SidebarList from '@/components/SidebarList.vue';
import PeopleList from '@/components/PeopleList.vue';
import MovieDetailSkeleton from '@/components/skeleton/MovieDetailSkeleton.vue';
import VideoTrailer from '@/components/VideoTrailer.vue';
import ToggleWatchlist from '@/components/utility/ToggleWatchlist.vue';

export default {
    components: {
        ListCarousel,
        SidebarList,
        UserReview,
        RatingCount,
        PeopleList,
        BaseIcon,
        MovieDetailSkeleton,
        VideoTrailer,
        ToggleWatchlist,
    },
    provide: { detailLink: '/movie/detail' },
    setup() {
        const router = useRouter();
        const route = useRoute();

        const genreStore = useGenreStore();
        const movieDetail = reactive({
            result: {},
            isLoading: true,
            isError: false,
            errorCode: null,
            errorMessage: null,
        });
        const recomendation = reactive({
            result: {},
            isLoading: true,
            isError: false,
            isMore: false,
        });
        const similarMovie = reactive({
            result: {},
            isLoading: true,
            isError: false,
            isMore: false,
        });
        const theCast = reactive({ result: {}, isLoading: true, isError: false });
        const review = reactive({ result: {}, isLoading: true, isError: false });
        const video = reactive({ result: null, isLoading: true, isError: false });

        const getMovieDetail = async () => {
            try {
                const result = await MovieService.getDetail(route.params.id);
                const { data } = result;
                movieDetail.result = movieDetailResource(data);
                movieDetail.isLoading = false;
                movieDetail.isError = false;
                route.meta.pageName = data.title;
            } catch (error) {
                movieDetail.isError = true;
                movieDetail.isLoading = false;
                movieDetail.errorCode = error.response.status;
                movieDetail.errorMessage = error.response.data.status_message;
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
                recomendation.result = sidebarCardResource(data.slice(0, 4));
                recomendation.isLoading = false;
                recomendation.isError = false;
                recomendation.isMore = data.length > 3;
            } catch (error) {
                recomendation.isError = true;
            }
        };
        const getSimilarMovie = async () => {
            try {
                const result = await MovieService.getSimilar(route.params.id);
                const { results } = result.data;
                const data = mainCardResource(results);
                similarMovie.result = data;
                similarMovie.isLoading = false;
                similarMovie.isError = false;
                similarMovie.isMore = result.data.total_pages > result.data.page;
            } catch (error) {
                similarMovie.isError = true;
            }
        };
        const getCast = async () => {
            try {
                const result = await MovieService.getCredit(route.params.id);
                const { cast } = result.data;
                theCast.result = peopleListResource(cast.slice(0, 6));
                theCast.isLoading = false;
                theCast.isError = false;
            } catch (error) {
                theCast.isError = true;
            }
        };
        const getReview = async () => {
            try {
                const result = await MovieService.getReview(route.params.id);
                const { results } = result.data;
                const data = reviewResource(results);
                review.result = data.reverse();
                review.isLoading = false;
                review.isError = false;
            } catch (error) {
                review.isError = true;
            }
        };
        const getVideo = async () => {
            try {
                const result = await MovieService.getVideo(route.params.id);
                const { results } = result.data;
                const data = videoResource(results);
                video.result = data;
                video.isLoading = false;
                video.isError = false;
            } catch (error) {
                video.isError = true;
            }
        };

        emitter.on('reload-list-carousel', () => getSimilarMovie());
        emitter.on('reload-sidebar-list', () => getRecomendation());

        const showVideo = () => {
            emitter.emit('show-trailer-video');
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

        useHead({
            title: computed(() => `${movieDetail.result.title} - ${import.meta.env.VITE_APP_NAME}`),
            meta: [
                {
                    name: `description`,
                    content: computed(() => movieDetail.result.overview),
                },
                {
                    property: 'og:title',
                    content: computed(
                        () => `${movieDetail.result.title} - ${import.meta.env.VITE_APP_NAME}`
                    ),
                },
                {
                    property: 'og:description',
                    content: computed(() => movieDetail.result.overview),
                },
                {
                    property: 'og:image',
                    content: computed(() => movieDetail.result.poster),
                },
            ],
        });

        const fetchData = () => {
            getMovieDetail();
            getRecomendation();
            getSimilarMovie();
            getCast();
            getReview();
            getVideo();
        };

        watch(
            () => route.params.id,
            (newId) => {
                if (route.name === 'movie-detail' && newId) {
                    movieDetail.isLoading = true;
                    recomendation.isLoading = true;
                    similarMovie.isLoading = true;
                    theCast.isLoading = true;
                    review.isLoading = true;
                    video.isLoading = true;
                    showVideo.value = false;
                    fetchData();
                }
            }
        );

        onMounted(getMovieGenreStore);
        onMounted(fetchData);
        onUnmounted(() => emitter.off('show-trailer-video'));
        return {
            router,
            movieDetail,
            recomendation,
            similarMovie,
            theCast,
            review,
            video,
            showVideo,
            gotoMovieGenre,
        };
    },
};
</script>
