<template>
    <div class="font-semibold md:text-lg mb-3">{{ title }}</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-for="item in data" :key="item.id">
            <main-card
                :id="item.id"
                :title="item.title"
                :vote-average="item.voteAverage"
                :vote-count="item.voteCount"
                :image="item.image"
                card-width="w-full" />
        </template>
    </div>
</template>

<script>
import MainCard from './MainCard.vue';
export default {
    components: {
        MainCard,
    },
    props: {
        title: {
            type: String,
            default: '',
            require: true,
        },
        data: {
            type: Array,
            default() {
                return [];
            },
            require: true,
        },
    },
};
</script>
