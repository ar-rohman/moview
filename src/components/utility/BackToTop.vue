<template>
    <transition
        enter-from-class="translate-y-full opacity-0"
        enter-active-class="transition duration-500 ease-out"
        leave-active-class="transition duration-700 ease-out"
        leave-to-class="translate-y-full opacity-0">
        <div
            v-if="!top"
            class="flex justify-end w-full max-w-screen-xl fixed bottom-4"
            data-test="back-to-top">
            <button
                class="flex justify-center items-center bg-red-500 dark:bg-red-400 rounded-full p-3 mx-8 shadow-md sm:mx-20 text-white hover:bg-red-600 dark:hover:bg-red-300 focus:bg-red-700 dark:focus:bg-red-300/80 focus:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
                data-test="back-to-top-button"
                @click="toTop">
                <BaseIcon name="arrowUp" size="w-5 h-5" />
            </button>
        </div>
    </transition>
</template>

<script>
import { ref, toRefs } from 'vue';
import { useScroll } from '@vueuse/core';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    setup() {
        const toTop = () => {
            window.scroll({
                top: 0,
                behavior: 'smooth',
            });
        };
        const element = ref(document);
        const { arrivedState } = useScroll(element);
        const { top } = toRefs(arrivedState);
        return { toTop, top };
    },
};
</script>
