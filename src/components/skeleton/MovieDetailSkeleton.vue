<template>
    <div class="relative -mt-[75px] -mx-4 sm:-mx-10 animate-pulse">
        <div class="h-80 w-full bg-gray-600 dark:bg-slate-900"></div>
        <div class="absolute inset-0 -bottom-px">
            <div
                class="bg-gradient-to-b from-white/20 dark:from-slate-900/50 to-white dark:to-slate-900 w-full h-full">
                <div class="h-full flex flex-col justify-between p-4 sm:px-10"></div>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row gap-10 lg:gap-20 my-10 animate-pulse">
        <div class="w-full md:w-2/3">
            <div class="flex gap-4">
                <div
                    class="h-[138px] w-[92px] min-w-[92px] rounded-xl bg-gray-200 dark:bg-slate-600"></div>
                <div class="flex flex-col gap-4 w-full">
                    <div class="flex flex-col gap-y-2 w-full">
                        <div
                            class="w-full sm:w-1/2 h-8 bg-gray-200 dark:bg-slate-600 rounded-md"></div>
                        <div class="flex gap-x-2 w-3/4">
                            <div
                                class="w-1/2 sm:w-1/4 h-6 bg-gray-200 dark:bg-slate-600 rounded-md"></div>
                            <div
                                class="w-1/2 sm:w-1/4 h-6 bg-gray-200 dark:bg-slate-600 rounded-md"></div>
                        </div>
                    </div>
                    <div class="flex gap-2 flex-wrap">
                        <div class="w-24 h-9 rounded-2xl bg-gray-200 dark:bg-slate-600"></div>
                        <div class="w-24 h-9 rounded-2xl bg-gray-200 dark:bg-slate-600"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row gap-10 mt-6">
                <div class="w-full lg:w-2/3">
                    <div class="h-6 w-32 rounded-md bg-gray-200 dark:bg-slate-600 mb-2"></div>
                    <div class="h-5 w-full rounded-md bg-gray-200 dark:bg-slate-600 mb-1"></div>
                    <div class="h-5 w-full rounded-md bg-gray-200 dark:bg-slate-600 mb-1"></div>
                    <div class="h-5 w-full rounded-md bg-gray-200 dark:bg-slate-600 mb-1"></div>
                    <div class="mt-10">
                        <UserReviewSkeleton />
                    </div>
                </div>
                <div class="w-full lg:w-1/3">
                    <PeopleListSkeleton />
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/3">
            <SidebarListSkeleton />
        </div>
    </div>
    <ListCarouselSkeleton />
</template>

<script>
import PeopleListSkeleton from './PeopleListSkeleton.vue';
import UserReviewSkeleton from './UserReviewSkeleton.vue';
import SidebarListSkeleton from './SidebarListSkeleton.vue';
import ListCarouselSkeleton from './ListCarouselSkeleton.vue';

export default {
    components: {
        PeopleListSkeleton,
        UserReviewSkeleton,
        SidebarListSkeleton,
        ListCarouselSkeleton,
    },
};
</script>
