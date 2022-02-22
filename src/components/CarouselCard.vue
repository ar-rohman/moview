<template>
    <div class="relative">
        <button
            v-if="!arrivedLeft && !isTouchScreen()"
            data-test="carousel-card-button-left"
            class="border shadow-md bg-white p-2 rounded-full text-gray-700 cursor-pointer z-20 absolute top-1/2 -left-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
            @click="scrollTo('left')">
            <BaseIcon name="chevronLeft" />
        </button>
        <div ref="carousel" class="flex overflow-x-auto no-scrollbar">
            <div class="flex gap-4 m-[3px]">
                <slot></slot>
            </div>
        </div>
        <button
            v-if="!arrivedRight && !noOffset && !isTouchScreen()"
            data-test="carousel-card-button-right"
            class="border shadow-md bg-white p-2 rounded-full text-gray-700 cursor-pointer absolute top-1/2 -right-5 -translate-y-1/2 transform transition motion-safe:hover:scale-110 duration-500 focus-visible:outline-none focus-visible:ring-red-400 focus-visible:ring-2"
            @click="scrollTo('right')">
            <BaseIcon name="chevronRight" />
        </button>
    </div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import { isTouchScreen } from '@/utils/screen';
import { useScroll } from '@vueuse/core';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    setup() {
        const carousel = ref(null);
        const noOffset = ref(false);

        const { arrivedState } = useScroll(carousel, { offset: { right: 10 } });
        const { left: arrivedLeft, right: arrivedRight } = toRefs(arrivedState);

        const scrollTo = (direction) => {
            const element = carousel.value;
            let left = element.scrollLeft;
            const { clientWidth } = element;
            const elementWidth = clientWidth - clientWidth * 0.2;
            if (direction === 'right') {
                left += elementWidth;
            }
            if (direction === 'left') {
                left -= elementWidth;
            }

            noOffset.value = element.offsetWidth === element.scrollWidth;
            element.scroll({
                left,
                behavior: 'smooth',
            });
        };
        onMounted(() => scrollTo());
        return {
            carousel,
            scrollTo,
            isTouchScreen,
            arrivedLeft,
            arrivedRight,
            noOffset,
        };
    },
};
</script>
