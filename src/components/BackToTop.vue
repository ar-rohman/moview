<template>
    <div
        v-if="isScroll"
        class="flex justify-end w-full max-w-screen-xl fixed bottom-4"
        data-test="back-to-top">
        <button
            class="flex justify-center items-center bg-red-500 rounded-full p-3 mx-8 sm:mx-20 text-white hover:bg-red-600 focus:bg-red-700 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
            data-test="back-to-top-button"
            @click="toTop">
            <BaseIcon name="arrowUp" size="w-5 h-5" />
        </button>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    setup() {
        const isScroll = ref(false);

        const toTop = () => {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        };
        onMounted(() => window.addEventListener('scroll', scrolling));
        onUnmounted(() => window.removeEventListener('scroll', scrolling));
        const scrolling = () => {
            const scrollTop = document.documentElement.scrollTop;
            const screenHeight = window.screen.height;
            isScroll.value = scrollTop > screenHeight;
        };
        return { isScroll, toTop };
    },
};
</script>
