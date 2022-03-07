<template>
    <div class="font-semibold md:text-lg mb-3">About</div>
    <div class="flex flex-col sm:flex-row-reverse gap-y-10 gap-x-20 justify-between">
        <div class="flex items-center justify-center">
            <img :src="aboutImage" alt="about" class="w-[384px]" />
        </div>
        <div class="w-full max-w-[512px]">
            Moview is where people find their favorite movies and discover movies around the world.
            <p>
                All movies data taken from
                <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener"
                    class="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-400/80 focus:text-red-700 dark:focus:text-red-500/80">
                    TMDB
                </a>
            </p>
        </div>
    </div>
    <div class="fixed bottom-20 sm:bottom-4 text-sm">
        Copyright © 2022
        <a
            href="https://github.com/ar-rohman"
            target="_blank"
            rel="noopener"
            class="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-400/80 focus:text-red-700 dark:focus:text-red-500/80">
            Rohman
        </a>
    </div>
</template>

<script>
import aboutImage from '@/assets/images/about.svg';

export default {
    setup() {
        return {
            aboutImage,
        };
    },
};
</script>
