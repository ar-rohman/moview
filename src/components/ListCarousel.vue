<template>
    <div class="my-10">
        <div class="font-semibold mb-4 md:text-lg">{{ title }}</div>
        <carousel-card>
            <template v-for="item in data" :key="item.id">
                <MainCard
                    :id="item.id"
                    :title="item.title"
                    :image="`${imageBaseUrl}${imageSize}${item.poster_path}`"
                    :vote-average="item.vote_average"
                    :vote-count="item.vote_count" />
            </template>
        </carousel-card>
    </div>
</template>

<script>
import MainCard from './MainCard.vue';
import CarouselCard from './CarouselCard.vue';

export default {
    components: { MainCard, CarouselCard },
    props: {
        title: {
            type: String,
            default: null,
        },
        imageSize: {
            type: String,
            default: 'w500',
            validator(value) {
                return [
                    'w45',
                    'w92',
                    'w154',
                    'w185',
                    'w300',
                    'w342',
                    'w500',
                    'w780',
                    'w1280',
                    'h632',
                    'original',
                ].includes(value);
            },
        },
        data: {
            type: Array,
            default() {
                return [];
            },
            require: true,
        },
    },
    setup() {
        const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
        return { imageBaseUrl };
    },
};
</script>
