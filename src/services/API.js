import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;
const accessToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzRiZTlhNDViNDI3NDc2OTYwNzM1ODU0MDk2NmNiYiIsInN1YiI6IjYwOWI2OWJhOGQ3N2M0MDA3ODBlMWJmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EJ6sCrSypjmXEXZ0EPU5u15_ynkWrYSA-z7XgZ9n_JQ';

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
