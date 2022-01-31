<template>
    <div class="font-semibold md:text-lg mb-3">{{ pageTitle }}</div>
    <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 zh-screen zoverflow-y-auto">
        <template v-for="item in dataList.result" :key="item.id">
            <main-card
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
// import { useRoute } from 'vue-router';
import { onMounted, onUnmounted, watch, reactive, ref, toRefs } from 'vue';
import API from '../services/API';
import { isLetter } from '../utils/stringManipulation';
import MainCard from '../components/MainCard.vue';
import BackToTop from '../components/BackToTop.vue';

export default {
    components: {
        MainCard,
        BackToTop,
    },
    props: {
        pageTitle: {
            type: String,
            required: true,
            // default: 'All List',
        },
        serviceUrl: {
            type: String,
            required: true,
            // default: null,
        },
        query: {
            type: Object,
            // required: true,
            default() {
                return {};
            },
        },
    },
    setup(props) {
        const page = ref(1);
        const totalPage = ref();
        const bottom = ref(false);
        const result = [];
        const dataList = reactive({ result });
        const { serviceUrl, query } = toRefs(props);
        const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
        // const route = useRoute();
        // const pageTitle = () => {
        //     const secondWordTitle = isNaN(route.params.id) ? route.params.id : route.params.param;
        //     const title = titleCase(`${route.params.category} ${secondWordTitle}`);
        //     return title;
        // };
        const loadMore = () => {
            if (page.value < totalPage.value && bottom.value) {
                page.value += 1;
                getDataList();
            }
        };
        const scrolling = (e) => {
            const scrollHeight = e.target.body.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop;
            const cardHeight = 256; // 256px
            if (scrollTop + clientHeight + cardHeight >= scrollHeight) {
                bottom.value = true;
            } else {
                bottom.value = false;
            }
        };
        const isImageExist = (firstImage, secondImage) => {
            if (firstImage) {
                return `${imageBaseUrl}original${firstImage}`;
            } else if (secondImage) {
                return `${imageBaseUrl}original${secondImage}`;
            } else {
                return 'https://via.placeholder.com/1280x320/a83244/808080?text=Dummy Image';
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
            const data = results.map((item) => {
                return {
                    id: item.id,
                    title: isLetter(item.original_title) ? item.original_title : item.title,
                    image: isImageExist(item.poster_path, item.backdrop_path),
                    vote_count: item.vote_count,
                    vote_average: item.vote_average,
                };
            });
            dataList.result = [...dataList.result, ...data];
            bottom.value = false;
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
