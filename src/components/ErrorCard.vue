<template>
    <div class="relative md:h-screen md:-mt-[90px]">
        <div
            class="absolute top-10 md:top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 rounded-2xl w-full max-w-[512px] h-min-content max-h-[512px] shadow-md dark:shadow-none">
            <div class="flex items-center gap-x-2 h-10 bg-slate-600/30 w-full rounded-t-2xl p-4">
                <div class="h-3 w-3 rounded-full bg-red-500"></div>
                <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div class="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <div
                class="flex flex-col justify-center items-center gap-y-4 p-4 bg-slate-300/40 h-full rounded-b-2xl">
                <div class="text-5xl sm:text-9xl font-bold">
                    {{ code }}
                </div>
                <p>{{ message }}</p>
                <div class="items-center my-8">
                    <router-link
                        to="/"
                        class="px-6 py-2 rounded-lg bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-500 focus-visible:ring-red-400 focus:outline-none focus-visible:ring-2 text-white">
                        Back to home
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        code: {
            type: [String, Number],
            default: 404,
        },
        message: {
            type: String,
            default: 'Sorry, the page you requested could not be found.',
        },
    },
};
</script>
