<template>
    <router-link
        :to="`/people/detail/${id}`"
        class="flex items-center flex-col lg:flex-row gap-3 focus:outline-none focus-visible:ring focus-visible:ring-red-400">
        <img
            :src="image"
            class="rounded-full object-cover object-center"
            :class="`w-[45px] h-[45px] min-w-[45px]`"
            :alt="personName" />
        <div class="flex flex-col justify-between">
            <div
                class="flex flex-col flex-wrap items-center lg:items-start w-[80px] lg:w-full text-center lg:text-left text-xs lg:text-sm">
                <div class="font-semibold">
                    {{ personName }}
                </div>
                <div class="text-gray-600 dark:text-slate-400">{{ knownFor }}</div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        id: {
            type: [Number, String],
            default: '',
        },
        personName: {
            type: String,
            default: '',
        },
        knownFor: {
            type: String,
            default: '',
        },
        image: {
            type: String,
            default: '',
        },
    },
};
</script>
