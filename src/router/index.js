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
        path: '/movie-list/:category/:id',
        name: 'movie-list',
        component: () => import(/* webpackChunkName: "movie-list" */ '@/views/MovieList.vue'),
        meta: { pageName: 'Movie List', isShowHeader: false },
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
