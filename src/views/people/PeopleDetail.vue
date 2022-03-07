<template>
    <PeopleDetailSkeleton v-if="detail.isLoading" />
    <template v-else-if="detail.isError">
        <!-- TODO-->
        <div class="flex flex-col justify-center items-center">
            <h1 class="text-2xl font-semibold">ERROR</h1>
            <p>{{ detail.errorCode }}</p>
            <p>{{ detail.errorMessage }}</p>
        </div>
    </template>
    <template v-else>
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-20">
            <div class="flex flex-col gap-y-8 w-full lg:w-3/4 -mt-[75px] xs:mt-0">
                <div class="flex flex-col xs:flex-row gap-x-4 w-ful">
                    <div class="min-w-[192px] -mx-4 xs:mx-0">
                        <img
                            :src="detail.result.image"
                            :alt="detail.result.name"
                            class="xs:h-[256px] w-full rounded-none xs:rounded-xl lg:rounded-2xl object-cover object-top" />
                    </div>
                    <div class="flex flex-col gap-y-4 lg:w-1/2 sm:pr-4 lg:pr-10">
                        <div class="my-6 xs:mb-6 xs:mt-0">
                            <div class="font-semibold sm:font-bold text-3xl">
                                {{ detail.result.name }}
                            </div>
                            <div class="text-gray-500 dark:text-slate-400">
                                {{ detail.result.known_for_department }}
                            </div>
                        </div>
                        <div>
                            <div class="font-semibold mb-1">Birthday</div>
                            <p class="text-gray-500 dark:text-slate-400">
                                {{ detail.result.birthday }}
                            </p>
                        </div>
                        <div>
                            <div class="font-semibold mb-1">Deathday</div>
                            <p class="text-gray-500 dark:text-slate-400">
                                {{ detail.result.deathday }}
                            </p>
                        </div>
                        <div>
                            <div class="font-semibold mb-1">Place of birth</div>
                            <p class="text-gray-500 dark:text-slate-400">
                                {{ detail.result.place_of_birth }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row gap-10">
                    <div v-if="detail.result.biography" class="w-full md:w-2/3">
                        <div class="font-semibold mb-1">Biography</div>
                        <ShowMore :text="detail.result.biography" length="300" />
                    </div>
                    <div v-if="detail.result.also_known_as" class="w-full md:w-1/3">
                        <div class="font-semibold mb-1">Also known as</div>
                        <ul
                            v-for="(item, index) in detail.result.also_known_as"
                            :key="index"
                            class="list-disc list-inside">
                            <li>{{ item }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/4 xs:mt-[60px]">
                <PeopleList :data="popular" title="Popular People" />
            </div>
        </div>
    </template>
</template>

<script>
import { onMounted, reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
import PeopleService from '@/services/people-service';
import { peopleDetailResource, peopleListResource } from '@/resources/people-resource';
import ShowMore from '@/components/ShowMore.vue';
import PeopleList from '@/components/PeopleList.vue';
import PeopleDetailSkeleton from '@/components/skeleton/PeopleDetailSkeleton.vue';

export default {
    components: { ShowMore, PeopleList, PeopleDetailSkeleton },
    setup() {
        const route = useRoute();
        const detail = reactive({
            result: {},
            isLoading: true,
            isError: false,
            errorCode: null,
            errorMessage: null,
        });
        const popular = reactive({ result: {}, isLoading: true, isError: false });
        const credits = reactive({ result: {}, isLoading: true, isError: false });

        const getPersonDetail = async () => {
            try {
                const result = await PeopleService.getDetail(route.params.id);
                const { data } = result;
                detail.result = peopleDetailResource(data);
                detail.isLoading = false;
                detail.isError = false;
                route.meta.pageName = data.name;
            } catch (error) {
                detail.isLoading = false;
                detail.isError = true;
                detail.errorCode = error.response.status;
                detail.errorMessage = error.response.data.status_message;
            }
        };

        const getPopularPerson = async () => {
            try {
                const result = await PeopleService.getPopular();
                const { data } = result;
                popular.result = peopleListResource(data.results.slice(0, 6));
                popular.isLoading = false;
                popular.isError = false;
            } catch (error) {
                popular.isError = true;
            }
        };

        const getPersonCredits = async () => {
            try {
                const result = await PeopleService.getCredits(route.params.id);
                const { data } = result;
                credits.result.credits = data.cast.slice(0, 5);
                credits.isLoading = false;
                credits.isError = false;
            } catch (error) {
                credits.isError = true;
            }
        };

        watch(
            () => route.params.id,
            (newId) => {
                if (route.name === 'people-detail' && newId) {
                    detail.isLoading = true;
                    popular.isLoading = true;
                    getPersonDetail();
                    getPopularPerson();
                }
            }
        );
        onMounted(getPersonDetail);
        // onMounted(getPersonCredits);
        onMounted(getPopularPerson);
        return { detail, popular };
    },
};
</script>
