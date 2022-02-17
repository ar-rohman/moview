import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import icon from '@/components/icon/icons.js';

describe('Icon Component', () => {
    test('render the appropriate icon', async () => {
        const iconName = 'chevronLeft';
        const { html } = render(BaseIcon, {
            props: { name: iconName, color: 'text-gray-500', size: 'w-10 h-10' },
        });
        const d = icon[iconName].split('|')[0];
        expect(html()).toContain(d);
        expect(html()).toContain('text-gray-500');
        expect(html()).toContain('w-10 h-10');
    });
});
