<template>
    <div
        class="flex gap-2 rounded-md h-[112px] w-full bg-black/5 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-red-500"
        tabindex="0"
        @click="goToDetail(id)">
        <img
            :src="image"
            class="w-[84px] h-full rounded-lg object-cover object-center"
            :alt="title" />
        <div class="px-2 py-4 flex flex-col justify-between">
            <div class="flex flex-col gap-y-2 text-sm">
                <div class="line-clamp-2 font-semibold">
                    {{ title }}
                </div>
                <div class="text-gray-600">{{ genre }}</div>
            </div>
            <RatingCount
                :vote-average="voteAverage"
                icon-class="w-4 h-4 lg:h-5 lg:w-5 text-yellow-400"
                text-class="text-sm text-gray-500" />
        </div>
    </div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useGenreStore } from '@/stores';
import MovieService from '@/services/MovieService';
import RatingCount from './RatingCount.vue';

export default {
    components: { RatingCount },
    props: {
        id: {
            type: [String, Number],
            default: '',
            required: true,
        },
        title: {
            type: String,
            default: '',
            required: true,
        },
        image: {
            type: String,
            default: '',
            required: true,
        },
        voteAverage: {
            type: [String, Number],
            default: '',
            required: true,
        },
        genreId: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    setup(props) {
        const router = useRouter();
        const genreStore = useGenreStore();
        const { genreId } = toRefs(props);
        const genre = ref(null);

        const getGenre = () => {
            const genreName = [];
            for (const id of genreId.value.slice(0, 2)) {
                const genreStoreName = genreStore.getMovieGenreById(id).name;
                genreName.push(genreStoreName);
            }
            genre.value = genreName.join(', ');
        };

        const getMovieGenre = async () => {
            if (genreStore.movieGenre) {
                return getGenre();
            } else {
                const result = await MovieService.getGenre();
                const { data } = result;
                genreStore.movieGenre = data.genres;
                return getGenre();
            }
        };
        const goToDetail = (id) => {
            router.push({
                name: 'Detail',
                params: { id },
            });
        };

        onMounted(getMovieGenre);
        return {
            genre,
            goToDetail,
        };
    },
};
</script>
