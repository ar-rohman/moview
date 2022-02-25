<template>
    <div class="flex flex-col gap-5" :class="{ 'animate-pulse': !error }">
        <div class="relative">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ReloadButton v-if="error" @reload="reload" />
            </div>
            <div
                class="aspect-video md:aspect-[16/6] w-full rounded-xl sm:rounded-3xl bg-gray-200"></div>
        </div>
        <div class="relative">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <ReloadButton v-if="error" @reload="reload" />
            </div>
            <div
                class="aspect-video md:aspect-[16/6] w-full rounded-xl sm:rounded-3xl bg-gray-200"></div>
        </div>
    </div>
</template>

<script>
import { emitter } from '@/utils/emitter';
import ReloadButton from '@/components/utility/ReloadButton.vue';

export default {
    components: { ReloadButton },
    props: {
        error: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const reload = () => {
            emitter.emit('reload-hero-carousel');
        };

        return {
            reload,
        };
    },
};
</script>
