<template>
    <CarouselSkeleton v-if="data.isLoading" :error="data.isError" />
    <div v-else class="flex justify-center relative" data-test="carousel">
        <div class="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-3xl">
            <carousel-pagination
                v-if="pagination"
                :total="data.carousel.length"
                @switch="switchSlide($event)"></carousel-pagination>
            <div>
                <carousel-slide
                    v-for="(item, index) in data.carousel"
                    :id="item.id"
                    :key="`item-${index}`"
                    :slide="item.image"
                    :title="item.title"
                    :index="index"
                    :direction="slideDirection"
                    @enter="stopSlideTimer"
                    @out="startSlideTimer"
                    @prev="previous"
                    @next="next"></carousel-slide>
            </div>
        </div>
        <carousel-navigation
            v-if="navigation && !data.isError"
            @prev="previous"
            @next="next"></carousel-navigation>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, toRefs, provide, onUnmounted } from 'vue';
import CarouselSlide from './CarouselSlide.vue';
import CarouselNavigation from './CarouselNavigation.vue';
import CarouselPagination from './CarouselPagination.vue';
import CarouselSkeleton from '../skeleton/CarouselSkeleton.vue';

export default {
    components: {
        CarouselSlide,
        CarouselNavigation,
        CarouselPagination,
        CarouselSkeleton,
    },
    props: {
        data: {
            type: Object,
            default() {
                return {};
            },
            require: true,
        },
        navigation: {
            type: Boolean,
            default: false,
        },
        pagination: {
            type: Boolean,
            default: false,
        },
        paginationPosition: {
            type: String,
            default: 'right',
            validator(value) {
                return ['left', 'center', 'right'].includes(value);
            },
        },
        duration: {
            type: Number,
            default: 5000,
        },
    },
    setup(props) {
        const currentSlide = ref(0);
        const slideDuration = ref(null);
        const slideDirection = ref('right');
        const { data, duration, paginationPosition } = toRefs(props);
        provide('currentSlide', currentSlide);
        provide('paginationPosition', paginationPosition);
        const setCurrentSlide = (index) => {
            currentSlide.value = index;
        };
        const previous = (step = -1) => {
            const index =
                currentSlide.value > 0 ? currentSlide.value + step : data.value.carousel.length - 1;
            setCurrentSlide(index);
            slideDirection.value = 'left';
            startSlideTimer();
        };
        const _next = (step = 1) => {
            const index =
                currentSlide.value < data.value.carousel.length - 1 ? currentSlide.value + step : 0;
            setCurrentSlide(index);
            slideDirection.value = 'right';
        };
        const next = (step = 1) => {
            _next(step);
            startSlideTimer();
        };
        const startSlideTimer = () => {
            stopSlideTimer();
            slideDuration.value = setInterval(() => {
                _next();
            }, duration.value);
        };
        const stopSlideTimer = () => {
            clearInterval(slideDuration.value);
        };
        const switchSlide = (index) => {
            const step = index - currentSlide.value;
            if (step > 0) {
                next(step);
            } else {
                previous(step);
            }
        };

        const isVisible = () => {
            if (document.hidden) {
                stopSlideTimer();
            } else {
                startSlideTimer();
            }
        };

        onMounted(startSlideTimer);
        onBeforeUnmount(stopSlideTimer);
        onMounted(() => document.addEventListener('visibilitychange', isVisible));
        onUnmounted(() => document.removeEventListener('visibilitychange', isVisible));

        return {
            currentSlide,
            slideDirection,
            startSlideTimer,
            stopSlideTimer,
            switchSlide,
            next,
            previous,
        };
    },
};
</script>
