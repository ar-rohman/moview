<template>
    <section>
        <div class="h-5 w-3/4 bg-gray-200"></div>
        <div class="flex flex-col sm:flex-row md:flex-col gap-5">
            <template v-for="item in 3" :key="item">
                <SidebarCardSkeleton />
            </template>
        </div>
        <div class="h-5 mt-4 block bg-gray-200 rounded-xl px-6 py-2 w-full"></div>
    </section>
</template>
<script>
import SidebarCardSkeleton from './SidebarCardSkeleton.vue';
export default {
    components: { SidebarCardSkeleton },
};
</script>
