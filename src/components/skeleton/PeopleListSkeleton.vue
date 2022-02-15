<template>
    <div class="w-32 h-6 bg-gray-200 rounded-md mb-4 animate-pulse"></div>
    <div class="flex lg:flex-col gap-4 flex-wrap animate-pulse">
        <template v-for="item in 5" :key="item">
            <div class="flex items-center flex-col lg:flex-row gap-3">
                <div class="w-[45px] h-[45px] min-w-[45px] bg-gray-200 rounded-full"></div>
                <div class="flex flex-col justify-between">
                    <div
                        class="flex gap-1 flex-col flex-wrap items-center lg:items-start w-[80px] lg:w-full">
                        <div class="w-full lg:w-40 h-6 bg-gray-200 rounded-md"></div>
                        <div class="w-3/4 lg:w-36 h-4 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
