<template>
    <div class="flex gap-x-4 items-center h-[60px] z-10 mb-4" :class="[styles, customClass]">
        <button
            class="bg-white/50 rounded-full p-2 hover:bg-white/70 focus:bg-white zpx-4 zsm:px-10"
            @click="router.back()">
            <BaseIcon name="arrowBack" />
        </button>
        <div class="line-clamp-1 font-semibold">{{ textToDisplay }}</div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    props: {
        displayTextAfter: {
            type: [Number, String],
            default: 5,
        },
        text: {
            type: String,
            default: null,
        },
        styles: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const router = useRouter();
        const { displayTextAfter, text } = toRefs(props);
        const customClass = ref(null);
        const textToDisplay = ref();
        const scrolling = () => {
            const htmlScroll = document.documentElement.scrollTop;
            if (htmlScroll > 5) {
                customClass.value = `bg-white border-b fixed top-0 max-w-screen-xl mx-auto w-full inset-x-0 px-4 sm:px-10`;
            } else {
                customClass.value = 'bg-transparent';
            }
            if (htmlScroll > displayTextAfter.value) {
                textToDisplay.value = text.value;
            } else {
                textToDisplay.value = null;
            }
        };
        onMounted(() => window.addEventListener('scroll', scrolling));
        onUnmounted(() => window.removeEventListener('scroll', scrolling));

        return {
            router,
            customClass,
            textToDisplay,
        };
    },
};
</script>
