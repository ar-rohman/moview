<template>
    <section>
        <HeroSectionSkeleton v-if="data.isLoading" :error="data.isError" />
        <div v-else class="flex flex-col gap-5">
            <router-link
                v-for="item in data.hero"
                :key="item.id"
                :to="`${detailLink}/${item.id}`"
                class="focus:outline-none focus-visible:outline-none">
                <div class="relative">
                    <img
                        :src="item.image"
                        :alt="item.title"
                        class="aspect-video md:aspect-[16/6] w-full object-center object-cover rounded-xl sm:rounded-2xl cursor-pointer" />
                    <div class="absolute inset-x-0 bottom-0 text-white dark:text-slate-300">
                        <div class="backdrop-blur-sm bg-black/30 rounded-xl sm:rounded-2xl w-full">
                            <div class="py-4 px-6 md:py-2 md:px-4">
                                <div class="line-clamp-1 lg:text-lg">
                                    {{ item.title }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
import HeroSectionSkeleton from './skeleton/HeroSectionSkeleton.vue';

export default {
    components: { HeroSectionSkeleton },
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
