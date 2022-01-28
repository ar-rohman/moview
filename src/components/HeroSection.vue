<template>
    <div class="relative">
        <img
            :src="data.image"
            :alt="data.title"
            class="h-80 w-full object-center object-cover rounded-xl sm:rounded-3xl" />
        <div class="absolute inset-4 text-white flex items-end sm:w-1/2">
            <div class="backdrop-blur-sm bg-black/30 rounded-xl sm:rounded-2xl w-full">
                <div class="py-4 px-6 flex justify-between gap-6">
                    <div class="md:text-lg lg:text-2xl lg:font-semibold">
                        {{ data.title }}
                    </div>
                    <div class="self-end">
                        <button
                            class="bg-red-500 rounded-xl p-3 shadow-md hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                            title="Add to watchlist">
                            <div class="w-6 h-6" v-html="bookmarkOutlineIcon"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { bookmarkIcon, bookmarkOutlineIcon } from './icon';

export default {
    props: {
        data: {
            type: Object,
            required: true,
            default() {
                return {};
            },
        },
    },
    setup() {
        return { bookmarkIcon, bookmarkOutlineIcon };
    },
};
</script>
