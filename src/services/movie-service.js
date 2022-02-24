import API from './api';

export default {
    getDetail(id, param = null) {
        return API.apiClient(`movie/${id}`, param);
    },
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
    getRecommendation(id, param = null) {
        return API.apiClient(`movie/${id}/recommendations`, param);
    },
    getSimilar(id, param = null) {
        return API.apiClient(`movie/${id}/similar`, param);
    },
    getCredit(id, param = null) {
        return API.apiClient(`movie/${id}/credits`, param);
    },
    getReview(id, param = null) {
        return API.apiClient(`movie/${id}/reviews`, param);
    },
    getGenre(param = null) {
        return API.apiClient('genre/movie/list', param);
    },
    getVideo(id, param = null) {
        return API.apiClient(`movie/${id}/videos`, param);
    },
};
