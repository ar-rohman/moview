<template>
    <header
        class="sticky top-0 flex justify-between gap-x-10 items-center bg-white py-3 px-4 sm:px-10">
        <div class="flex items-center">
            <img src="../assets/images/logo.png" alt="moview" class="h-10 w-10" />
            <p class="font-bold text-red-500 text-xl tracking-tighter ml-4">MOVIEW</p>
            <div class="md:ml-20 sm:ml-8">
                <NavMenu />
            </div>
        </div>
        <div class="flex zw-full justify-end gap-x-6">
            <div class="h-6 w-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                        <g data-name="search">
                            <rect width="24" height="24" opacity="0" />
                            <path
                                d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
                        </g>
                    </g>
                </svg>
            </div>
            <div class="h-6 w-6">
                <div class="" v-html="sunOutline"></div>
            </div>
            <div class="h-6 w-6">
                <div class="" v-html="languageOutline"></div>
            </div>
        </div>
    </header>
</template>

<script>
import NavMenu from './NavMenu.vue';
import { sunOutline, languageOutline } from './icon';
export default {
    components: { NavMenu },
    setup() {
        return {
            sunOutline,
            languageOutline,
        };
    },
};
</script>
