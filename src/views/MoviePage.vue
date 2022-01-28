<template>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
        <div class="w-full md:w-2/3 lg:w-3/4">
            <HeroSection :data="latestMovie.value" />
            <div class="mt-10">
                <carousel-card>
                    <div class="flex gap-x-4">
                        <button
                            v-for="genre in movieGenre.genres"
                            :key="genre.id"
                            class="px-4 py-2 rounded-2xl whitespace-nowrap border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:text-white focus-visible:ring-red-400 focus-visible:ring-2">
                            {{ genre.name }}
                        </button>
                    </div>
                </carousel-card>
            </div>
            <ListCarousel title="Now Playing" :data="nowPlaying.result" see-more-link="#" />
            <ListCarousel title="Upcoming Movies" :data="upcomingMovie.result" see-more-link="#" />
            <ListCarousel title="Discover Movies" :data="discoverMovie.result" see-more-link="#" />
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-10">
            <div>
                <div class="font-semibold mb-2">Popular Movies</div>
                <div class="flex flex-col zmd:flex-row gap-3">
                    <template v-for="item in popularMovie.result" :key="item.id">
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
            <div>
                <div class="font-semibold mb-2">Top Rated Movies</div>
                <div class="flex flex-col zmd:flex-row gap-3">
                    <template v-for="item in topRatedMovie.result" :key="item.id">
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
            <div>
                <div class="font-semibold mb-2">Free To Watch</div>
                <div class="flex flex-col zmd:flex-row gap-3">
                    <template v-for="item in freeToWatch.result" :key="item.id">
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
</template>

<script>
import API from '../services/API';
import { onMounted, reactive } from 'vue';
import { isLetter } from '../utils/stringManipulation';
import HeroSection from '../components/HeroSection.vue';
import SidebarCard from '../components/SidebarCard.vue';
import CarouselCard from '../components/CarouselCard.vue';
import ListCarousel from '../components/ListCarousel.vue';

export default {
    components: { HeroSection, SidebarCard, ListCarousel, CarouselCard },
    setup() {
        const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
        const latestMovie = reactive({});
        const movieGenre = reactive({});
        const nowPlaying = reactive({});
        const upcomingMovie = reactive({});
        const discoverMovie = reactive({});
        const popularMovie = reactive({});
        const topRatedMovie = reactive({});
        const freeToWatch = reactive({});

        const isImageExist = (firstImage, secondImage) => {
            if (firstImage) {
                return `${imageBaseUrl}original${firstImage}`;
            } else if (secondImage) {
                return `${imageBaseUrl}original${secondImage}`;
            } else {
                return 'https://via.placeholder.com/1280x320/a83244/808080?text=Dummy Image';
            }
        };
        const getLatestMovie = async () => {
            const result = await API.apiClient('movie/latest');
            const { data } = result;
            data.title = isLetter(data.original_title) ? data.original_title : data.title;
            data.image = isImageExist(data.backdrop_path, data.poster_path);
            latestMovie.value = data;
        };

        const getMovieGenre = async () => {
            const result = await API.apiClient('genre/movie/list');
            const { data } = result;
            movieGenre.genres = data.genres;
        };

        const getNowPlaying = async () => {
            const result = await API.apiClient('movie/now_playing');
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_count: item.vote_count,
                    vote_average: item.vote_average,
                };
            });
            nowPlaying.result = data;
        };
        const getUpcomingMovie = async () => {
            const result = await API.apiClient('movie/upcoming');
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_count: item.vote_count,
                    vote_average: item.vote_average,
                };
            });
            upcomingMovie.result = data;
        };
        const getDiscoverMovie = async () => {
            const param = {
                include_adult: false,
                with_original_language: 'id',
            };
            const result = await API.apiClient('discover/movie', param);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_count: item.vote_count,
                    vote_average: item.vote_average,
                };
            });
            discoverMovie.result = data;
        };
        const getPopularMovie = async () => {
            const result = await API.apiClient('movie/popular');
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_average: item.vote_average,
                };
            });
            popularMovie.result = data.slice(-3);
        };
        const getTopRatedMovie = async () => {
            const result = await API.apiClient('movie/top_rated');
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_average: item.vote_average,
                };
            });
            topRatedMovie.result = data.slice(-3);
        };
        const getFreeToWatch = async () => {
            const param = {
                include_adult: false,
                watch_region: 'ID',
                with_watch_monetization_types: 'free',
            };
            const result = await API.apiClient('discover/movie', param);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_average: item.vote_average,
                };
            });
            freeToWatch.result = data.slice(-3);
        };
        onMounted(getLatestMovie);
        onMounted(getMovieGenre);
        onMounted(getNowPlaying);
        onMounted(getUpcomingMovie);
        onMounted(getDiscoverMovie);
        onMounted(getPopularMovie);
        onMounted(getTopRatedMovie);
        onMounted(getFreeToWatch);

        return {
            latestMovie,
            movieGenre,
            nowPlaying,
            upcomingMovie,
            discoverMovie, //
            popularMovie,
            topRatedMovie,
            freeToWatch,
        };
    },
};
</script>
