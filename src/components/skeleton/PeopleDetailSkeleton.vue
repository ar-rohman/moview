<template>
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <div class="flex flex-col gap-y-8 w-full lg:w-3/4 -mt-[75px] xs:mt-0">
            <div class="flex flex-col xs:flex-row gap-x-4 w-ful">
                <div class="min-w-[192px] -mx-4 xs:mx-0 animate-pulse">
                    <div
                        class="h-[256px] w-full rounded-none xs:rounded-xl lg:rounded-2xl bg-gray-200"></div>
                </div>
                <div class="flex flex-col gap-y-4 lg:w-1/2 sm:pr-4 lg:pr-10 animate-pulse">
                    <div class="my-6 xs:mb-6 xs:mt-0">
                        <div
                            class="h-8 w-full font-semibold sm:font-bold text-3xl bg-gray-200 rounded-md"></div>
                        <div class="h-5 w-3/4 bg-gray-200 rounded-md mt-1"></div>
                    </div>
                    <div>
                        <div class="h-6 w-1/3 bg-gray-200 rounded-md mb-1"></div>
                        <div class="h-5 w-1/2 bg-gray-200 rounded-md"></div>
                    </div>
                    <div>
                        <div class="h-6 w-1/3 bg-gray-200 rounded-md mb-1"></div>
                        <div class="h-5 w-1/2 bg-gray-200 rounded-md"></div>
                    </div>
                    <div>
                        <div class="h-6 w-1/3 bg-gray-200 rounded-md mb-1"></div>
                        <div class="h-5 w-1/2 bg-gray-200 rounded-md"></div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-10">
                <div class="w-full md:w-2/3 animate-pulse">
                    <div class="h-6 w-1/4 bg-gray-200 rounded-md mb-2"></div>
                    <div class="h-5 w-full bg-gray-200 rounded-md mb-1"></div>
                    <div class="h-5 w-full bg-gray-200 rounded-md mb-1"></div>
                    <div class="h-5 w-full bg-gray-200 rounded-md mb-1"></div>
                    <div class="h-5 w-full bg-gray-200 rounded-md mb-1"></div>
                </div>
                <div class="w-full md:w-1/3 animate-pulse">
                    <div class="h-6 w-1/4 bg-gray-200 rounded-md mb-2"></div>
                    <div class="h-5 w-full bg-gray-200 rounded-md mb-1"></div>
                    <div class="h-5 w-1/2 bg-gray-200 rounded-md mb-1"></div>
                    <div class="h-5 w-3/4 bg-gray-200 rounded-md mb-1"></div>
                    <div class="h-5 w-1/3 bg-gray-200 rounded-md mb-1"></div>
                </div>
            </div>
        </div>
        <div class="w-full lg:w-1/4 xs:mt-[60px]">
            <PeopleListSkeleton />
        </div>
    </div>
</template>

<script>
import PeopleListSkeleton from './PeopleListSkeleton.vue';

export default {
    components: { PeopleListSkeleton },
};
</script>
