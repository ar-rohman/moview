<template>
    <section>
        <ListCarouselSkeleton v-if="data.isLoading" :error="data.isError" :title="title" />
        <template v-else>
            <div class="flex justify-between mb-2">
                <div class="font-semibold md:text-lg">{{ title }}</div>
                <router-link
                    v-if="data.isMore"
                    :to="seeMoreLink"
                    class="self-end text-red-400 hover:text-red-600 dark:hover:text-red-300 focus:text-red-600 dark:focus:text-red-300 focus-visible:outline-none focus-visible:underline">
                    See more
                </router-link>
            </div>
            <carousel-card>
                <template v-for="item in data.result" :key="item.id">
                    <MainCard
                        :id="item.id"
                        :title="item.title"
                        :image="item.image"
                        :vote-average="item.vote_average"
                        :vote-count="item.vote_count" />
                </template>
            </carousel-card>
        </template>
    </section>
</template>

<script>
import MainCard from './MainCard.vue';
import CarouselCard from './CarouselCard.vue';
import ListCarouselSkeleton from './skeleton/ListCarouselSkeleton.vue';

export default {
    components: { MainCard, CarouselCard, ListCarouselSkeleton },
    props: {
        title: {
            type: String,
            default: null,
        },
        data: {
            type: Object,
            default() {
                return {};
            },
            require: true,
        },
        seeMoreLink: {
            type: String,
            default: '#',
        },
    },
};
</script>
