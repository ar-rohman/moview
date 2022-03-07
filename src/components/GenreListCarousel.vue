<template>
    <section>
        <GenreListSkeleton v-if="data.isLoading" />
        <template v-else>
            <div class="font-semibold md:text-lg mb-2">Genres</div>
            <carousel-card>
                <div class="flex gap-x-4">
                    <button
                        v-for="genre in data.result"
                        :key="genre.id"
                        class="px-4 py-2 rounded-2xl whitespace-nowrap border border-red-500 dark:border-red-400/70 text-red-500 dark:text-red-400 hover:text-white dark:hover:text-white hover:bg-red-500 dark:hover:bg-red-400 focus:bg-red-600 dark:focus:bg-red-300 focus:outline-none focus:text-white focus-visible:ring-red-400 dark:focus-visible:ring-red-300 focus-visible:ring-2 select-none min-w-0"
                        @click="gotoMovieGenre(genre.name, genre.id)">
                        {{ genre.name }}
                    </button>
                </div>
            </carousel-card>
        </template>
    </section>
</template>

<script>
import { useRouter } from 'vue-router';
import CarouselCard from '@/components/CarouselCard.vue';
import GenreListSkeleton from './skeleton/GenreListSkeleton.vue';

export default {
    components: { CarouselCard, GenreListSkeleton },
    props: {
        data: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    setup() {
        const router = useRouter();

        const gotoMovieGenre = (name, id) => {
            const genreName = name.replace(/ /g, '-').toLowerCase();
            router.push({ path: `/movie/genre/${genreName}/${id}` });
        };

        return { gotoMovieGenre };
    },
};
</script>
