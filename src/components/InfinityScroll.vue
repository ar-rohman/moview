<template>
    <BackToPervious :text="pageTitle" tool-bar search-bar />
    <div class="font-semibold md:text-lg mb-3">{{ pageTitle }}</div>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        <template v-for="item in dataList.result" :key="item.id">
            <MainCard
                :id="item.id"
                :title="item.title"
                :vote-average="item.vote_average"
                :vote-count="item.vote_count"
                :image="item.image"
                card-width="w-full" />
        </template>
    </div>
    <BackToTop />
</template>

<script>
import { onMounted, onUnmounted, watch, reactive, ref, toRefs } from 'vue';
import API from '@/services/api';
import { mainCardResource } from '@/resources/card-resource';
import MainCard from '@/components/MainCard.vue';
import BackToTop from '@/components/BackToTop.vue';
import BackToPervious from './header/BackToPervious.vue';

export default {
    components: {
        MainCard,
        BackToTop,
        BackToPervious,
    },
    props: {
        pageTitle: {
            type: String,
            required: true,
        },
        serviceUrl: {
            type: String,
            required: true,
        },
        query: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    setup(props) {
        const page = ref(1);
        const totalPage = ref(null);
        const bottom = ref(false);
        const result = [];
        const dataList = reactive({ result });
        const { serviceUrl, query } = toRefs(props);
        const loadMore = () => {
            if (page.value < totalPage.value && bottom.value) {
                page.value += 1;
                getDataList();
            }
        };
        const scrolling = () => {
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop;
            const cardHeight = 224; // 224px
            if (scrollHeight === clientHeight && scrollTop === 0) {
                bottom.value = true;
                loadMore();
            } else if (scrollTop + clientHeight + cardHeight >= scrollHeight) {
                bottom.value = true;
            } else {
                bottom.value = false;
            }
        };
        const getDataList = async () => {
            const param = {
                ...query.value,
                page: page.value,
            };
            const result = await API.apiClient(serviceUrl.value, param);
            const { results } = result.data;
            page.value = result.data.page;
            totalPage.value = result.data.total_pages;
            const data = mainCardResource(results);
            dataList.result = [...dataList.result, ...data];
            bottom.value = false;
            scrolling();
        };
        onMounted(getDataList);
        onMounted(() => {
            window.addEventListener('scroll', scrolling);
        });
        onUnmounted(() => {
            window.removeEventListener('scroll', scrolling);
        });
        watch(bottom, (bottom, prevBottom) => {
            if (bottom) {
                loadMore();
            }
            bottom = !bottom;
        });

        return { dataList };
    },
};
</script>
