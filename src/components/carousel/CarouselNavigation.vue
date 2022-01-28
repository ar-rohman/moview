<template>
    <button
        class="bg-white p-2 rounded-full text-gray-700 cursor-pointer absolute top-1/2 left-2 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 hidden md:block"
        @click="$emit('prev')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7" />
        </svg>
    </button>
    <button
        class="bg-white p-2 rounded-full text-gray-700 cursor-pointer absolute top-1/2 right-2 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 hidden md:block"
        @click="$emit('next')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7" />
        </svg>
    </button>
</template>

<script>
export default {
    emits: ['prev', 'next'], // vue v3
};
</script>
