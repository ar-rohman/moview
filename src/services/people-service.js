import API from './api';

export default {
    getDetail(id, param = null) {
        return API.apiClient(`person/${id}`, param);
    },
    getPopular(param = null) {
        return API.apiClient('person/popular', param);
    },
};