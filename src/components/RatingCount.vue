<template>
    <div v-if="voteAverage" class="flex items-center">
        <div :class="iconClass" v-html="starIcon"></div>
        <div :class="`flex ml-1 divide-x divide-current`">
            <p class="pr-2" :class="textClass">{{ Number.parseFloat(voteAverage).toFixed(1) }}</p>
            <p v-if="voteCount" class="pl-2" :class="textClass">
                {{ voteCount }} {{ voteCount > 1 ? 'Votes' : 'Vote' }}
            </p>
        </div>
    </div>
</template>

<script>
import { starIcon } from './icon';
export default {
    props: {
        iconClass: {
            type: String,
            default: 'h-5 w-5 text-yellow-400',
        },
        textClass: {
            type: String,
            default: 'text-sm text-gray-100',
        },
        voteAverage: {
            type: [String, Number, null],
            default: null,
            required: true,
        },
        voteCount: {
            type: [String, Number, null],
            default: null,
        },
    },
    setup() {
        return { starIcon };
    },
};
</script>
