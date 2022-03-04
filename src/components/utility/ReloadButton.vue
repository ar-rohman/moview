<template>
    <button
        class="flex items-center justify-center text-red-500 dark:text-red-400 transform transition motion-safe:hover:scale-110 duration-500 focus:outline-none focus-visible:ring-red-400 dark:focus-visible:ring-red-300 focus-visible:ring-2 focus-visible:rounded-lg"
        :class="{ 'flex-col': showText === 'vertical' }"
        @click="reload">
        <BaseIcon name="reload" :size="size" :class="animate" />
        <p v-if="showText !== 'none'" :class="textStyle">Reload</p>
    </button>
</template>

<script>
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { ref, toRefs } from 'vue';

export default {
    components: { BaseIcon },
    props: {
        size: {
            type: String,
            default: 'h-10 w-10',
        },
        showText: {
            type: String,
            validator(value) {
                return ['horizontal', 'vertical', 'none'].includes(value);
            },
            default: 'horizontal',
        },
        textStyle: {
            type: String,
            default: '',
        },
    },
    emits: ['reload'],
    setup(props, { emit }) {
        const animate = ref();
        const vertical = ref('flex-col');
        const { showText } = toRefs(props);
        vertical.value = showText.value === 'vertical' ? 'flex-col' : '';

        const reload = () => {
            emit('reload');
            animate.value = 'animate-spin';
        };

        return {
            animate,
            vertical,
            reload,
        };
    },
};
</script>
