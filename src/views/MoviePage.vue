<template>
    <div class="flex flex-col md:flex-row gap-20">
        <div class="w-full md:w-2/3 lg:w-3/4">
            <!-- aas -->
            <HeroSection />
            <div class="flex my-10 gap-4">
                <MainCard
                    v-for="i in 6"
                    id="12"
                    :key="i"
                    title="Deadpool: From Comics to Screen... to Screen"
                    image="https://image.tmdb.org/t/p/w780//5orGVWEYNBafPsukkGxHLQRXFZQ.jpg"
                    vote-average="4.5"
                    vote-count="1209" />
            </div>

            <div class="flex my-10 gap-4">
                <MainCard
                    v-for="i in 6"
                    id="12"
                    :key="i"
                    title="Deadpool: From Comics to Screen... to Screen"
                    image="https://image.tmdb.org/t/p/w780//5orGVWEYNBafPsukkGxHLQRXFZQ.jpg"
                    vote-average="4.5"
                    vote-count="1209" />
            </div>

            <div class="flex my-10 gap-4">
                <MainCard
                    v-for="i in 6"
                    id="12"
                    :key="i"
                    title="Deadpool: From Comics to Screen... to Screen"
                    image="https://image.tmdb.org/t/p/w780//5orGVWEYNBafPsukkGxHLQRXFZQ.jpg"
                    vote-average="4.5"
                    vote-count="1209" />
            </div>
        </div>
        <div class="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-4">
            <!-- assdssdsdsd -->
            <SidebarCard
                v-for="i in 6"
                id="12"
                :key="i"
                title="Deadpool: From Comics to Screen... to Screen"
                image="https://image.tmdb.org/t/p/w780//5orGVWEYNBafPsukkGxHLQRXFZQ.jpg"
                vote-average="4.5" />
        </div>
        <!-- <div class="bg-blue-300 w-full md:w-1/3 md:ml-5">
        </div> -->
    </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import SidebarCard from '../components/SidebarCard.vue';
import MainCard from '../components/MainCard.vue';

export default {
    components: { HeroSection, SidebarCard, MainCard },
};
</script>
