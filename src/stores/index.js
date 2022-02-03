import { defineStore } from 'pinia';

export const useGenreStore = defineStore('genre', {
    state: () => ({
        movieGenre: null,
    }),

    getters: {
        getMovieGenreById: (state) => {
            return (genreId) => state.movieGenre.find((genre) => genre.id === genreId);
        },
    },
});
