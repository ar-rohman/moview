<template>
    <transition
        enter-active-class="transition duration-1000 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-1000 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="showVideo" class="fixed inset-0 z-30 bg-black/70">
            <div
                class="absolute top-0 md:left-1/2 md:-translate-x-1/2 aspect-video w-full md:w-9/12 max-w-screen-lg max-h-screen">
                <div class="w-full flex justify-end">
                    <button
                        class="text-white/70 h-[40px] hover:text-white focus:outline-none focus:text-white"
                        @click="showVideo = false">
                        <BaseIcon name="close" size="h-8 w-8" />
                    </button>
                </div>

                <iframe
                    ref="iframe"
                    :src="`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&version=3&enablejsapi=1`"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    class="w-full h-full"></iframe>
            </div>
        </div>
    </transition>
</template>

<script>
import { ref, watch } from 'vue';
import { emitter } from '@/utils/emitter';
import { onClickOutside, useMagicKeys } from '@vueuse/core';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    props: {
        id: {
            type: [String, null],
            required: true,
        },
    },
    setup() {
        const showVideo = ref(false);
        const iframe = ref(null);
        const { escape } = useMagicKeys();
        emitter.on('show-trailer-video', () => (showVideo.value = true));
        onClickOutside(iframe, () => (showVideo.value = false));
        watch(escape, (key) => {
            if (key) showVideo.value = false;
        });

        return {
            showVideo,
            iframe,
        };
    },
};
</script>
