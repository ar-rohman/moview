<template>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
        <div class="w-full md:w-2/3">
            <BaseCarousel :data="releaseMovie.result" pagination navigation />
            <div class="mt-10">
                <carousel-card>
                    <div class="flex gap-x-4">
                        <button
                            v-for="genre in movieGenre"
                            :key="genre.id"
                            class="px-4 py-2 rounded-2xl whitespace-nowrap border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:text-white focus-visible:ring-red-400 focus-visible:ring-2"
                            @click="gotoMovieGenre(genre.name, genre.id)">
                            {{ genre.name }}
                        </button>
                    </div>
                </carousel-card>
            </div>
            <HeroSection :data="heroData.result" />
            <ListCarousel
                title="Trending Movie"
                :data="trendingMovie"
                see-more-link="/movie/trending" />
            <ListCarousel
                title="Now Playing"
                :data="nowPlaying"
                see-more-link="/movie/now-playing" />
            <ListCarousel
                title="Upcoming Movies"
                :data="upcomingMovie"
                see-more-link="/movie/upcoming" />
        </div>
        <div class="w-full md:w-1/3 flex flex-col gap-12">
            <SidebarList
                :data="popularMovie"
                title="Popular Movies"
                see-more-link="/movie/popular" />
            <SidebarList
                :data="topRatedMovie"
                title="Top Rated Movies"
                see-more-link="/movie/top-rated" />
            <SidebarList :data="freeToWatch" title="Free To Watch" see-more-link="/movie/free" />
        </div>
    </div>
</template>

<script>
import MovieService from '@/services/MovieService';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGenreStore } from '@/stores';
import { useCountryCodeStore } from '@/stores/country';
import { mainCardResource, sidebarCardResource } from '@/resources/card-resource';
import { heroResource } from '@/resources/hero-resource';
import BaseCarousel from '@/components/carousel/BaseCarousel.vue';
import CarouselCard from '@/components/CarouselCard.vue';
import ListCarousel from '@/components/ListCarousel.vue';
import SidebarList from '@/components/SidebarList.vue';
import HeroSection from '@/components/HeroSection.vue';

export default {
    components: {
        BaseCarousel,
        ListCarousel,
        CarouselCard,
        SidebarList,
        HeroSection,
    },
    provide: { detailLink: '/movie/detail' },
    setup() {
        const trendingMovie = reactive({ result: {}, isLoading: true, isError: false });
        const movieGenre = ref();
        const heroData = reactive({});
        const nowPlaying = reactive({ result: {}, isLoading: true, isError: false });
        const upcomingMovie = reactive({ result: {}, isLoading: true, isError: false });
        const popularMovie = reactive({ result: {}, isLoading: true, isError: false });
        const topRatedMovie = reactive({ result: {}, isLoading: true, isError: false });
        const freeToWatch = reactive({ result: {}, isLoading: true, isError: false });
        const releaseMovie = reactive({});
        const router = useRouter();
        const genreStore = useGenreStore();
        const countryCodeStore = useCountryCodeStore();

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
            const data = results.filter((item) => item.backdrop_path !== null);
            releaseMovie.result = heroResource(data.slice(0, 5));
            heroData.result = heroResource(data.slice(5, 6))[0];
        };

        const getMovieGenre = async () => {
            await genreStore.getMovieGenreStore();
            movieGenre.value = genreStore.movieGenre;
        };

        const getGenreName = (arrayGenreId) => {
            const genreName = [];
            for (const id of arrayGenreId) {
                const genre = genreStore.getMovieGenreById(id);
                genreName.push(genre);
            }
            return genreName.join(', ');
        };

        const getTrendingMovie = async () => {
            try {
                const result = await MovieService.getTrendingByDay();
                const { results } = result.data;
                const data = mainCardResource(results);
                trendingMovie.result = data;
                trendingMovie.isLoading = false;
                trendingMovie.isError = false;
            } catch (error) {
                trendingMovie.isError = true;
            }
        };

        const getNowPlaying = async () => {
            try {
                const result = await MovieService.getNowPlaying();
                const { results } = result.data;
                const data = mainCardResource(results);
                nowPlaying.result = data;
                nowPlaying.isLoading = false;
                nowPlaying.isError = false;
            } catch (error) {
                nowPlaying.isError = true;
            }
        };

        const getUpcomingMovie = async () => {
            try {
                const result = await MovieService.getUpcoming();
                const { results } = result.data;
                const data = mainCardResource(results);
                upcomingMovie.result = data;
                upcomingMovie.isLoading = false;
                upcomingMovie.isError = false;
            } catch (error) {
                upcomingMovie.isError = true;
            }
        };

        const getPopularMovie = async () => {
            try {
                const result = await MovieService.getPopular();
                const { results } = result.data;
                const data = results.map((item) => {
                    const genre = getGenreName(item.genre_ids.slice(0, 2));
                    return { ...item, genre_name: genre };
                });
                popularMovie.result = sidebarCardResource(data.slice(0, 4));
                popularMovie.isLoading = false;
                popularMovie.isError = false;
            } catch (error) {
                popularMovie.isError = true;
            }
        };

        const getTopRatedMovie = async () => {
            try {
                const result = await MovieService.getTopRated();
                const { results } = result.data;
                const data = results.map((item) => {
                    const genre = getGenreName(item.genre_ids.slice(0, 2));
                    return { ...item, genre_name: genre };
                });
                topRatedMovie.result = sidebarCardResource(data.slice(0, 3));
                topRatedMovie.isLoading = false;
                topRatedMovie.isError = false;
            } catch (error) {
                topRatedMovie.isError = true;
            }
        };

        const getFreeToWatch = async () => {
            try {
                const param = {
                    include_adult: false,
                    watch_region: await countryCodeStore.getCountryCode(),
                    with_watch_monetization_types: 'free',
                };
                const result = await MovieService.getDiscover(param);
                const { results } = result.data;
                const data = results.map((item) => {
                    const genre = getGenreName(item.genre_ids.slice(0, 2));
                    return { ...item, genre_name: genre };
                });
                freeToWatch.result = sidebarCardResource(data.slice(0, 3));
                freeToWatch.isLoading = false;
                freeToWatch.isError = false;
            } catch (error) {
                freeToWatch.isError = true;
            }
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
            heroData,
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
