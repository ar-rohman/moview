<template>
    <router-link
        :to="`${detailLink}/${data.id}`"
        class="focus:outline-none focus-visible:outline-none">
        <div class="relative mt-10">
            <img
                :src="data.image"
                :alt="data.title"
                class="h-80 w-full object-center object-cover rounded-xl sm:rounded-3xl cursor-pointer" />
            <div class="absolute left-4 bottom-4 text-white">
                <div class="backdrop-blur-sm bg-black/30 rounded-xl sm:rounded-2xl w-full">
                    <div class="py-4 px-6">
                        <div class="md:text-lg lg:text-2xl lg:font-semibold">
                            {{ data.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    inject: ['detailLink'],
    props: {
        data: {
            type: Object,
            required: true,
            default() {
                return {};
            },
        },
    },
};
</script>
