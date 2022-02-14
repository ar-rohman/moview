<template>
    <div class="flex gap-x-4 overflow-hidden">
        <button
            v-for="i in 10"
            :key="i"
            class="w-24 h-11 rounded-2xl bg-gray-200 animate-pulse"></button>
    </div>
</template>
