<template>
    <div class="relative -mt-4">
        <img
            :src="movieDetail.result.backdrop"
            :alt="movieDetail.result.title"
            class="rounded-3xl h-80 w-full object-cover object-center" />
        <div class="absolute -inset-px">
            <div class="bg-gradient-to-b from-white/20 to-white w-full h-full">
                <div class="h-full flex flex-col justify-between p-4 ztext-white">
                    <div class="flex gap-x-4 text-black">
                        <button
                            class="h-6 w-6"
                            @click="router.back()"
                            v-html="arrowBackIcon"></button>
                        <div class="font-semibold">{{ movieDetail.result.title }}</div>
                    </div>
                    <div class="flex justify-between px-4 sm:px-10 pb-4">
                        <RatingCount
                            text-class="text-sm font-semibold text-gray-700"
                            :vote-average="movieDetail.result.vote_average"
                            :vote-count="movieDetail.result.vote_count" />
                        <div class="flex gap-x-4 sm:gap-x-8 items-center">
                            <div
                                v-if="movieDetail.result.adult"
                                class="font-bold border-2 border-red-500 py-2 px-1.5 rounded-full text-red-500">
                                18+
                            </div>
                            <button
                                class="bg-red-500 rounded-xl p-3 flex shadow-md hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                                title="Add to watchlist">
                                <div class="w-6 h-6 text-white" v-html="bookmarkOutlineIcon"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20 mt-10">
        <div class="w-full md:w-2/3 lg:w-3/4 zbg-blue-400">
            <div class="flex gap-4">
                <img
                    :src="movieDetail.result.poster"
                    :alt="movieDetail.result.title"
                    class="h-[128px] w-[96px] rounded-3xl object-cover object-center" />
                <div class="flex flex-col gap-4 justify-between">
                    <div class="flex flex-col gap-y-2">
                        <div class="font-semibold sm:font-bold sm:text-xl">
                            {{ movieDetail.result.title }}
                        </div>
                        <div
                            class="flex gap-x-4 divide-x divide-gray-700 text-gray-500 text-sm font-semibold">
                            <div class="flex gap-x-2 items-center">
                                <div class="h-5 w-5" v-html="calendarOutlineIcon"></div>
                                {{ movieDetail.result.release }}
                            </div>
                            <div class="pl-2 flex gap-x-2 items-center">
                                <div class="h-5 w-5" v-html="clockOutlineIcon"></div>
                                {{ movieDetail.result.runtime }}
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        <template v-for="item in movieDetail.result.genres" :key="item.id">
                            <div class="px-4 py-1 border rounded-full text-sm font-semibold">
                                {{ item.name }}
                            </div>
                        </template>
                    </div>
                    <div v-if="movieDetail.result.original_title" class="text-sm zhidden sm:block">
                        Original title: {{ movieDetail.result.original_title }}
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-10 mt-6">
                <div class="w-full lg:w-2/3">
                    <div class="font-semibold mb-2">Overview</div>
                    <div class="">
                        {{ movieDetail.result.overview }}
                    </div>
                    <UserReview :data="review.result" />
                </div>
                <div class="w-full lg:w-1/3">
                    <div class="font-semibold mb-4">Cast</div>
                    <div class="flex lg:flex-col gap-4 flex-wrap">
                        <template v-for="item in castMovie.result" :key="item.id">
                            <div class="flex items-center flex-col lg:flex-row gap-x-3">
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                    class="h-[50px] w-[50px] min-w-[50px] rounded-full object-cover object-center" />
                                <div
                                    class="flex flex-col flex-wrap items-center lg:items-start w-[80px] lg:w-full">
                                    <div class="line-clamp-1 text-xs lg:text-base font-semibold">
                                        {{ item.name }}
                                    </div>
                                    <div class="line-clamp-1 text-xs lg:text-sm text-gray-500">
                                        {{ item.character }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <button class="mt-4 text-sm font-semibold text-red-400 hover:text-red-600">
                            See more
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4">
            <div>
                <div class="font-semibold mb-2">Recommendations</div>
                <div class="flex flex-col zmd:flex-row gap-3">
                    <template v-for="item in recomendation.result" :key="item.id">
                        <SidebarCard
                            :id="item.id"
                            :title="item.title"
                            :image="item.image"
                            :vote-average="item.vote_average" />
                    </template>
                </div>
                <div class="mt-2">
                    <button class="bg-red-500 rounded-xl text-white px-6 py-2 w-full">
                        See more
                    </button>
                </div>
            </div>
        </div>
    </div>
    <ListCarousel title="More like this" :data="similarMovie.result" see-more-link="#" />
</template>
<script>
import { onMounted, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import API from '../services/API';
import { isLetter } from '../utils/stringManipulation';
import { timeFromNow } from '../utils/date';
import {
    arrowBackIcon,
    starHalfIcon,
    bookmarkOutlineIcon,
    clockOutlineIcon,
    calendarOutlineIcon,
} from '../components/icon';
import ListCarousel from '../components/ListCarousel.vue';
import SidebarCard from '../components/SidebarCard.vue';
import UserReview from '../components/UserReview.vue';
import RatingCount from '../components/RatingCount.vue';
import background from '../assets/images/background.png';

export default {
    components: { ListCarousel, SidebarCard, UserReview, RatingCount },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
        const result = {};
        const movieDetail = reactive({ result });
        const recomendation = reactive({});
        const similarMovie = reactive({});
        const castMovie = reactive({});
        const review = reactive({});
        // const twoStar = ref(null);
        // const oneStar = ref(null);
        // const zeroStar = ref(null);

        const isImageExist = (firstImage, secondImage) => {
            if (firstImage) {
                return `${imageBaseUrl}original${firstImage}`;
            } else if (secondImage) {
                return `${imageBaseUrl}original${secondImage}`;
            } else {
                return 'https://via.placeholder.com/1280x320/a83244/808080?text=Dummy Image';
            }
        };
        const getMovieDetail = async () => {
            const result = await API.apiClient(`movie/${route.params.id}`);
            const { data } = result;
            movieDetail.result = {
                id: data.id,
                title: isLetter(data.original_title) ? data.original_title : data.title,
                original_title: data.original_title === data.title ? '' : data.original_title,
                backdrop: data.backdrop_path
                    ? `${imageBaseUrl}original${data.backdrop_path}`
                    : background, // 'https://via.placeholder.com/1280x320/a83244/808080',
                poster: data.poster_path
                    ? `${imageBaseUrl}original${data.poster_path}`
                    : background, // 'https://via.placeholder.com/96x128/a83244/808080',
                overview: data.overview,
                genres: data.genres,
                release: data.release_date ? data.release_date.split('-')[0] : '',
                runtime: data.runtime,
                vote_average: data.vote_average,
                vote_count: data.vote_count,
                adult: data.adult,
            };
        };
        const getRecomendation = async () => {
            const result = await API.apiClient(`movie/${route.params.id}/recommendations`);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_count: item.vote_count,
                    vote_average: Number.parseFloat(item.vote_average).toFixed(1),
                };
            });
            recomendation.result = data.slice(0, 3);
        };
        const getSimilarMovie = async () => {
            const result = await API.apiClient(`movie/${route.params.id}/similar`);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_count: item.vote_count,
                    vote_average: Number.parseFloat(item.vote_average).toFixed(1),
                };
            });
            similarMovie.result = data;
        };
        const getCast = async () => {
            const result = await API.apiClient(`movie/${route.params.id}/credits`);
            const { cast } = result.data;
            const data = cast.map((item) => {
                return {
                    id: item.id,
                    name: isLetter(item.original_name) ? item.original_name : item.name,
                    character: item.character,
                    image: isImageExist(item.profile_path, ''),
                };
            });
            castMovie.result = data.slice(0, 5);
        };
        const checkIfImageFromExternalLink = (image) => {
            if (!image) return false;
            if (image.includes('/http')) {
                return true;
            } else {
                return false;
            }
        };
        const starCalculation = (starCount) => {
            const twoStar = Math.floor(starCount / 2);
            const oneStar = starCount % 2;
            const zeroStar = 5 - (twoStar + oneStar);
            return {
                two_star: twoStar,
                one_star: oneStar,
                zero_star: zeroStar,
            };
        };
        const getReview = async () => {
            const result = await API.apiClient(`movie/${route.params.id}/reviews`);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    name: item.author_details.name || item.author_details.username,
                    avatar: checkIfImageFromExternalLink(item.author_details.avatar_path)
                        ? item.author_details.avatar_path.substring(1)
                        : isImageExist(item.author_details.avatar_path, ''),
                    rating: item.author_details.rating,
                    content: item.content,
                    created_at: item.created_at,
                    star: starCalculation(item.author_details.rating),
                };
            });
            review.result = data.reverse();
        };
        onMounted(getMovieDetail);
        onMounted(getRecomendation);
        onMounted(getSimilarMovie);
        onMounted(getCast);
        onMounted(getReview);
        return {
            router,
            movieDetail,
            recomendation,
            similarMovie,
            castMovie,
            review,
            timeFromNow,
            arrowBackIcon,
            starHalfIcon,
            bookmarkOutlineIcon,
            clockOutlineIcon,
            calendarOutlineIcon,
        };
    },
};
</script>
