import API from './api';

export default {
    searchMovie(param = null) {
        return API.apiClient('search/movie', param);
    },
};
