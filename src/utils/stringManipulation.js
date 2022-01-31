/**
 * Check is the string is a letter,
 * that mean english alphabet not arabic, japanese, china or similar characters
 * @param {String} string The string need to be chacked
 * @returns {Boolean}
 */
export const isLetter = (string) => {
    return string.toLowerCase() != string.toUpperCase();
};

/**
 * Convert string to title case format
 * @param {String} string The string need to convert
 * @returns {String}
 */
export const titleCase = (string) => {
    if (!string) return;
    const capitalized = string.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    return capitalized;
};
