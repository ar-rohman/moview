<template>
    <template v-if="data.isLoading">
        <!--TODO-->
        <div>Loading...</div>
    </template>
    <template v-else>
        <div class="font-semibold mb-4">{{ title }}</div>
        <template v-if="data.isError">
            <!--TODO-->
            <div>error please reload</div>
        </template>
        <div v-else class="flex lg:flex-col gap-4 flex-wrap">
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
