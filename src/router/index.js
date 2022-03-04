import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '@/views/movie/MoviePage.vue';

const routes = [
    {
        path: '/',
        name: 'movies',
        component: MoviePage,
        meta: {
            pageName: 'Movies',
            isShowNav: true,
            showBackgroundAfter: 5,
            showTextAfter: null,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/detail/:id',
        name: 'movie-detail',
        component: () => import('@/views/movie/MovieDetail.vue'),
        meta: {
            pageName: 'Movie Detail',
            isShowNav: false,
            showBackgroundAfter: 130,
            showTextAfter: 280,
            showSearch: false,
            showShare: true,
        },
    },
    {
        path: '/movie/upcoming',
        name: 'upcoming-movie',
        component: () => import('@/views/movie/UpcomingMovie.vue'),
        meta: {
            pageName: 'Upcoming Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/trending',
        name: 'trending-movie',
        component: () => import('@/views/movie/TrendingMovie.vue'),
        meta: {
            pageName: 'Trending Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/now-playing',
        name: 'now-playing-movie',
        component: () => import('@/views/movie/NowPlayingMovie.vue'),
        meta: {
            pageName: 'Now Playing Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/popular',
        name: 'popular-movie',
        component: () => import('@/views/movie/PopularMovie.vue'),
        meta: {
            pageName: 'Popular Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/top-rated',
        name: 'top-rated-movie',
        component: () => import('@/views/movie/TopRatedMovie.vue'),
        meta: {
            pageName: 'Top Rated Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/recommendation/:id',
        name: 'recommendation-movie',
        component: () => import('@/views/movie/RecommendationMovie.vue'),
        meta: {
            pageName: 'Recommendation Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/similar/:id',
        name: 'similar-movie',
        component: () => import('@/views/movie/SimilarMovie.vue'),
        meta: {
            pageName: 'Similar Movies',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/movie/genre/:genre/:id',
        name: 'movie-genre',
        component: () => import('@/views/movie/MovieGenre.vue'),
        meta: {
            pageName: 'Movie Genre',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/tv-show',
        name: 'tv-show',
        component: () => import('@/views/TVShowPage.vue'),
        meta: {
            pageName: 'TV Shows',
            isShowNav: true,
            showBackgroundAfter: 5,
            showTextAfter: null,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/SearchPage.vue'),
        meta: {
            pageName: 'Search',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/people/detail/:id',
        name: 'people-detail',
        component: () => import('@/views/people/PeopleDetail.vue'),
        meta: {
            pageName: 'Person Detail',
            isShowNav: false,
            showBackgroundAfter: 20,
            showTextAfter: 30,
            showSearch: false,
            showShare: false,
        },
    },
    {
        path: '/watchlist',
        name: 'watchlist',
        component: () => import('@/views/WatchlistPage.vue'),
        meta: {
            pageName: 'Watchlist',
            isShowNav: true,
            showBackgroundAfter: 5,
            showTextAfter: null,
            showSearch: true,
            showShare: false,
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutPage.vue'),
        meta: {
            pageName: 'About',
            isShowNav: true,
            showBackgroundAfter: 5,
            showTextAfter: null,
            showSearch: true,
            showShare: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

export default router;
