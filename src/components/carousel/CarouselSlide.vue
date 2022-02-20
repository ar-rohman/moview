<template>
    <transition
        enter-active-class="transition duration-1000 ease-in-out"
        :enter-from-class="direction === 'right' ? 'translate-x-full' : '-translate-x-full'"
        leave-active-class="transition duration-1000 ease-in-out"
        :leave-to-class="direction === 'right' ? '-translate-x-full' : 'translate-x-full'">
        <div
            v-show="currentSlide === index"
            class="absolute inset-0 cursor-pointer select-none"
            @mouseenter="$emit('enter')"
            @mouseout="$emit('out')"
            @touchstart="touchStart"
            @touchend="touchEnd"
            @touchmove="touchMove"
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
import { inject, ref, toRefs, watch } from 'vue';
import { useRouter } from 'vue-router';

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
        const swipeStart = ref(0);
        const swipeEnd = ref(false);
        const swiping = ref(0);

        const { id } = toRefs(props);
        const currentSlide = inject('currentSlide');
        const detailLink = inject('detailLink');

        const goTo = () => {
            router.push({ path: `${detailLink}/${id.value}` });
        };

        const swipe = () => {
            if (swipeStart.value > swiping.value + 10) {
                emit('next');
                swipeStart.value = 0;
                swipeEnd.value = false;
                swiping.value = 0;
            } else if (swiping.value > swipeStart.value + 10) {
                emit('prev');
                swipeStart.value = 0;
                swipeEnd.value = false;
                swiping.value = 0;
            }
        };

        const touchStart = (event) => {
            swipeStart.value = event.changedTouches[0].clientX;
            emit('enter');
        };

        const touchEnd = () => {
            emit('out');
            swipeEnd.value = true;
        };

        const touchMove = (event) => {
            swiping.value = event.changedTouches[0].clientX;
        };

        watch(
            () => swipeEnd.value,
            (newValue) => {
                if (newValue) {
                    swipe();
                }
            }
        );

        return { goTo, currentSlide, touchStart, touchEnd, touchMove };
    },
};
</script>
