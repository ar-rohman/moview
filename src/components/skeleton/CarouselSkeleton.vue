<template>
    <div class="relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ReloadButton
                v-if="error"
                size="h-16 w-16"
                show-text="vertical"
                text-style="font-semibold"
                @reload="reload" />
        </div>
        <div
            class="aspect-video w-full rounded-xl sm:rounded-3xl bg-gray-200 dark:bg-slate-600"
            :class="{ 'animate-pulse': !error }"></div>
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
