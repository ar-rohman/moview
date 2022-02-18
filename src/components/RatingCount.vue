<template>
    <div v-if="voteAverage" class="flex items-center">
        <BaseIcon name="star" :size="iconClass" />
        <div :class="`flex ml-1 divide-x divide-current ${textClass}`">
            <p class="pr-2">{{ Number.parseFloat(voteAverage).toFixed(1) }}</p>
            <p v-if="voteCount" class="pl-2">
                {{ voteCount }} {{ voteCount > 1 ? 'Votes' : 'Vote' }}
            </p>
        </div>
    </div>
</template>

<script>
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
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
};
</script>
