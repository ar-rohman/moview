import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import BaseCarousel from '@/components/carousel/BaseCarousel.vue';
import image from '@/assets/images/backdrop.png';
import { useRouter, useRoute } from 'vue-router';

describe('BaseCarousel.vue', () => {
    const props = {
        data: {
            carousel: [
                {
                    id: 1,
                    image: image,
                    title: 'Slide 1',
                },
                {
                    id: 2,
                    image: image,
                    title: 'Slide 2',
                },
                {
                    id: 3,
                    image: image,
                    title: 'Slide 3',
                },
            ],
        },
        navigation: true,
        pagination: true,
    };

    it('should render component', () => {
        const wrapper = shallowMount(BaseCarousel, {
            props: props,
        });
        expect(wrapper.find('div').exists()).toBeTruthy();
        expect(wrapper.find('carousel-slide-stub').exists()).toBeTruthy();
        expect(wrapper.find('carousel-pagination-stub').exists()).toBeTruthy();
        expect(wrapper.find('carousel-navigation-stub').exists()).toBeTruthy();
    });

    it('should slide to next or previous image', async () => {
        const wrapper = shallowMount(BaseCarousel, {
            props: props,
        });
        const carouselSlide = wrapper.find('carousel-slide-stub');
        await carouselSlide.trigger('prev');
        expect(wrapper.vm.slideDirection).toBe('left');
        expect(wrapper.vm.currentSlide).toBe(2);

        await carouselSlide.trigger('next');
        expect(wrapper.vm.slideDirection).toBe('right');
        expect(wrapper.vm.currentSlide).toBe(0);
    });
});
