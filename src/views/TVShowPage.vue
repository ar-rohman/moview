<template>
    <div class="">TV Shows</div>
    <carousel-card>
        <div class="flex gap-4 overflow-x-auto w-full">
            <card-item
                v-for="i in 6"
                id="1"
                :key="i"
                title="Spider-Man: No Way Home Spider-Man: No Way Home Spider-Man: No Way Home"
                vote-average="4.5"
                vote-count="90210"
                image="https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"
                images="https://image.tmdb.org/t/p/w500/5orGVWEYNBafPsukkGxHLQRXFZQ.jpg"></card-item>
        </div>
    </carousel-card>
    <carousel-card>
        <!-- <div class="flex gap-4 zoverflow-x-auto w-full"> -->
        <card-item
            v-for="i in 16"
            id="1"
            :key="i"
            title="Spider-Man: No Way Home Spider-Man: No Way Home Spider-Man: No Way Home"
            vote-average="4.5"
            vote-count="90210"
            image="https://image.tmdb.org/t/p/w500/5orGVWEYNBafPsukkGxHLQRXFZQ.jpg"></card-item>
        <!-- </div> -->
    </carousel-card>
</template>

<script>
import CardItem from '../components/MainCard.vue';
import CarouselCard from '../components/CarouselCard.vue';

export default {
    components: { CardItem, CarouselCard },
};
</script>
