<template>
    <div class="font-semibold mb-4">Cast</div>
    <div class="flex lg:flex-col gap-4 flex-wrap">
        <template v-for="item in data.slice(0, 5)" :key="item.id">
            <PeopleCard
                :id="item.id"
                :person-name="item.name"
                :known-for="item.character"
                :image="item.image"
                :image-size="45" />
            <!-- <router-link
                :to="`/people/detail/${item.id}`"
                class="flex items-center flex-col lg:flex-row gap-x-3">
                <img
                    :src="item.image"
                    :alt="item.name"
                    class="h-[45px] w-[45px] min-w-[45px] rounded-full object-cover object-center" />
                <div
                    class="flex flex-col flex-wrap items-center lg:items-start w-[80px] lg:w-full text-center lg:text-left text-xs lg:text-sm">
                    <div class="font-semibold">
                        {{ item.name }}
                    </div>
                    <div class="text-gray-500">
                        {{ item.character }}
                    </div>
                </div>
            </router-link> -->
        </template>
        <div class="flex items-center">
            <button
                class="text-sm font-semibold text-red-400 hover:text-red-600 focus:text-red-600 focus-visible:outline-none focus-visible:underline">
                See all cast
            </button>
        </div>
    </div>
</template>

<script>
import PeopleCard from './PeopleCard.vue';

export default {
    components: { PeopleCard },
    props: {
        data: {
            type: Array,
            require: true,
            default() {
                return [];
            },
        },
    },
};
</script>
