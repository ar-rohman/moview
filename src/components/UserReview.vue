<template>
    <UserReviewSkeleton v-if="data.isLoading" />
    <section v-else>
        <div class="font-semibold mb-3">Reviews ({{ data.result.length }})</div>
        <div v-if="data.result.length" class="flex flex-col gap-y-8">
            <div v-for="item in reviews" :key="item.id">
                <div class="flex gap-4">
                    <img
                        :src="item.avatar"
                        :alt="item.name"
                        class="h-[35px] w-[35px] min-w-[35px] rounded-full object-cover object-center" />
                    <div>
                        <div class="font-semibold text-sm">{{ item.name }}</div>
                        <div class="flex gap-x-4 items-center">
                            <div class="flex gap-x-0.5">
                                <template v-if="item.star.two_star">
                                    <div v-for="i in item.star.two_star" :key="i">
                                        <BaseIcon
                                            name="star"
                                            size="h-4 w-4"
                                            color="text-yellow-400" />
                                    </div>
                                </template>
                                <template v-if="item.star.one_star">
                                    <BaseIcon
                                        name="starHalf"
                                        size="h-4 w-4"
                                        :color="['text-yellow-400', 'text-slate-300']" />
                                </template>
                                <template v-if="item.star.zero_star">
                                    <div v-for="i in item.star.zero_star" :key="i">
                                        <BaseIcon
                                            name="star"
                                            size="h-4 w-4"
                                            color="text-slate-300" />
                                    </div>
                                </template>
                            </div>
                            <div class="text-sm text-gray-500">
                                {{ item.created_at }}
                            </div>
                        </div>
                    </div>
                </div>
                <ShowMore
                    :text="item.content.replace(/(?:\\[rn]|[\r\n]+)+/g, '<br />')"
                    length="150"
                    text-class="mt-2 text-gray-500 text-sm" />
            </div>
            <button
                v-if="data.result.length > 1"
                class="text-left text-sm text-red-400 font-semibold hover:text-red-600 focus:text-red-600 focus-visible:outline-none focus-visible:underline"
                @click="showReview">
                {{ showReviewText }}
            </button>
        </div>
    </section>
</template>

<script>
import { onMounted, ref, toRefs, watch } from 'vue';
import UserReviewSkeleton from './skeleton/UserReviewSkeleton.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import ShowMore from './ShowMore.vue';

export default {
    components: { BaseIcon, ShowMore, UserReviewSkeleton },
    props: {
        data: {
            type: Object,
            default() {
                return {};
            },
            require: true,
        },
    },
    setup(props) {
        const { data } = toRefs(props);
        const showAllReview = ref(false);
        const reviews = ref();
        const showReviewText = ref('Show all reviews');
        const showReview = () => {
            if (data.value.isLoading) {
                return;
            }
            if (showAllReview.value) {
                reviews.value = data.value.result;
                showAllReview.value = false;
                showReviewText.value = 'Close reviews';
                return data.value.result;
            } else {
                reviews.value = data.value.result.slice(0, 1);
                showAllReview.value = true;
                showReviewText.value = 'Show all reviews';
                return data.value.result.slice(0, 1);
            }
        };
        console.log(props.data);
        onMounted(showReview);
        watch(
            () => props.data.result,
            (newData) => {
                if (newData) {
                    showAllReview.value = false;
                    showReview();
                }
            }
        );
        return {
            reviews,
            showReview,
            showReviewText,
        };
    },
};
</script>
