import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_API_KEY;

export default {
    apiClient(url, param = null) {
        const config = {
            url: url,
            baseURL: baseUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
            params: param,
            timeout: 10000,
        };
        return axios(config);
    },
};
