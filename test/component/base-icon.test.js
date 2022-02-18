import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import icon from '@/components/icon/icons.js';

describe('BaseIcon.vue', () => {
    test('render the appropriate icon', async () => {
        const iconName = 'chevronLeft';
        const color = 'text-gray-500';
        const size = 'w-10 h-10';
        const wrapper = mount(BaseIcon, {
            props: { name: iconName, color: color, size: size },
        });
        const d = icon[iconName].split('|')[0];
        expect(wrapper.find('svg').exists()).toBeTruthy();
        expect(wrapper.find('path').exists()).toBeTruthy();
        expect(wrapper.find('svg').attributes('class')).toContain(size);
        expect(wrapper.find('path').attributes('d')).toBe(d);
        expect(wrapper.find('path').attributes('class')).toBe(color);
    });
    test('should not throw error when icon does not exist', async () => {
        const iconName = 'nonExistIcon';
        const wrapper = mount(BaseIcon, {
            props: { name: iconName },
        });
        expect(wrapper.find('svg').exists()).toBeTruthy();
        expect(wrapper.find('path').exists()).toBeFalsy();
    });
});
