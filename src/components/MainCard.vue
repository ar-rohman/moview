<template>
    <div
        class="flex gap-2 flex-col rounded-3xl cursor-pointer focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-red-400 relative"
        :class="cardWidth"
        tabindex="0"
        @click="goToDetail(id)">
        <img
            :src="image"
            class="h-[256px] w-full rounded-3xl object-cover object-center"
            :alt="title" />
        <div class="absolute inset-x-0 bottom-0">
            <div
                class="backdrop-blur-sm bg-black/30 rounded-3xl w-full text-white py-3 px-4 flex flex-col gap-2">
                <div class="line-clamp-2 font-semibold">{{ title }}</div>
                <RatingCount :vote-average="voteAverage" :vote-count="voteCount" />
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
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
        voteCount: {
            type: [String, Number],
            default: '',
            required: true,
        },
        cardWidth: {
            type: String,
            default: 'w-[192px]',
        },
    },
    setup() {
        const router = useRouter();
        const goToDetail = (id) => {
            router.push({
                name: 'Detail',
                params: { id },
            });
        };

        return {
            goToDetail,
        };
    },
};
</script>
