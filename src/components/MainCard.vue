<template>
    <div
        class="flex gap-2 flex-col shadow-md rounded-md w-40 zmin-w-min cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-red-500"
        tabindex="0"
        @click="goToDetail(id)">
        <img
            :src="image"
            class="h-40 w-full rounded-t-md object-contain object-center"
            :alt="title" />
        <div class="p-2 flex flex-col gap-2">
            <div class="line-clamp-2 font-semibold">{{ title }}</div>
            <div class="flex items-center">
                <div class="h-5 w-5 text-yellow-500" v-html="starIcon"></div>
                <p class="ml-1 text-sm text-gray-500">
                    {{ voteAverage }} | {{ voteCount }} Reviews
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { inject } from 'vue';
import { starIcon } from './icon';

export default {
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
    },
    setup() {
        const router = useRouter();
        // const stringFormat = inject('stringFormat');
        const goToDetail = (id) => {
            router.push({
                name: 'Detail',
                params: { id },
            });
        };

        return {
            goToDetail,
            // stringFormat,
            starIcon,
        };
    },
};
</script>
