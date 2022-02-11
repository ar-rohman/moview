import { createPinia } from 'pinia';
import { useGenreStore } from '@/stores';

// import { useUserStore } from '@/stores/user'
import { createApp } from 'vue';
import App from '@/App.vue';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
const genreStore = useGenreStore();

/**
 * NOT USED YET
 * Get genre name by id
 * @param {Array} arrayGenreId array of genre id
 * @returns {String} name of genre sparated with comma
 */
export const getMovieGenreName = async (arrayGenreId) => {
    const genreName = [];
    for (const id of arrayGenreId) {
        const genreStoreName = await genreStore.getMovieGenreById(id);
        genreName.push(genreStoreName);
    }
    return genreName.join(', ');
};

/**
 * Calculate star rating
 * @param {Number} starCount number of star
 * @returns {Object}
 */
export const starCalculation = (starCount) => {
    const twoStar = Math.floor(starCount / 2);
    const oneStar = starCount % 2;
    const zeroStar = 5 - (twoStar + oneStar);
    return {
        two_star: twoStar,
        one_star: oneStar,
        zero_star: zeroStar,
    };
};
