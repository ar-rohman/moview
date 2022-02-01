import API from './API';

export default {
    getDiscover(param = null) {
        return API.apiClient('discover/movie', param);
    },
    getTrendingByDay(param = null) {
        return API.apiClient('trending/movie/day', param);
    },
    getNowPlaying(param = null) {
        return API.apiClient('movie/now_playing', param);
    },
    getUpcoming(param = null) {
        return API.apiClient('movie/upcoming', param);
    },
    getPopular(param = null) {
        return API.apiClient('movie/popular', param);
    },
    getTopRated(param = null) {
        return API.apiClient('movie/top_rated', param);
    },
    getGenre(param = null) {
        return API.apiClient('genre/movie/list', param);
    },
};
