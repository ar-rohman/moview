<template>
    <div :class="{ 'animate-pulse': !error }">
        <div v-if="error" class="flex items-center gap-x-8">
            <div class="font-semibold md:text-lg">{{ title }}</div>
            <ReloadButton @reload="reload" />
        </div>
        <div v-else class="flex justify-between mb-4">
            <div class="h-5 w-1/4 rounded-md bg-gray-200 dark:bg-slate-600"></div>
            <div class="self-end h-4 w-20 rounded-md bg-gray-200 dark:bg-slate-600"></div>
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
import { emitter } from '@/utils/emitter';
import ReloadButton from '@/components/utility/ReloadButton.vue';
import MainCardSkeleton from './MainCardSkeleton.vue';

export default {
    components: { MainCardSkeleton, ReloadButton },
    props: {
        error: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: '',
        },
    },
    setup() {
        const reload = () => {
            emitter.emit('reload-list-carousel');
        };

        return {
            reload,
        };
    },
};
</script>
