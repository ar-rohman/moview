import { createRouter, createWebHistory } from 'vue-router';
import MoviePage from '@/views/MoviePage.vue';

const routes = [
    {
        path: '/',
        name: 'Movies',
        component: MoviePage,
    },
    {
        path: '/tv-show',
        name: 'TV Shows',
        component: () => import(/* webpackChunkName: "tv-show" */ '@/views/TVShowPage.vue'),
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/MovieDetail.vue'),
    },
    {
        path: '/movie-list/:category/:id',
        name: 'Movie List',
        component: () => import(/* webpackChunkName: "movie-list" */ '@/views/MovieList.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/SearchPage.vue'),
    },
    {
        path: '/watchlist',
        name: 'Watchlist',
        component: () => import(/* webpackChunkName: "watchlist" */ '@/views/WatchlistPage.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutPage.vue'),
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
    document.title = to.name ? `${to.name} - ${defaultTitle}` : defaultTitle;
});

export default router;
