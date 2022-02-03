<template>
    <div class="font-semibold mt-10 mb-2">Reviews ({{ data.length }})</div>
    <div v-if="data.length" class="flex flex-col gap-y-8">
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
                                <div
                                    v-for="i in item.star.two_star"
                                    :key="i"
                                    class="h-4 w-4 text-yellow-400"
                                    v-html="starIcon"></div>
                            </template>
                            <template v-if="item.star.one_star">
                                <div class="h-4 w-4 text-yellow-400" v-html="starHalfIcon"></div>
                            </template>
                            <template v-if="item.star.zero_star">
                                <div
                                    v-for="i in item.star.zero_star"
                                    :key="i"
                                    class="h-4 w-4 text-slate-300"
                                    v-html="starIcon"></div>
                            </template>
                        </div>
                        <div class="text-sm text-gray-500">
                            {{ timeFromNow(item.created_at) }}
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
            v-if="data.length > 1"
            class="text-left text-red-400 font-semibold hover:text-red-500 text-sm"
            @click="showReview">
            {{ showReviewText }}
        </button>
    </div>
</template>

<script>
import { onMounted, ref, toRefs, watch } from 'vue';
import { timeFromNow } from '@/utils/date';
import { starIcon, starHalfIcon } from '@/components/icon';
import ShowMore from './ShowMore.vue';

export default {
    components: { ShowMore },
    props: {
        data: {
            type: Array,
            default() {
                return [];
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
            if (showAllReview.value) {
                reviews.value = data.value;
                showAllReview.value = false;
                showReviewText.value = 'Close reviews';
            } else {
                reviews.value = data.value.slice(0, 1);
                showAllReview.value = true;
                showReviewText.value = 'Show all reviews';
            }
        };
        onMounted(showReview);
        watch(
            () => props.data,
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
            timeFromNow,
            starIcon,
            starHalfIcon,
        };
    },
};
</script>
