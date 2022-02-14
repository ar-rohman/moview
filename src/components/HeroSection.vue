<template>
    <section>
        <HeroSectionSkeleton v-if="data.isLoading" />
        <router-link
            v-else
            :to="`${detailLink}/${data.hero.id}`"
            class="focus:outline-none focus-visible:outline-none">
            <div class="relative">
                <img
                    :src="data.hero.image"
                    :alt="data.hero.title"
                    class="h-80 w-full object-center object-cover rounded-xl sm:rounded-3xl cursor-pointer" />
                <div class="absolute left-4 bottom-4 text-white">
                    <div class="backdrop-blur-sm bg-black/30 rounded-xl sm:rounded-2xl w-full">
                        <div class="py-4 px-6">
                            <div class="md:text-lg lg:text-2xl lg:font-semibold">
                                {{ data.hero.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
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
