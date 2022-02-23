<template>
    <div class="animate-pulse">
        <div class="flex justify-between mb-4">
            <div class="h-5 w-1/4 rounded-md bg-gray-200"></div>
            <div class="self-end h-4 w-20 rounded-md bg-gray-200"></div>
        </div>
        <div class="flex overflow-hidden">
            <div class="flex gap-4 m-[3px]">
                <template v-for="i in 10" :key="i">
                    <MainCardSkeleton />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import MainCardSkeleton from './MainCardSkeleton.vue';

export default {
    components: { MainCardSkeleton },
};
</script>
