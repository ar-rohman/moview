<template>
    <div :class="textClass">
        <!-- {{ content }} -->
        <p class="inline" v-html="content"></p>
        <span
            class="text-red-500 dark:text-red-400 font-semibold hover:text-red-600 dark:hover:text-red-300 cursor-pointer whitespace-nowrap select-none"
            @click="toggleString">
            {{ toggleMoreLess }}
        </span>
    </div>
</template>

<script>
import { onMounted, ref, toRefs } from 'vue';
import { turncateString } from '@/utils/string';

export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        length: {
            type: [String, Number],
            default: null,
        },
        textClass: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const isTruncated = ref(true);
        const toggleMoreLess = ref(null);
        const content = ref(null);
        const { text, length } = toRefs(props);
        const toggleString = () => {
            if (isTruncated.value) {
                content.value = turncateString(text.value, length.value);
                isTruncated.value = false;
                toggleMoreLess.value = text.value.length > length.value ? ' show more' : '';
            } else {
                content.value = turncateString(text.value);
                isTruncated.value = true;
                toggleMoreLess.value = text.value.length > length.value ? ' show less' : '';
            }
        };
        onMounted(toggleString);

        return { content, toggleMoreLess, toggleString };
    },
};
</script>
