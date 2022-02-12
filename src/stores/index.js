import { defineStore } from 'pinia';
import MovieService from '@/services/movie-service';

export const useGenreStore = defineStore('genre', {
    state: () => ({
        movieGenre: null,
    }),

    getters: {
        getMovieGenreById: (state) => {
            return (genreId) => {
                const genre = state.movieGenre.find((genre) => genre.id === genreId);
                return genre.name;
            };
        },
    },

    actions: {
        async getMovieGenreStore() {
            if (!this.movieGenre) {
                try {
                    const genre = await MovieService.getGenre();
                    const { data } = genre;
                    this.movieGenre = data.genres;
                } catch (error) {
                    this.movieGenre = null;
                }
            }
        },
        // async getMovieGenreById(genreId) {
        //     await this.getMovieGenreStore();
        //     const genre = this.movieGenre.find((genre) => genre.id === genreId);
        //     return genre.name;
        // },
    },
});
