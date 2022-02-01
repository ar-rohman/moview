<template>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
        <div class="w-full md:w-2/3">
            <BaseCarousel :data="releaseMovie.result" pagination navigation />
            <div class="mt-10">
                <carousel-card>
                    <div class="flex gap-x-4">
                        <button
                            v-for="genre in movieGenre.genres"
                            :key="genre.id"
                            class="px-4 py-2 rounded-2xl whitespace-nowrap border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:text-white focus-visible:ring-red-400 focus-visible:ring-2"
                            @click="gotoMovieGenre(genre.name, genre.id)">
                            {{ genre.name }}
                        </button>
                    </div>
                </carousel-card>
            </div>
            <ListCarousel
                title="Trending"
                :data="trendingMovie.result"
                see-more-link="/movie/trending"
                page-title="Trending Movie" />
            <ListCarousel
                title="Now Playing"
                :data="nowPlaying.result"
                see-more-link="/movie/now-playing" />
            <ListCarousel
                title="Upcoming Movies"
                :data="upcomingMovie.result"
                see-more-link="/movie/upcoming" />
        </div>
        <div class="w-full md:w-1/3 flex flex-col gap-10">
            <SidebarList
                :data="popularMovie.result"
                title="Popular Movies"
                see-more-link="/movie/popular" />
            <SidebarList
                :data="topRatedMovie.result"
                title="Top Rated Movies"
                see-more-link="/movie/top-rated" />
            <SidebarList
                :data="freeToWatch.result"
                title="Free To Watch"
                see-more-link="/movie/free" />
        </div>
    </div>
</template>

<script>
import MovieService from '@/services/MovieService';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { isLetter } from '../utils/stringManipulation';
import BaseCarousel from '../components/carousel/BaseCarousel.vue';
import CarouselCard from '../components/CarouselCard.vue';
import ListCarousel from '../components/ListCarousel.vue';
import SidebarList from '../components/SidebarList.vue';

export default {
    components: {
        BaseCarousel,
        ListCarousel,
        CarouselCard,
        SidebarList,
    },
    setup() {
        const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
        const trendingMovie = reactive({});
        const movieGenre = reactive({});
        const nowPlaying = reactive({});
        const upcomingMovie = reactive({});
        const popularMovie = reactive({});
        const topRatedMovie = reactive({});
        const freeToWatch = reactive({});
        const releaseMovie = reactive({});
        const router = useRouter();

        const isImageExist = (firstImage, secondImage) => {
            if (firstImage) {
                return `${imageBaseUrl}original${firstImage}`;
            } else if (secondImage) {
                return `${imageBaseUrl}original${secondImage}`;
            } else {
                return 'https://via.placeholder.com/1280x320/a83244/808080?text=Dummy Image';
            }
        };

        const getReleaseMovie = async () => {
            let today = new Date();
            today = today.toISOString().split('T')[0];
            let oneWeekAgo = new Date(Date.now() - 604800000); // 7*24*60*60*1000
            oneWeekAgo = oneWeekAgo.toISOString().split('T')[0];
            const param = {
                include_adult: false,
                'primary_release_date.gte': oneWeekAgo,
                'primary_release_date.lte': today,
            };
            const result = await MovieService.getDiscover(param);
            const { results } = result.data;
            let data = results.filter((item) => item.backdrop_path !== null);
            data = data.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: `${imageBaseUrl}original${item.backdrop_path}`,
                };
            });
            releaseMovie.result = data.slice(0, 5);
        };

        const getMovieGenre = async () => {
            const result = await MovieService.getGenre();
            const { data } = result;
            movieGenre.genres = data.genres;
        };

        const getTrendingMovie = async () => {
            const result = await MovieService.getTrendingByDay();
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
            trendingMovie.result = data;
        };

        const getNowPlaying = async () => {
            const result = await MovieService.getNowPlaying();
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
            const result = await MovieService.getUpcoming();
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

        const getPopularMovie = async () => {
            const result = await MovieService.getPopular();
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_average: item.vote_average,
                };
            });
            popularMovie.result = data.slice(0, 3);
        };

        const getTopRatedMovie = async () => {
            const result = await MovieService.getTopRated();
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_average: item.vote_average,
                };
            });
            topRatedMovie.result = data.slice(0, 3);
        };

        const getFreeToWatch = async () => {
            const param = {
                include_adult: false,
                watch_region: 'ID', // TODO
                with_watch_monetization_types: 'free',
            };
            const result = await MovieService.getDiscover(param);
            const { results } = result.data;
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_average: item.vote_average,
                };
            });
            freeToWatch.result = data.slice(0, 3);
        };

        const gotoMovieGenre = (name, id) => {
            const genreName = name.replace(/ /g, '-').toLowerCase();
            router.push({ path: `/movie/genre/${genreName}/${id}` });
        };

        onMounted(getReleaseMovie);
        onMounted(getMovieGenre);
        onMounted(getTrendingMovie);
        onMounted(getNowPlaying);
        onMounted(getUpcomingMovie);
        onMounted(getPopularMovie);
        onMounted(getTopRatedMovie);
        onMounted(getFreeToWatch);

        return {
            releaseMovie,
            movieGenre,
            trendingMovie,
            nowPlaying,
            upcomingMovie,
            popularMovie,
            topRatedMovie,
            freeToWatch,
            gotoMovieGenre,
        };
    },
};
</script>
