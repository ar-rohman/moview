<template>
    <!-- <div class="">about</div> -->
    <HeroSectionSkeleton />
    <MainCardSkeleton />
    <ListCarouselSkeleton />
    <SidebarCardSkeleton />
    <SidebarListSkeleton />
</template>

<script>
import MainCardSkeleton from '../components/skeleton/MainCardSkeleton.vue';
import ListCarouselSkeleton from '../components/skeleton/ListCarouselSkeleton.vue';
import HeroSectionSkeleton from '../components/skeleton/HeroSectionSkeleton.vue';
import SidebarCardSkeleton from '../components/skeleton/SidebarCardSkeleton.vue';
import SidebarListSkeleton from '../components/skeleton/SidebarListSkeleton.vue';
export default {
    components: {
        MainCardSkeleton,
        ListCarouselSkeleton,
        HeroSectionSkeleton,
        SidebarCardSkeleton,
        SidebarListSkeleton,
    },
};
</script>
