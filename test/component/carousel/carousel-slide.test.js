import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import CarouselSlide from '@/components/carousel/CarouselSlide.vue';
import image from '@/assets/images/backdrop.png';
import { useRouter, useRoute } from 'vue-router';

describe('CarouselSlide.vue', () => {
    const global = {
        provide: {
            detailLink: '/movie/detail',
            currentSlide: 0,
        },
        stubs: ['router-link', 'router-view'],
    };
    const props = { id: 1, title: 'Slide Title', slide: image, direction: 'right', index: 0 };

    it('should render component', () => {
        const wrapper = mount(CarouselSlide, {
            props: props,
            global: global,
        });
        expect(wrapper.find('img').exists()).toBeTruthy();
        expect(wrapper.find('img').attributes('src')).toBe(image);
        const title = wrapper.findAll('div')[4];
        expect(title.exists()).toBeTruthy();
        expect(title.text()).toBe('Slide Title');
    });
    it('should have emitted events', async (done) => {
        const wrapper = mount(CarouselSlide, {
            props: props,
            global: global,
        });
        await wrapper.find('img').trigger('mouseover');
        await wrapper.vm.$nextTick(() => {
            expect(wrapper.emitted()).toHaveProperty('mouseover');
            done();
        });

        await wrapper.find('img').trigger('mouseout');
        await wrapper.vm.$nextTick(() => {
            expect(wrapper.emitted()).toHaveProperty('mouseout');
            done();
        });
    });
    it('should go to detail page', async () => {
        vi.mock('vue-router', () => ({
            useRoute: vi.fn(),
            useRouter: vi.fn(() => ({
                push: () => {},
            })),
        }));

        useRoute.mockImplementationOnce(() => ({
            params: { id: 1 },
        }));

        const push = vi.fn();
        useRouter.mockImplementationOnce(() => ({
            push,
        }));

        const wrapper = mount(CarouselSlide, {
            props: props,
            global: global,
        });
        await wrapper.find('img').trigger('click');
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith({ path: '/movie/detail/1' });
    });
});
