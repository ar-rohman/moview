<template>
    <div class="flex flex-col md:flex-row gap-10 mb-10">
        <div class="w-full md:w-7/12">
            <BaseCarousel :data="releaseMovie" pagination navigation />
        </div>
        <div class="w-full md:w-5/12">
            <HeroSection :data="releaseMovie" />
        </div>
    </div>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
        <div class="w-full md:w-2/3 flex flex-col gap-y-12">
            <GenreListCarousel :data="movieGenre" />
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
        <div class="w-full md:w-1/3 flex flex-col gap-10">
            <SidebarList
                :data="popularMovie"
                title="Popular Movies"
                see-more-link="/movie/popular" />
            <SidebarList
                :data="topRatedMovie"
                title="Top Rated Movies"
                see-more-link="/movie/top-rated" />
        </div>
    </div>
</template>

<script>
import MovieService from '@/services/movie-service';
import { onMounted, reactive } from 'vue';
import { useGenreStore } from '@/stores';
import { emitter } from '@/utils/emitter';
import { mainCardResource, sidebarCardResource } from '@/resources/card-resource';
import { heroResource } from '@/resources/hero-resource';
import BaseCarousel from '@/components/carousel/BaseCarousel.vue';
import ListCarousel from '@/components/ListCarousel.vue';
import SidebarList from '@/components/SidebarList.vue';
import HeroSection from '@/components/HeroSection.vue';
import GenreListCarousel from '@/components/GenreListCarousel.vue';

export default {
    components: {
        BaseCarousel,
        ListCarousel,
        SidebarList,
        HeroSection,
        GenreListCarousel,
    },
    provide: { detailLink: '/movie/detail' },
    setup() {
        const trendingMovie = reactive({
            result: {},
            isLoading: true,
            isError: false,
            isMore: false,
        });
        const movieGenre = reactive({ result: {}, isLoading: true });
        const releaseMovie = reactive({ carousel: {}, hero: {}, isLoading: true, isError: false });
        const nowPlaying = reactive({ result: {}, isLoading: true, isError: false, isMore: false });
        const upcomingMovie = reactive({
            result: {},
            isLoading: true,
            isError: false,
            isMore: false,
        });
        const popularMovie = reactive({
            result: {},
            isLoading: true,
            isError: false,
            isMore: false,
        });
        const topRatedMovie = reactive({
            result: {},
            isLoading: true,
            isError: false,
            isMore: false,
        });
        const genreStore = useGenreStore();

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
            try {
                const result = await MovieService.getDiscover(param);
                const { results } = result.data;
                const data = results.filter((item) => item.backdrop_path !== null);
                releaseMovie.carousel = heroResource(data.slice(0, 5));
                releaseMovie.hero = heroResource(data.slice(5, 7));
                releaseMovie.isLoading = false;
                releaseMovie.isError = false;
            } catch (error) {
                releaseMovie.isError = true;
            }
        };

        const getMovieGenre = async () => {
            await genreStore.getMovieGenreStore();
            movieGenre.result = genreStore.movieGenre;
            movieGenre.isLoading = genreStore.movieGenre ? false : true;
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
                trendingMovie.isMore = result.data.total_pages > result.data.page;
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
                nowPlaying.isMore = result.data.total_pages > result.data.page;
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
                upcomingMovie.isMore = result.data.total_pages > result.data.page;
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
                popularMovie.isMore = data.length > 4;
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
                topRatedMovie.result = sidebarCardResource(data.slice(0, 4));
                topRatedMovie.isLoading = false;
                topRatedMovie.isError = false;
                topRatedMovie.isMore = data.length > 3;
            } catch (error) {
                topRatedMovie.isError = true;
            }
        };

        emitter.on('reload-hero-carousel', () => {
            getReleaseMovie();
        });
        emitter.on('reload-list-carousel', () => {
            if (trendingMovie.isError) getTrendingMovie();
            if (nowPlaying.isError) getNowPlaying();
            if (upcomingMovie.isError) getUpcomingMovie();
        });
        emitter.on('reload-sidebar-list', () => {
            if (popularMovie.isError) getPopularMovie();
            if (topRatedMovie.isError) getTopRatedMovie();
        });

        onMounted(getReleaseMovie);
        onMounted(getMovieGenre);
        onMounted(getTrendingMovie);
        onMounted(getNowPlaying);
        onMounted(getUpcomingMovie);
        onMounted(getPopularMovie);
        onMounted(getTopRatedMovie);

        return {
            releaseMovie,
            movieGenre,
            trendingMovie,
            nowPlaying,
            upcomingMovie,
            popularMovie,
            topRatedMovie,
        };
    },
};
</script>
