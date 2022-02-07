/**
 * Check is the string is a letter,
 * that mean english alphabet not arabic, japanese, china or similar characters
 * TODO - add specific language eg jp /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/
 * @param {String} string The string need to be chacked
 * @returns {Boolean}
 */
// export const isLetter = (string) => {
//     return string.toLowerCase() != string.toUpperCase();
// };

/**
 * Convert string to title case format
 * @param {String} string The string need to convert
 * @returns {String}
 */
export const titleCase = (string) => {
    if (!string) return;
    // Replace underscore to space
    // const replaceString = string.replace(/_/g, ' ');
    // Capitalized each first word
    const capitalized = string.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    );
    return capitalized;
};

/**
 * Turncate string to the determined length
 * @param {String} string text to be turncate
 * @param {Number} length maximal length text
 * @returns {String}
 */
export const turncateString = (string, length = null) => {
    if (length && string.length > length) {
        const trimmedString = string.substring(0, length);
        return `${trimmedString}...`;
    }
    return string;
};
