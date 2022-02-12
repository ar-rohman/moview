import { defineStore } from 'pinia';
import { getCountryCodeByUserIP } from '@/services/country-service';

export const useCountryCodeStore = defineStore('country', {
    state: () => ({
        countryCode: null,
    }),

    actions: {
        async getCountryCode() {
            if (!this.countryCode) {
                this.countryCode = await getCountryCodeByUserIP();
            }
            return this.countryCode;
        },
    },
});
