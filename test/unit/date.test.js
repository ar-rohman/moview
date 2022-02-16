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
    it('should return 60 seconds ago', () => {
        const date = new Date(Date.now() - 60000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('60 seconds ago');
    });
    it('should return 59 seconds ago', () => {
        const date = new Date(Date.now() - 59000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('59 seconds ago');
    });
    it('should return 60 detik yang lalu', () => {
        const date = new Date(Date.now() - 60000);
        const language = 'id';
        const result = timeFromNow(date, language);
        expect(result).eq('60 detik yang lalu');
    });
    it('should return 60 minutes ago', () => {
        const date = new Date(Date.now() - 3600000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('60 minutes ago');
    });
    it('should return 24 hours ago', () => {
        const date = new Date(Date.now() - 86400000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('24 hours ago');
    });
    it('should return 1 month ago', () => {
        const date = new Date(Date.now() - 2628000000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('30 days ago');
    });
    it('should return 12 months ago', () => {
        const date = new Date(Date.now() - 31536000000);
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('12 months ago');
    });
    it('should return 2 years ago', () => {
        const date = '2020';
        const language = 'en';
        const result = timeFromNow(date, language);
        expect(result).eq('2 years ago');
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
