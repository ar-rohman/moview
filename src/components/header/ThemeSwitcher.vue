<template>
    <button
        class="bg-white/50 rounded-full p-2 hover:bg-white/70 dark:bg-slate-900/30 dark:hover:bg-slate-900/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
        @click="showDropdown = !showDropdown">
        <BaseIcon v-if="isDark" name="moonOutline" />
        <BaseIcon v-else name="sunOutline" />
    </button>
    <ul
        v-if="showDropdown"
        ref="dropdownElement"
        class="absolute top-[50px] right-0 w-40 shadow-md dark:shadow-none rounded-md ring-1 ring-inset ring-gray-200 dark:ring-slate-50/20 bg-white dark:bg-slate-900 select-none font-semibold">
        <li
            class="flex items-center w-full cursor-pointer rounded-t-md px-4 py-2 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            :class="[storageTheme === 'light' ? 'bg-red-500 dark:bg-red-600 text-white' : '']"
            tabindex="0"
            @click="setTheme('light')"
            @keyup.enter="setTheme('light')">
            <BaseIcon name="sunOutline" />
            <p class="ml-2">Light</p>
        </li>
        <li
            class="flex items-center w-full hover:-mr-[2px] cursor-pointer px-4 py-2 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            :class="[storageTheme === 'dark' ? 'bg-red-500 dark:bg-red-600 text-white' : '']"
            tabindex="0"
            @click="setTheme('dark')"
            @keyup.enter="setTheme('dark')">
            <BaseIcon name="moonOutline" />
            <p class="ml-2">Dark</p>
        </li>
        <li
            class="flex items-center w-full cursor-pointer rounded-b-md px-4 py-2 hover:bg-red-600 dark:hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            :class="[storageTheme === null ? 'bg-red-500 dark:bg-red-600 text-white' : '']"
            tabindex="0"
            @click="setTheme(null)"
            @keyup.enter="setTheme(null)">
            <BaseIcon name="monitorOutline" />
            <p class="ml-2">System</p>
        </li>
    </ul>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useDark, usePreferredDark, useStorage, onClickOutside } from '@vueuse/core';
import BaseIcon from '@/components/icon/BaseIcon.vue';

export default {
    components: { BaseIcon },
    setup() {
        const isDark = useDark();
        const storageTheme = useStorage('theme', null);
        const systemTheme = usePreferredDark();
        const showDropdown = ref(false);
        const dropdownElement = ref();

        const loadTheme = () => {
            if (storageTheme.value) {
                isDark.value = storageTheme.value === 'dark';
            }
        };

        const setTheme = (theme) => {
            if (theme === 'light') {
                isDark.value = false;
            } else if (theme === 'dark') {
                isDark.value = true;
            } else {
                isDark.value = systemTheme.value;
            }
            storageTheme.value = theme;
            showDropdown.value = false;
        };

        onClickOutside(dropdownElement, () => (showDropdown.value = false));
        onMounted(loadTheme);
        return { isDark, setTheme, showDropdown, dropdownElement, storageTheme };
    },
};
</script>
