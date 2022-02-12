<template>
    <div v-if="data.length" class="flex justify-center relative">
        <div class="relative h-80 w-full overflow-hidden rounded-xl sm:rounded-3xl">
            <carousel-pagination
                v-if="pagination"
                :total="data.length"
                :pagination-position="paginationPosition"
                @switch="switchSlide($event)"></carousel-pagination>
            <div>
                <carousel-slide
                    v-for="(item, index) in data"
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
        <carousel-navigation v-if="navigation" @prev="previous" @next="next"></carousel-navigation>
    </div>
    <HeroSectionSkeleton v-else />
</template>

<script>
import { ref, onMounted, onBeforeUnmount, toRefs, provide } from 'vue';
import CarouselSlide from './CarouselSlide.vue';
import CarouselNavigation from './CarouselNavigation.vue';
import CarouselPagination from './CarouselPagination.vue';
import HeroSectionSkeleton from '../skeleton/HeroSectionSkeleton.vue';

export default {
    components: { CarouselSlide, CarouselNavigation, CarouselPagination, HeroSectionSkeleton },
    props: {
        data: {
            type: Array,
            default() {
                return [];
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
        const { data, duration, navigation, paginationPosition } = toRefs(props); // navigation belum dipake
        provide('currentSlide', currentSlide);
        provide('paginationPosition', paginationPosition);
        // const navigationVisibility = ref(false);
        const setCurrentSlide = (index) => {
            currentSlide.value = index;
        };
        const previous = (step = -1) => {
            const index =
                currentSlide.value > 0 ? currentSlide.value + step : data.value.length - 1;
            setCurrentSlide(index);
            slideDirection.value = 'left';
            startSlideTimer();
        };
        const _next = (step = 1) => {
            const index =
                currentSlide.value < data.value.length - 1 ? currentSlide.value + step : 0;
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
        // const showNavigation = () => {
        //     navigationVisibility.value = true;
        // };
        // const hideNavigation = () => {
        //     navigationVisibility.value = false;
        // };
        // const toggleNavigation = () => {
        //     return navigation.value && navigationVisibility.value;
        // };
        // const mouseEnter = () => {
        //     stopSlideTimer();
        //     showNavigation();
        // };
        // const mouseOut = () => {
        //     startSlideTimer();
        //     hideNavigation();
        // };

        onMounted(startSlideTimer);
        onBeforeUnmount(stopSlideTimer);

        return {
            currentSlide,
            slideDirection,
            // navigationVisibility,
            // showNavigation,
            // hideNavigation,
            startSlideTimer,
            stopSlideTimer,
            switchSlide,
            next,
            previous,
            // toggleNavigation,
            // mouseEnter,
            // mouseOut,
        };
    },
};
</script>
