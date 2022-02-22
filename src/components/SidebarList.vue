<template>
    <template v-if="data.isError">
        <!-- TODO -->
        <div>error please reload</div>
    </template>
    <template v-else>
        <SidebarListSkeleton v-if="data.isLoading" />
        <section v-else>
            <div class="font-semibold mb-2">{{ title }}</div>
            <template v-if="data.result.length">
                <div class="flex flex-col sm:flex-row md:flex-col gap-5">
                    <template v-for="item in data.result" :key="item.id">
                        <SidebarCard :data="item" />
                    </template>
                </div>
                <div class="mt-4">
                    <router-link
                        v-if="data.isMore"
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
</template>

<script>
import SidebarCard from './SidebarCard.vue';
import SidebarListSkeleton from './skeleton/SidebarListSkeleton.vue';

export default {
    components: { SidebarCard, SidebarListSkeleton },
    props: {
        data: {
            type: [Array, Object],
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
