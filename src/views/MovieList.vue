<template>
    <div class="font-semibold md:text-lg mb-3">Movie List</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-for="i in 200" :key="i">
            <main-card
                id="1"
                title="Spider-Man: No Way Home Spider-Man: No Way Home Spider-Man: No Way Home"
                vote-average="4.5"
                vote-count="90210"
                image="https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
                card-width="w-full" />
        </template>
    </div>
    <BackToTop />
</template>

<script>
import MainCard from '../components/MainCard.vue';
import BackToTop from '../components/BackToTop.vue';

export default {
    components: {
        MainCard,
        BackToTop,
    },
};
</script>
