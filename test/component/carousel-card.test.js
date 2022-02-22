import { shallowMount, enableAutoUnmount } from '@vue/test-utils';
import { describe, expect, it, afterEach } from 'vitest';
import CarouselCard from '@/components/CarouselCard.vue';

describe.skip('CarouselCard.vue', () => {
    enableAutoUnmount(afterEach);
    const longItemSlot = `
        <div id="carousel-card-test-id" class="flex overflow-auto">
            <div class="h-80 w-80 min-w-[20rem]" v-for="i in 10" :key="i"></div>
        </div>
        `;
    const shortItemSlot = `
        <div id="carousel-card-test-id" class="flex">
            <div class="h-20 w-20"></div>
        </div>
        `;

    it('render component', () => {
        const wrapper = shallowMount(CarouselCard, {
            slots: {
                default: longItemSlot,
            },
        });
        expect(wrapper.find('#carousel-card-test-id').exists()).toBeTruthy();
        expect(wrapper.vm.arrivedLeft).toBeTruthy();
        expect(wrapper.vm.arrivedRight).toBeFalsy();
        expect(wrapper.vm.noOffset).toBeFalsy();
        expect(wrapper.find('[data-test=carousel-card-button-right]').exists()).toBeTruthy();
        expect(wrapper.find('[data-test=carousel-card-button-left]').exists()).toBeFalsy();
    });
    it.skip('should slide to left or right', async () => {
        const wrapper = shallowMount(CarouselCard, {
            slots: {
                default: longItemSlot,
            },
        });
        expect(wrapper.vm.arrivedLeft).toBe(true);
        expect(wrapper.vm.arrivedRight).toBe(false);
        expect(wrapper.vm.noOffset).toBe(false);
        const buttonRight = wrapper.find('[data-test=carousel-card-button-right]');
        await buttonRight.trigger('click');
        await wrapper.vm.$nextTick(() => {
            expect(wrapper.find('[data-test=carousel-card-button-left]').exists()).toBeTruthy();
        });
    });
    it.skip('should not show arrow left and right button', async () => {
        const wrapper = shallowMount(CarouselCard, {
            slots: {
                default: shortItemSlot,
            },
        });
        expect(wrapper.find('#carousel-card-test-id').exists()).toBeTruthy();
        await wrapper.vm.scrollTo('left');
        expect(wrapper.html()).toBe('true');
        expect(wrapper.find('[data-test=carousel-card-button-left]').exists()).toBeFalsy();
        expect(wrapper.find('[data-test=carousel-card-button-right]').exists()).toBeFalsy();
    });
});
