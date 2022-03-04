<template>
    <router-link
        :to="`${detailLink}/${data.id}`"
        class="flex gap-2 rounded-md h-[112px] w-full bg-black/5 dark:bg-slate-600/30 cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-red-400">
        <img
            :src="data.image"
            class="h-full aspect-[2/3] rounded-lg object-cover object-center"
            :alt="data.title" />
        <div class="px-2 py-4 flex flex-col justify-between">
            <div class="flex flex-col gap-y-2 text-sm">
                <div class="line-clamp-2 font-semibold">
                    {{ data.title }}
                </div>
                <div class="text-gray-600 dark:text-slate-400">{{ data.genre_name }}</div>
            </div>
            <RatingCount
                :vote-average="data.vote_average"
                icon-class="w-4 h-4 lg:h-5 lg:w-5 text-yellow-400"
                text-class="text-sm text-gray-500" />
        </div>
    </router-link>
</template>

<script>
import RatingCount from './RatingCount.vue';

export default {
    components: { RatingCount },
    inject: ['detailLink'],
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
};
</script>
