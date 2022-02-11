<template>
    <div class="font-semibold mb-4">{{ title }}</div>
    <div class="flex lg:flex-col gap-4 flex-wrap">
        <template v-for="item in data" :key="item.id">
            <PeopleCard
                :id="item.id"
                :person-name="item.name"
                :known-for="item.known_for"
                :image="item.image" />
        </template>
    </div>
</template>

<script>
import PeopleCard from './PeopleCard.vue';

export default {
    components: { PeopleCard },
    props: {
        data: {
            type: [Array, Object],
            require: true,
            default() {
                return [];
            },
        },
        title: {
            type: String,
            default: '',
        },
    },
};
</script>
