<template>
    <template v-if="data.isError">
        <!-- TODO -->
        <div>error please reload</div>
    </template>
    <template v-else>
        <section>
            <ListCarouselSkeleton v-if="data.isLoading" />
            <template v-else>
                <div class="flex justify-between mb-3">
                    <div class="font-semibold md:text-lg">{{ title }}</div>
                    <router-link
                        v-if="data.isMore"
                        :to="seeMoreLink"
                        class="self-end text-red-400 hover:text-red-600 focus:text-red-600 focus-visible:outline-none focus-visible:underline">
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
            type: [Array, Object],
            default() {
                return [];
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
