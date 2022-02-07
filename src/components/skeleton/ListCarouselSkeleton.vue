<template>
    <div class="my-10 animate-pulse">
        <div class="flex justify-between mb-3">
            <div class="h-5 w-1/4 rounded-md bg-gray-200"></div>
            <div class="self-end h-4 w-20 rounded-md bg-gray-200"></div>
        </div>
        <carousel-card>
            <template v-for="i in 20" :key="i">
                <MainCardSkeleton />
            </template>
        </carousel-card>
    </div>
</template>

<script>
import MainCardSkeleton from './MainCardSkeleton.vue';
import CarouselCard from '@/components/CarouselCard.vue';
export default {
    components: { MainCardSkeleton, CarouselCard },
};
</script>
