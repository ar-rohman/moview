<template>
    <div class="flex gap-x-4 items-center h-[60px] z-10 mb-4" :class="customClass">
        <button class="h-6 w-6" @click="router.back()" v-html="arrowBackIcon"></button>
        <div class="line-clamp-1 font-semibold">{{ textToDisplay }}</div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { arrowBackIcon } from './icon';
export default {
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
        const { displayTextAfter, styles, text } = toRefs(props);
        const customClass = ref(null);
        const textToDisplay = ref();
        const scrolling = () => {
            const htmlScroll = document.documentElement.scrollTop;
            // console.log(htmlScroll);
            if (htmlScroll > 5) {
                customClass.value = `${styles.value} bg-white border-b fixed top-0 inset-x-0 px-4 sm:px-10`;
            } else {
                customClass.value = `${styles.value} bg-transparent`;
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
            arrowBackIcon,
        };
    },
};
</script>
