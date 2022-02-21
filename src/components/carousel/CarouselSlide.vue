<template>
    <transition
        enter-active-class="transition duration-1000 ease-in-out"
        :enter-from-class="direction === 'right' ? 'translate-x-full' : '-translate-x-full'"
        leave-active-class="transition duration-1000 ease-in-out"
        :leave-to-class="direction === 'right' ? '-translate-x-full' : 'translate-x-full'">
        <div
            v-show="currentSlide === index"
            ref="swipeElement"
            class="absolute inset-0 cursor-pointer select-none"
            @mouseenter="$emit('enter')"
            @mouseout="$emit('out')"
            @touchstart="$emit('enter')"
            @touchend="$emit('out')"
            @click="goTo">
            <img :src="slide" class="h-80 w-full object-top object-cover" />
            <div class="absolute inset-0 text-white flex items-end">
                <div class="backdrop-blur-sm bg-black/30 rounded-xl sm:rounded-3xl w-full">
                    <div class="py-4 px-8 lg:px-10 lg:py-8">
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
import { inject, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useSwipe } from '@vueuse/core';

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
    emits: ['enter', 'out', 'prev', 'next'],
    setup(props, { emit }) {
        const router = useRouter();
        const swipeElement = ref(null);
        const { id } = toRefs(props);
        const currentSlide = inject('currentSlide');
        const detailLink = inject('detailLink');

        const goTo = () => {
            emit('prev');
            router.push({ path: `${detailLink}/${id.value}` });
        };

        useSwipe(swipeElement, {
            onSwipeEnd: (event, direction) => {
                if (direction === 'RIGHT') {
                    emit('prev');
                } else if (direction === 'LEFT') {
                    emit('next');
                }
            },
        });

        return {
            goTo,
            currentSlide,
            swipeElement,
        };
    },
};
</script>
