import { defineStore } from 'pinia';

export const useGenreStore = defineStore('genre', {
    state: () => ({
        movieGenre: null,
    }),

    getters: {
        getMovieGenreById: (state) => {
            return (genreId) => state.movieGenre.find((genre) => genre.id === genreId);
            // const genreName = state.movieGenre.filter((genre) => genre.name);
            // return (genreId) => genreName.find((genre) => genre.id === genreId);
        },
    },
});
