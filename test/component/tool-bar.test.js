import { shallowMount, enableAutoUnmount } from '@vue/test-utils';
import { describe, expect, test, afterEach } from 'vitest';
import ToolBar from '@/components/header/ToolBar.vue';

describe('ToolBar.vue', () => {
    enableAutoUnmount(afterEach);

    test.todo('should change the theme', async () => {
        const wrapper = shallowMount(ToolBar);
        await wrapper.find('button').trigger('click');
    });
});
