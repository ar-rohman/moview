import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '@/views/movie/MoviePage.vue';

const routes = [
    {
        path: '/',
        name: 'movies',
        component: MoviePage,
        meta: { pageName: 'Movies', isShowHeader: true },
    },
    {
        path: '/movie/detail/:id',
        name: 'movie-detail',
        component: () => import('@/views/movie/MovieDetail.vue'),
        meta: { pageName: 'Detail', isShowHeader: false },
    },
    {
        path: '/movie/upcoming',
        name: 'upcoming-movie',
        component: () => import('@/views/movie/UpcomingMovie.vue'),
        meta: { pageName: 'Upcoming Movies', isShowHeader: false },
    },
    {
        path: '/movie/trending',
        name: 'trending-movie',
        component: () => import('@/views/movie/TrendingMovie.vue'),
        meta: { pageName: 'Trending Movies', isShowHeader: false },
    },
    {
        path: '/movie/now-playing',
        name: 'now-playing-movie',
        component: () => import('@/views/movie/NowPlayingMovie.vue'),
        meta: { pageName: 'Now Playing Movies', isShowHeader: false },
    },
    {
        path: '/movie/popular',
        name: 'popular-movie',
        component: () => import('@/views/movie/PopularMovie.vue'),
        meta: { pageName: 'Popular Movies', isShowHeader: false },
    },
    {
        path: '/movie/top-rated',
        name: 'top-rated-movie',
        component: () => import('@/views/movie/TopRatedMovie.vue'),
        meta: { pageName: 'Top Rated Movies', isShowHeader: false },
    },
    {
        path: '/movie/recommendation/:id',
        name: 'recommendation-movie',
        component: () => import('@/views/movie/RecommendationMovie.vue'),
        meta: { pageName: 'Recommendation Movies', isShowHeader: false },
    },
    {
        path: '/movie/similar/:id',
        name: 'similar-movie',
        component: () => import('@/views/movie/SimilarMovie.vue'),
        meta: { pageName: 'Similar Movies', isShowHeader: false },
    },
    {
        path: '/movie/free',
        name: 'free-movie',
        component: () => import('@/views/movie/FreeMovie.vue'),
        meta: { pageName: 'Free Movies', isShowHeader: false },
    },
    {
        path: '/movie/genre/:genre/:id',
        name: 'movie-genre',
        component: () => import('@/views/movie/MovieGenre.vue'),
        meta: { pageName: 'Movie Genre', isShowHeader: false },
    },
    {
        path: '/tv-show',
        name: 'tv-show',
        component: () => import('@/views/TVShowPage.vue'),
        meta: { pageName: 'TV Shows', isShowHeader: true },
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('@/views/SearchPage.vue'),
        meta: { pageName: 'Search', isShowHeader: false },
    },
    {
        path: '/people/detail/:id',
        name: 'people-detail',
        component: () => import('@/views/people/PeopleDetail.vue'),
        meta: { pageName: 'Person Detail', isShowHeader: false },
    },
    {
        path: '/watchlist',
        name: 'watchlist',
        component: () => import('@/views/WatchlistPage.vue'),
        meta: { pageName: 'Watchlist', isShowHeader: true },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/AboutPage.vue'),
        meta: { pageName: 'About', isShowHeader: false },
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
