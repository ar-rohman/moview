<template>
    <button
        class="bg-white p-2 border shadow-md rounded-full text-gray-700 cursor-pointer absolute top-1/2 -left-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 hidden md:block focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
        @click="$emit('prev')">
        <BaseIcon name="chevronLeft" />
    </button>
    <button
        class="bg-white p-2 border shadow-md rounded-full text-gray-700 cursor-pointer absolute top-1/2 -right-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 hidden md:block focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
        @click="$emit('next')">
        <BaseIcon name="chevronRight" />
    </button>
</template>

<script>
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    emits: ['prev', 'next'],
};
</script>
