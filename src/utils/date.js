/**
 * Convert date to elapsed time, e.g 1 minute ago
 * @param {Date} date Date to be converted
 * @param {String} language The language used
 * @returns {String}
 */
export const timeFromNow = (date, language = 'en') => {
    const fromDate = new Date(date);
    const difference = fromDate - new Date();
    const units = {
        year: 1000 * 60 * 60 * 24 * 365,
        month: 1000 * 60 * 60 * 24 * (365 / 12),
        day: 1000 * 60 * 60 * 24,
        hour: 1000 * 60 * 60,
        minute: 1000 * 60,
        second: 1000,
    };
    const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });
    let result;
    for (const unit in units) {
        if (Math.abs(difference) > units[unit] || unit === 'second') {
            result = rtf.format(Math.round(difference / units[unit]), unit);
            break;
        }
    }
    return result;
};
