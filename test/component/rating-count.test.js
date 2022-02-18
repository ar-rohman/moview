import { mount, enableAutoUnmount } from '@vue/test-utils';
import { describe, expect, test, afterEach } from 'vitest';
import RatingCount from '@/components/RatingCount.vue';

describe('RatingCount.vue', () => {
    enableAutoUnmount(afterEach);

    test('should render plural vote count', () => {
        const wrapper = mount(RatingCount, {
            props: {
                iconClass: 'w-10 h-10',
                textClass: 'text-bule-500',
                voteAverage: '7.8',
                voteCount: '100',
            },
        });
        expect(wrapper.find('p.pr-2').text()).toBe('7.8');
        expect(wrapper.find('p.pl-2').text()).toBe('100 Votes');
        expect(wrapper.find('div.text-bule-500').exists()).toBeTruthy();
        expect(wrapper.find('svg.w-10.h-10').exists()).toBeTruthy();
    });
    test('should render exact one number behind comma at vote average', () => {
        const wrapper = mount(RatingCount, {
            props: {
                voteAverage: '4',
                voteCount: '15',
            },
        });
        expect(wrapper.find('p.pr-2').text()).toBe('4.0');
        expect(wrapper.find('p.pl-2').text()).toBe('15 Votes');
    });
    test('should render singular vote count', () => {
        const voteAverage = 6.767687;
        const wrapper = mount(RatingCount, {
            props: {
                voteAverage: voteAverage,
                voteCount: '1',
            },
        });
        const vote = Number.parseFloat(voteAverage).toFixed(1);
        expect(wrapper.find('p.pr-2').text()).toBe(vote);
        expect(wrapper.find('p.pl-2').text()).toBe('1 Vote');
    });
    test('should not render vote count', () => {
        const voteAverage = 6.767687;
        const wrapper = mount(RatingCount, {
            props: {
                voteAverage: voteAverage,
            },
        });
        const vote = Number.parseFloat(voteAverage).toFixed(1);
        expect(wrapper.find('p.pr-2').text()).toBe(vote);
        expect(wrapper.find('p.pl-2').exists()).toBeFalsy();
    });
    test('should not render the component', () => {
        const wrapper = mount(RatingCount, {
            props: {
                voteAverage: null,
            },
        });
        expect(wrapper.find('div').exists()).toBeFalsy();
        expect(wrapper.find('p.pr-2').exists()).toBeFalsy();
        expect(wrapper.find('p.pl-2').exists()).toBeFalsy();
    });
});
