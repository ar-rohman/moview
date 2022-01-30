<template>
    <div class="font-semibold mt-10 mb-2">Reviews ({{ data.length }})</div>
    <div v-if="data.length > 0" class="flex flex-col gap-y-8 h-60 overflow-y-auto">
        <div v-for="item in data" :key="item.id">
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
            <div class="mt-2 line-clamp-3 text-gray-500 text-sm">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script>
import { timeFromNow } from '../utils/date';
import { starIcon, starHalfIcon } from '@/components/icon';
export default {
    props: {
        data: {
            type: Array,
            default() {
                return [];
            },
            require: true,
        },
    },
    setup() {
        return { timeFromNow, starIcon, starHalfIcon };
    },
};
</script>
