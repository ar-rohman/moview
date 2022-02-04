<template>
    <div class="relative -mt-4 -mx-4 sm:-mx-10">
        <img
            :src="movieDetail.result.backdrop"
            :alt="movieDetail.result.title"
            class="h-80 w-full object-cover object-center" />
        <div class="absolute inset-0">
            <div class="bg-gradient-to-b from-white/20 to-white w-full h-full">
                <div class="h-full flex flex-col justify-between p-4 sm:px-10">
                    <div class="flex gap-x-4 text-black">
                        <button
                            class="h-6 w-6"
                            @click="router.back()"
                            v-html="arrowBackIcon"></button>
                        <div class="font-semibold">{{ movieDetail.result.title }}</div>
                    </div>
                    <div class="flex justify-between pb-4">
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
        <div class="w-full md:w-2/3">
            <div class="flex gap-4">
                <img
                    :src="movieDetail.result.poster"
                    :alt="movieDetail.result.title"
                    class="h-[128px] w-[96px] rounded-3xl object-cover object-center" />
                <div class="flex flex-col gap-4">
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
                                {{ movieDetail.result.runtime }} mins
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        <template v-for="item in movieDetail.result.genres" :key="item.id">
                            <button
                                class="px-4 py-1 border rounded-full text-sm font-semibold hover:border-red-500 hover:text-red-500 focus:text-white focus:bg-red-500 focus:border-none focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                                @click="gotoMovieGenre(item.name, item.id)">
                                {{ item.name }}
                            </button>
                        </template>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-10 mt-6">
                <div class="w-full lg:w-2/3">
                    <div v-if="movieDetail.result.original_title" class="text-sm mb-4">
                        Original title: {{ movieDetail.result.original_title }}
                    </div>
                    <div class="font-semibold mb-2">Overview</div>
                    <p>
                        {{ movieDetail.result.overview }}
                    </p>
                    <UserReview v-if="review.result" :data="review.result" />
                </div>
                <div class="w-full lg:w-1/3">
                    <CastArtist :data="castMovie" />
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/3">
            <SidebarList
                :data="recomendation.result"
                title="Recommendations"
                :see-more-link="`/movie/recommendation/${movieDetail.result.id}`" />
        </div>
    </div>
    <ListCarousel
        title="More like this"
        :data="similarMovie.result"
        :see-more-link="`/movie/similar/${movieDetail.result.id}`" />
</template>
<script>
import { onMounted, reactive, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import MovieService from '@/services/MovieService';
import { isLetter } from '@/utils/string';
import { timeFromNow } from '@/utils/date';
import { isImageExist } from '@/utils/image';
import defaults from '@/utils/defaults';
import {
    arrowBackIcon,
    bookmarkOutlineIcon,
    clockOutlineIcon,
    calendarOutlineIcon,
} from '@/components/icon';
import ListCarousel from '@/components/ListCarousel.vue';
import UserReview from '@/components/UserReview.vue';
import RatingCount from '@/components/RatingCount.vue';
import SidebarList from '@/components/SidebarList.vue';
import CastArtist from '@/components/CastArtist.vue';
import backdropImage from '@/assets/images/backdrop.png';
import posterImage from '@/assets/images/poster.png';
import avatarImage from '@/assets/images/avatar.svg';

export default {
    components: { ListCarousel, SidebarList, UserReview, RatingCount, CastArtist },
    setup() {
        const router = useRouter();
        const route = useRoute();
        const result = {};
        const movieDetail = reactive({ result });
        const recomendation = reactive({});
        const similarMovie = reactive({});
        const castMovie = ref();
        const review = reactive({});

        const getMovieDetail = async () => {
            const result = await MovieService.getDetail(route.params.id);
            const { data } = result;
            movieDetail.result = {
                id: data.id,
                title: isLetter(data.original_title) ? data.original_title : data.title,
                original_title: data.original_title === data.title ? '' : data.original_title,
                backdrop: isImageExist({
                    firstImage: data.backdrop_path,
                    secondImage: data.poster_path,
                    thirdImage: backdropImage,
                    imageSize: defaults.backdropSize,
                }),
                poster: isImageExist({
                    firstImage: data.poster_path,
                    secondImage: data.backdrop_path,
                    thirdImage: posterImage,
                    imageSize: defaults.sidebarPosterSize,
                }),
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
            const result = await MovieService.getRecommendation(route.params.id);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist({
                        firstImage: item.poster_path,
                        secondImage: item.backdrop_path,
                        thirdImage: posterImage,
                        imageSize: defaults.sidebarPosterSize,
                    }),
                    vote_average: item.vote_average,
                    genre_id: item.genre_ids,
                };
            });
            recomendation.result = data.slice(0, 3);
        };
        const getSimilarMovie = async () => {
            const result = await MovieService.getSimilar(route.params.id);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist({
                        firstImage: item.poster_path,
                        secondImage: item.backdrop_path,
                        thirdImage: posterImage,
                        imageSize: defaults.mainPosterSize,
                    }),
                    vote_count: item.vote_count,
                    vote_average: item.vote_average,
                };
            });
            similarMovie.result = data;
        };
        const getCast = async () => {
            const result = await MovieService.getCredit(route.params.id);
            const { cast } = result.data;
            const data = cast.map((item) => {
                return {
                    id: item.id,
                    name: isLetter(item.original_name) ? item.original_name : item.name,
                    character: item.character,
                    image: isImageExist({
                        firstImage: item.profile_path,
                        secondImage: null,
                        thirdImage: avatarImage,
                        imageSize: defaults.profileSize,
                    }),
                };
            });
            castMovie.value = data;
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
            const result = await MovieService.getReview(route.params.id);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    name: item.author_details.name || item.author_details.username,
                    avatar: checkIfImageFromExternalLink(item.author_details.avatar_path)
                        ? item.author_details.avatar_path.substring(1)
                        : isImageExist({
                              firstImage: item.author_details.avatar_path,
                              secondImage: null,
                              thirdImage: avatarImage,
                              imageSize: defaults.profileSize,
                          }),
                    rating: item.author_details.rating,
                    content: item.content,
                    created_at: item.created_at,
                    star: starCalculation(item.author_details.rating),
                };
            });
            review.result = data.reverse();
        };

        const gotoMovieGenre = (name, id) => {
            const genreName = name.replace(/ /g, '-').toLowerCase();
            router.push({ path: `/movie/genre/${genreName}/${id}` });
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
                if (newId) fetchData();
            }
        );

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
            bookmarkOutlineIcon,
            clockOutlineIcon,
            calendarOutlineIcon,
            gotoMovieGenre,
        };
    },
};
</script>
