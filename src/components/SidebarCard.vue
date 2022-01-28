<template>
    <div
        class="flex gap-2 rounded-md h-[112px] w-full bg-black/5 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-red-500"
        tabindex="0"
        @click="goToDetail(id)">
        <img
            :src="image"
            class="w-[84px] h-full rounded-lg object-cover object-center z-m-px"
            :alt="title" />
        <div class="px-2 py-4 flex flex-col justify-between">
            <div class="flex flex-col gap-y-2 text-xs lg:text-sm">
                <div class="line-clamp-2 font-medium lg:font-semibold">
                    {{ title }}
                </div>
                <div class="line-clamp-1 text-gray-600">Action Action</div>
            </div>
            <div class="flex items-center">
                <div class="w-4 h-4 lg:h-5 lg:w-5 text-yellow-500" v-html="starIcon"></div>
                <p class="ml-1 text-xs lg:text-sm text-gray-500">
                    {{ voteAverage }}
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
