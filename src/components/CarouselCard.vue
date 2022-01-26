<template>
    <div class="relative">
        <button
            v-if="showArrowLeft"
            class="border shadow-md bg-white p-2 rounded-full text-gray-700 cursor-pointer z-20 absolute top-1/2 -left-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 hidden md:block"
            @click="scrollTo('left')">
            <div class="h-6 w-6" v-html="chevronLeftIcon"></div>
        </button>
        <div ref="carousel" class="flex overflow-x-auto no-scrollbar">
            <div class="flex gap-4 m-[3px]">
                <slot></slot>
            </div>
        </div>
        <button
            v-if="showArrowRight"
            class="border shadow-md bg-white p-2 rounded-full text-gray-700 cursor-pointer absolute top-1/2 -right-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 hidden md:block"
            @click="scrollTo('right')">
            <div class="h-6 w-6" v-html="chevronRightIcon"></div>
        </button>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { chevronLeftIcon, chevronRightIcon } from './icon';

export default {
    setup() {
        const carousel = ref(null);
        const showArrowLeft = ref(false);
        const showArrowRight = ref(true);
        const scrollTo = (direction) => {
            const element = carousel.value;
            let left = element.scrollLeft;
            const { clientWidth } = element;
            const elementWidth = clientWidth - clientWidth * 0.2;
            const maxWidth = element.scrollWidth;
            if (direction === 'right') {
                left += elementWidth;
            }
            if (direction === 'left') {
                left -= elementWidth;
            }
            if (left + clientWidth > maxWidth) {
                showArrowLeft.value = true;
                showArrowRight.value = false;
            } else if (left > 0 && left < maxWidth) {
                showArrowLeft.value = true;
                showArrowRight.value = true;
            } else if (left <= 0) {
                showArrowLeft.value = false;
                showArrowRight.value = true;
            }
            if (clientWidth >= maxWidth) {
                showArrowLeft.value = false;
                showArrowRight.value = false;
            }
            element.scroll({
                left,
                behavior: 'smooth',
            });
        };
        onMounted(() => scrollTo());
        return {
            carousel,
            showArrowLeft,
            showArrowRight,
            scrollTo,
            chevronLeftIcon,
            chevronRightIcon,
        };
    },
};
</script>
