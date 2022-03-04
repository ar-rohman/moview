<template>
    <div class="h-5 w-1/4 rounded-md bg-gray-200 dark:bg-slate-600 mb-4 animate-pulse"></div>
    <div class="flex gap-x-4 overflow-hidden">
        <button
            v-for="i in 10"
            :key="i"
            class="w-24 min-w-[84px] h-11 rounded-2xl bg-gray-200 dark:bg-slate-600 animate-pulse"></button>
    </div>
</template>
