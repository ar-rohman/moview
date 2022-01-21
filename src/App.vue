<template>
    <div class="font-sans text-gray-700 bg-white dark:bg-dark-900 dark:text-dark-200 min-h-screen">
        <HeaderSection />
        <main class="pt-4 mx-4 sm:mx-10">
            <router-view />
        </main>
    </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
export default { components: { HeaderSection } };
</script>
