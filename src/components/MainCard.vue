<template>
    <router-link
        :to="`${detailLink}/${id}`"
        class="flex gap-2 flex-col rounded-3xl focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-red-400 relative"
        :class="cardWidth">
        <img
            :src="image"
            class="aspect-[2/3] w-full rounded-3xl object-cover object-center"
            :alt="title" />
        <div class="absolute inset-x-0 bottom-0">
            <div
                class="backdrop-blur-sm bg-black/30 rounded-3xl h-[88px] w-full text-white py-3 px-4 flex flex-col gap-2 justify-between">
                <div class="line-clamp-2 font-semibold">{{ title }}</div>
                <RatingCount :vote-average="voteAverage" :vote-count="voteCount" />
            </div>
        </div>
    </router-link>
</template>

<script>
import RatingCount from './RatingCount.vue';

export default {
    components: { RatingCount },
    inject: ['detailLink'],
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
        voteCount: {
            type: [String, Number],
            default: '',
            required: true,
        },
        cardWidth: {
            type: String,
            default: 'w-[185px]',
        },
    },
};
</script>
