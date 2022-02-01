<template>
    <div class="absolute bottom-2 z-10" :class="getPaginationPosition">
        <button
            v-for="(item, index) in total"
            :key="index"
            class="w-2 h-2 bg-white opacity-50 m-1 rounded-full cursor-pointer hover:bg-red-500 focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
            :class="{ 'opacity-100': currentIndex === index }"
            @click="$emit('switch', index)"></button>
    </div>
</template>

<script>
import { inject, computed } from 'vue';

export default {
    props: {
        total: {
            type: Number,
            required: true,
            default: 1,
        },
    },
    emits: ['switch'],
    setup() {
        const currentIndex = inject('currentSlide');
        const paginationPosition = inject('paginationPosition');
        const getPaginationPosition = computed(() => {
            return {
                'right-0 -translate-x-1/2': paginationPosition.value === 'right',
                'left-1/2 -translate-x-1/2': paginationPosition.value === 'center',
                'left-0 translate-x-1/2': paginationPosition.value === 'left',
            };
        });
        return {
            currentIndex,
            getPaginationPosition,
        };
    },
};
</script>
