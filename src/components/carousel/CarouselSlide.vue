<template>
    <transition :name="transitionEffect">
        <div
            v-show="currentSlide === index"
            class="absolute inset-0"
            @mouseenter="$emit('mouseenter')"
            @mouseout="$emit('mouseout')">
            <img :src="slide" class="h-80 w-full object-center object-cover" />
            <div class="absolute inset-8 text-white flex items-end sm:w-1/2">
                <div class="backdrop-blur-sm bg-black/30 rounded-xl sm:rounded-2xl w-full">
                    <div class="py-4 px-6">
                        <div class="md:text-lg lg:text-2xl lg:font-semibold">
                            {{ title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { computed, inject, toRefs } from 'vue';

export default {
    props: {
        id: {
            type: [String, Number],
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
        slide: {
            // slide
            type: String,
            required: true,
        },
        direction: {
            type: String,
            default: 'right',
        },
        index: {
            type: [String, Number],
            default: 0,
        },
    },
    emits: ['mouseenter', 'mouseout'],
    setup(props) {
        const { direction } = toRefs(props);
        const currentSlide = inject('currentSlide');
        const transitionEffect = computed(() =>
            direction.value === 'right' ? 'slide-out' : 'slide-in'
        );

        return { transitionEffect, currentSlide };
    },
};
</script>

<style scoped>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
    transition: all 1s ease-in-out;
}
.slide-in-enter-from {
    transform: translateX(-100%);
}
.slide-in-leave-to {
    transform: translateX(100%);
}
.slide-out-enter-from {
    transform: translateX(100%);
}
.slide-out-leave-to {
    transform: translateX(-100%);
}
</style>
