import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '@/views/MoviePage.vue';

const routes = [
    {
        path: '/',
        name: 'Movies',
        component: MoviePage,
        meta: { pageName: 'Movies', isShowHeader: true },
    },
    {
        path: '/tv-show',
        name: 'tv-show',
        component: () => import(/* webpackChunkName: "tv-show" */ '@/views/TVShowPage.vue'),
        meta: { pageName: 'TV Shows', isShowHeader: true },
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/MovieDetail.vue'),
        meta: { pageName: 'Detail', isShowHeader: false },
    },
    {
        path: '/movie/upcoming',
        name: 'Upcoming',
        component: () => import(/* webpackChunkName: "upcoming" */ '@/views/UpcomingMovie.vue'),
        meta: { pageName: 'Upcoming Movies', isShowHeader: false },
    },
    {
        path: '/movie/trending',
        name: 'Trending',
        component: () => import(/* webpackChunkName: "trending" */ '@/views/TrendingMovie.vue'),
        meta: { pageName: 'Trending Movies', isShowHeader: false },
    },
    {
        path: '/movie/now-playing',
        name: 'now-playing',
        component: () => import(/* webpackChunkName: "upcoming" */ '@/views/NowPlayingMovie.vue'),
        meta: { pageName: 'Now Playing Movies', isShowHeader: false },
    },
    {
        path: '/movie/popular',
        name: 'popular-movie',
        component: () => import(/* webpackChunkName: "popular-movie" */ '@/views/PopularMovie.vue'),
        meta: { pageName: 'Popular Movies', isShowHeader: false },
    },
    {
        path: '/movie/top-rated',
        name: 'top-rated-movie',
        component: () =>
            import(/* webpackChunkName: "top-rated-movie" */ '@/views/TopRatedMovie.vue'),
        meta: { pageName: 'Top Rated Movies', isShowHeader: false },
    },
    {
        path: '/movie/recommendation/:id',
        name: 'recommendation-movie',
        component: () =>
            import(
                /* webpackChunkName: "recommendation-movie" */ '@/views/RecommendationMovie.vue'
            ),
        meta: { pageName: 'Recommendation Movies', isShowHeader: false },
    },
    {
        path: '/movie/similar/:id',
        name: 'similar-movie',
        component: () => import(/* webpackChunkName: "similar-movie" */ '@/views/SimilarMovie.vue'),
        meta: { pageName: 'Similar Movies', isShowHeader: false },
    },
    {
        path: '/movie/free',
        name: 'free-movie',
        component: () => import(/* webpackChunkName: "top-rated-movie" */ '@/views/FreeMovie.vue'),
        meta: { pageName: 'Free Movies', isShowHeader: false },
    },
    {
        path: '/movie/genre/:genre/:id',
        name: 'movie-genre',
        component: () => import(/* webpackChunkName: "movie-genre" */ '@/views/MovieGenre.vue'),
        meta: { pageName: 'Movie Genre', isShowHeader: false },
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/SearchPage.vue'),
        meta: { pageName: 'Search', isShowHeader: false },
    },
    {
        path: '/watchlist',
        name: 'watchlist',
        component: () => import(/* webpackChunkName: "watchlist" */ '@/views/WatchlistPage.vue'),
        meta: { pageName: 'Watchlist', isShowHeader: true },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage.vue'),
        meta: { pageName: 'About', isShowHeader: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 };
    },
});

const defaultTitle = 'Moview';
router.afterEach((to) => {
    document.title = to.name ? `${to.meta.pageName} - ${defaultTitle}` : defaultTitle;
});

export default router;
