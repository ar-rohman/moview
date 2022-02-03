<template>
    <section>
        <div class="font-semibold mb-2">{{ title }}</div>
        <template v-if="data.length">
            <div class="flex flex-col sm:flex-row md:flex-col gap-4">
                <template v-for="item in data" :key="item.id">
                    <SidebarCard
                        :id="item.id"
                        :title="item.title"
                        :image="item.image"
                        :vote-average="item.vote_average"
                        :genre-id="item.genre_id" />
                </template>
            </div>
            <div class="mt-4">
                <router-link
                    :to="seeMoreLink"
                    class="block text-center bg-red-500 rounded-xl text-white px-6 py-2 w-full hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2">
                    See more
                </router-link>
            </div>
        </template>
        <template v-else>
            <p class="text-gray-500">There is no {{ title.toLowerCase() }}</p>
        </template>
    </section>
</template>

<script>
import SidebarCard from './SidebarCard.vue';

export default {
    components: { SidebarCard },
    props: {
        data: {
            type: Array,
            default() {
                return [];
            },
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        seeMoreLink: {
            type: String,
            required: true,
        },
    },
};
</script>
