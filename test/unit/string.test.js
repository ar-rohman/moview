import { describe, expect, it } from 'vitest';
import { titleCase, turncateString } from '@/utils/string';

describe('String - Title Case', () => {
    it('should return title case format', () => {
        const string = 'titLe cAse';
        const result = titleCase(string);
        expect(result).eq('Title Case');
    });
    it('Number should return undefined', () => {
        const string = 123;
        const result = titleCase(string);
        expect(result).toBeUndefined();
    });
    it('Empty string should return undefined', () => {
        const string = '';
        const result = titleCase(string);
        expect(result).toBeUndefined();
    });
});

describe('String - Turncate String', () => {
    it('should turncate the string at 10 caracter', () => {
        const string = 'This is a very long string';
        const length = 10;
        const result = turncateString(string, length);
        expect(result).eq('This is a ...');
    });
    it('should return same as provided string', () => {
        const string = 'This is a very long string';
        const length = 26;
        const result = turncateString(string, length);
        expect(result).eq(string);
    });
    it('should return empty string', () => {
        const string = '';
        const length = 10;
        const result = turncateString(string, length);
        expect(result).eq('');
    });
});
