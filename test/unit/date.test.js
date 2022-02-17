import { describe, expect, it } from 'vitest';
import { timeFromNow, minuteToHour } from '@/utils/date';

describe('Date - Time From Now', () => {
    it('should return now', () => {
        const date = new Date(Date.now());
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('now');
    });
    it('should return sekarang', () => {
        const date = new Date(Date.now());
        const language = 'id';
        const result = timeFromNow(date, language);
        expect(result).eq('sekarang');
    });
    it('should return 1 minute ago', () => {
        const date = new Date(Date.now() - 1 * 60 * 1000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('1 minute ago');
    });
    it('should return 59 seconds ago', () => {
        const date = new Date(Date.now() - 59 * 1000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('59 seconds ago');
    });
    it('should return 1 menit yang lalu', () => {
        const date = new Date(Date.now() - 1 * 60 * 1000);
        const language = 'id';
        const result = timeFromNow(date, language);
        expect(result).eq('1 menit yang lalu');
    });
    it('should return 1 hour ago', () => {
        const date = new Date(Date.now() - 1 * 60 * 60 * 1000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('1 hour ago');
    });
    it('should return yesterday', () => {
        const date = new Date(Date.now() - 1 * 24 * 60 * 60 * 1000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('yesterday');
    });
    it('should return last month', () => {
        const date = new Date(Date.now() - (365 / 12) * 24 * 60 * 60 * 1000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('last month');
    });
    it('should return last year', () => {
        const date = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('last year');
    });
    it('should return undefined', () => {
        const date = 'test string';
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).toBeUndefined();
    });
});

describe('Date - Minute To Hour', () => {
    it('should return 1 hr 1 min', () => {
        const minute = '61';
        const result = minuteToHour(minute);
        expect(result).eq('1 hr 1 min');
    });
    it('should return 1 hr 5 mins', () => {
        const minute = '65';
        const result = minuteToHour(minute);
        expect(result).eq('1 hr 5 mins');
    });
    it('should return 1 hr', () => {
        const minute = '60';
        const result = minuteToHour(minute);
        expect(result).eq('1 hr');
    });
    it('should return 59 mins', () => {
        const minute = '59';
        const result = minuteToHour(minute);
        expect(result).eq('59 mins');
    });
    it('should return 1 min', () => {
        const minute = '1';
        const result = minuteToHour(minute);
        expect(result).eq('1 min');
    });
    it('should return undefined', () => {
        const minute = 'test string';
        const result = minuteToHour(minute);
        expect(result).toBeUndefined();
    });
    it('should return undefined', () => {
        const minute = -1;
        const result = minuteToHour(minute);
        expect(result).toBeUndefined();
    });
    it('should return 5 hrs', () => {
        const minute = 300;
        const result = minuteToHour(minute);
        expect(result).eq('5 hrs');
    });
});
