<template>
    <header class="sticky top-0 flex gap-x-4 items-center bg-white h-[60px] px-4 sm:px-10 border-b">
        <button class="h-6 w-6" @click="router.back()" v-html="arrowBackIcon"></button>
        <slot>Back</slot>
    </header>
</template>

<script>
import { useRouter } from 'vue-router';
import { arrowBackIcon } from './icon';
export default {
    setup() {
        const router = useRouter();
        return {
            router,
            arrowBackIcon,
        };
    },
};
</script>
