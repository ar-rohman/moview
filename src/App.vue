<template>
    <div
        class="font-sans text-gray-700 bg-white dark:bg-dark-900 dark:text-dark-200 min-h-screen max-w-screen-xl mx-auto">
        <HeaderSection v-if="route.meta.isShowHeader" />
        <main class="pb-20 sm:pb-4 pt-4 mx-4 sm:mx-10">
            <router-view />
        </main>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import HeaderSection from './components/HeaderSection.vue';

export default {
    components: { HeaderSection },
    setup() {
        const route = useRoute();
        return { route };
    },
};
</script>
