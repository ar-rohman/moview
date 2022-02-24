<template>
    <div class="flex justify-between h-[60px] z-10 mb-4" :class="[styles, customClass]">
        <template v-if="!isShowSearch">
            <div class="flex gap-x-4 items-center">
                <button
                    class="bg-white/50 rounded-full p-2 hover:bg-white/70 focus:bg-white zpx-4 zsm:px-10"
                    @click="router.back()">
                    <BaseIcon name="arrowBack" />
                </button>
                <div class="line-clamp-1 font-semibold">{{ textToDisplay }}</div>
            </div>
            <div class="flex gap-x-6 items-center">
                <SearchBar v-if="searchBar" @show-search-input="tiggerShowSearch" />
                <ToolBar v-if="toolBar" />
            </div>
        </template>
        <template v-else>
            <div class="w-full flex items-center">
                <button class="mr-4" @click="isShowSearch = false">
                    <BaseIcon name="arrowBack" />
                </button>
                <SearchInput autofocus />
            </div>
        </template>
    </div>
</template>

<script>
import { onMounted, onUnmounted, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import ToolBar from './ToolBar.vue';
import SearchBar from './SearchBar.vue';
import SearchInput from './SearchInput.vue';

export default {
    components: {
        BaseIcon,
        ToolBar,
        SearchBar,
        SearchInput,
    },
    props: {
        displayTextAfter: {
            type: [Number, String],
            default: 5,
        },
        displayBackgroundAfter: {
            type: [Number, String],
            default: 5,
        },
        text: {
            type: String,
            default: null,
        },
        styles: {
            type: String,
            default: '',
        },
        toolBar: {
            type: Boolean,
            default: false,
        },
        searchBar: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const router = useRouter();
        const isShowSearch = ref(false);
        const { displayTextAfter, displayBackgroundAfter, text } = toRefs(props);
        const customClass = ref(null);
        const textToDisplay = ref();

        const tiggerShowSearch = () => {
            isShowSearch.value = true;
        };
        const scrolling = () => {
            const htmlScroll = document.documentElement.scrollTop;
            if (htmlScroll > displayBackgroundAfter.value) {
                customClass.value = `bg-white border-b fixed top-0 max-w-screen-xl mx-auto w-full inset-x-0 px-4 sm:px-10`;
            } else {
                customClass.value = 'bg-transparent';
            }
            if (htmlScroll > displayTextAfter.value) {
                textToDisplay.value = text.value;
            } else {
                textToDisplay.value = null;
            }
        };
        onMounted(() => window.addEventListener('scroll', scrolling));
        onUnmounted(() => window.removeEventListener('scroll', scrolling));

        return {
            router,
            customClass,
            textToDisplay,
            isShowSearch,
            tiggerShowSearch,
        };
    },
};
</script>
