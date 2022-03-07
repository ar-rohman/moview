<template>
    <button
        v-if="!isTouchScreen()"
        class="bg-white p-2 border shadow-md rounded-full cursor-pointer absolute top-1/2 -left-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2 dark:bg-slate-900 dark:border-slate-50/20 dark:shadow-none"
        data-test="carousel-navigation-prev"
        @click="$emit('prev')">
        <BaseIcon name="chevronLeft" />
    </button>
    <button
        v-if="!isTouchScreen()"
        class="bg-white p-2 border shadow-md rounded-full cursor-pointer absolute top-1/2 -right-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2 dark:bg-slate-900 dark:border-slate-50/20 dark:shadow-none"
        data-test="carousel-navigation-next"
        @click="$emit('next')">
        <BaseIcon name="chevronRight" />
    </button>
</template>

<script>
import { isTouchScreen } from '@/utils/screen';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    emits: ['prev', 'next'],
    setup() {
        return { isTouchScreen };
    },
};
</script>
