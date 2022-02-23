<template>
    <PeopleListSkeleton v-if="data.isLoading" />
    <template v-else>
        <div class="font-semibold mb-4">{{ title }}</div>
        <template v-if="data.isError">
            <!--TODO-->
            <div>error please reload</div>
        </template>
        <div
            v-else
            class="grid place-items-start grid-cols-3 grid-flow-row zgrid-rows-2 sm:grid-cols-6 lg:grid-cols-1 gap-4">
            <template v-for="item in data.result" :key="item.id">
                <PeopleCard
                    :id="item.id"
                    :person-name="item.name"
                    :known-for="item.known_for"
                    :image="item.image" />
            </template>
        </div>
    </template>
</template>

<script>
import PeopleCard from './PeopleCard.vue';
import PeopleListSkeleton from './skeleton/PeopleListSkeleton.vue';

export default {
    components: { PeopleCard, PeopleListSkeleton },
    props: {
        data: {
            type: Object,
            require: true,
            default() {
                return {};
            },
        },
        title: {
            type: String,
            default: '',
        },
    },
};
</script>
