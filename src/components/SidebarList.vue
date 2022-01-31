<template>
    <section>
        <div class="font-semibold mb-2">{{ title }}</div>
        <div class="flex flex-col sm:flex-row md:flex-col gap-3">
            <template v-for="item in data" :key="item.id">
                <SidebarCard
                    :id="item.id"
                    :title="item.title"
                    :image="item.image"
                    :vote-average="item.vote_average" />
            </template>
        </div>
        <div class="mt-2">
            <router-link :to="seeMoreLink">
                <button class="bg-red-500 rounded-xl text-white px-6 py-2 w-full">See more</button>
            </router-link>
        </div>
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
