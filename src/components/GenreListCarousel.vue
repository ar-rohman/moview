<template>
    <section>
        <GenreListSkeleton v-if="data.isLoading" />
        <carousel-card v-else>
            <div class="flex gap-x-4">
                <button
                    v-for="genre in data.result"
                    :key="genre.id"
                    class="px-4 py-2 rounded-2xl whitespace-nowrap border border-red-500 text-red-500 hover:text-white hover:bg-red-500 focus:bg-red-600 focus:outline-none focus:text-white focus-visible:ring-red-400 focus-visible:ring-2"
                    @click="gotoMovieGenre(genre.name, genre.id)">
                    {{ genre.name }}
                </button>
            </div>
        </carousel-card>
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
