<template>
    <!-- <div class="">about</div> -->
    <CarouselSkeleton :error="true" />
</template>

<script>
import CarouselSkeleton from '../components/skeleton/CarouselSkeleton.vue';
import { emitter } from '@/utils/emitter';
export default {
    components: { CarouselSkeleton },
    setup() {
        const data = {
            isLoading: true,
            isError: true,
            result: {},
        };

        emitter.on('reload-hero-carousel', () => {
            console.log('about fire');
        });

        return { data };
    },
};
</script>
