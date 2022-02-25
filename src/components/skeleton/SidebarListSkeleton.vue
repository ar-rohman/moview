<template>
    <section :class="{ 'animate-pulse': !error }">
        <div v-if="error" class="flex items-center gap-x-8">
            <div class="font-semibold md:text-lg">{{ title }}</div>
            <ReloadButton @reload="reload" />
        </div>
        <div v-else class="h-5 w-3/4 bg-gray-200 rounded-md"></div>
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            <template v-for="item in 4" :key="item">
                <SidebarCardSkeleton />
            </template>
        </div>
        <div class="h-10 mt-4 block bg-gray-200 rounded-xl px-6 py-2 w-full"></div>
    </section>
</template>

<script>
import { emitter } from '@/utils/emitter';
import ReloadButton from '@/components/utility/ReloadButton.vue';
import SidebarCardSkeleton from './SidebarCardSkeleton.vue';

export default {
    components: { SidebarCardSkeleton, ReloadButton },
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
            emitter.emit('reload-sidebar-list');
        };

        return {
            reload,
        };
    },
};
</script>
