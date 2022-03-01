<template>
    <div
        class="font-sans text-gray-700 bg-white dark:bg-dark-900 dark:text-dark-200 min-h-screen max-w-screen-xl mx-auto">
        <HeaderSection v-if="route.meta.isShowHeader" />
        <main class="pb-20 sm:pb-4 mx-4 sm:mx-10" :class="[route.meta.isShowHeader ? 'pt-4' : '']">
            <router-view />
        </main>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import HeaderSection from './components/header/HeaderSection.vue';
import logo from '@/assets/images/logo.png';

export default {
    components: { HeaderSection },
    setup() {
        const route = useRoute();
        useHead({
            title: computed(() => `${route.meta.pageName} - ${import.meta.env.VITE_APP_NAME}`),
            meta: [
                {
                    name: 'description',
                    content: 'Moview is place to get details for your favorite movies.',
                },
                {
                    name: 'author',
                    content: 'Rohman',
                },
                {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'og:title',
                    content: computed(
                        () => `${route.meta.pageName} - ${import.meta.env.VITE_APP_NAME}`
                    ),
                },
                {
                    property: 'og:site_name',
                    content: import.meta.env.VITE_APP_NAME,
                },
                {
                    property: 'og:url',
                    content: 'https://moview-app.vercel.app/',
                },
                {
                    property: 'og:description',
                    content: 'Moview is place to get details for your favorite movies.',
                },
                {
                    property: 'og:image',
                    content: logo,
                },
            ],
        });
        console.log(route);
        return { route };
    },
};
</script>
