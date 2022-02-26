<template>
    <button
        v-if="isSaved"
        class="bg-red-500 rounded-xl p-3 flex shadow-md hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
        title="Remove from watchlist"
        @click="removeFromWatchlist()">
        <BaseIcon name="bookmark" color="text-white" />
    </button>
    <button
        v-else
        class="bg-red-500 rounded-xl p-3 flex shadow-md hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
        title="Add to watchlist"
        @click="addToWatchlist()">
        <BaseIcon name="bookmarkOutline" color="text-white" />
    </button>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import idb from '@/storage/service';
import defaults from '@/utils/defaults';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    props: {
        data: {
            type: Object,
            required: true,
            default() {
                return {};
            },
        },
    },
    setup(props) {
        const isSaved = ref(false);
        const { data } = toRefs(props);
        const oldSize = `/${defaults.sidebarPosterSize}/`;
        const newSize = `/${defaults.mainPosterSize}/`;
        const image = data.value.poster.replace(new RegExp(oldSize, 'g'), newSize);
        const addToWatchlist = async () => {
            await idb.put(defaults.watchlistStorage, {
                id: data.value.id,
                title: data.value.title,
                image: image,
                voteAverage: data.value.vote_average,
                voteCount: data.value.vote_count,
            });
            isSaved.value = true;
        };
        const removeFromWatchlist = async () => {
            await idb.delete(defaults.watchlistStorage, data.value.id);
            isSaved.value = false;
        };
        const getWatchlistById = async () => {
            const watchlist = await idb.getById(defaults.watchlistStorage, data.value.id);
            isSaved.value = !!watchlist;
        };

        onMounted(getWatchlistById);

        return {
            addToWatchlist,
            removeFromWatchlist,
            isSaved,
        };
    },
};
</script>
