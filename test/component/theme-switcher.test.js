import { shallowMount, enableAutoUnmount } from '@vue/test-utils';
import { describe, expect, test, afterEach } from 'vitest';
import ThemeSwitcher from '@/components/header/ThemeSwitcher.vue';

describe('ThemeSwitcher.vue', () => {
    enableAutoUnmount(afterEach);

    test.todo('should change the theme', async () => {
        const wrapper = shallowMount(ThemeSwitcher);
        await wrapper.find('button').trigger('click');
    });
});
