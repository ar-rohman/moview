import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import RatingCount from '@/components/RatingCount.vue';

describe('Rating Count Component', () => {
    test('should render plural vote count', () => {
        const { getByText, html } = render(RatingCount, {
            props: {
                iconClass: 'w-10 h-10',
                textClass: 'text-bule-500',
                voteAverage: '7.8',
                voteCount: '100',
            },
        });
        const voteAverage = getByText('7.8');
        const voteCount = getByText('100 Votes');
        expect(voteAverage).toBeTruthy();
        expect(voteCount).toBeTruthy();
        expect(html()).toContain('w-10 h-10');
        expect(html()).toContain('text-bule-500');
    });
    test('should render exact one number behind comma at vote average', () => {
        const { getByText } = render(RatingCount, {
            props: {
                voteAverage: '4',
                voteCount: '15',
            },
        });
        const voteAverage = getByText('4.0');
        const voteCount = getByText('15 Votes');
        expect(voteAverage).toBeTruthy();
        expect(voteCount).toBeTruthy();
    });
    test('should render singular vote count', () => {
        const voteAverage = 6.767687;
        const { getByText } = render(RatingCount, {
            props: {
                voteAverage: voteAverage,
                voteCount: '1',
            },
        });
        const vote = Number.parseFloat(voteAverage).toFixed(1);
        const voteCount = getByText('1 Vote');
        expect(getByText(vote)).toBeTruthy();
        expect(voteCount).toBeTruthy();
    });
});
