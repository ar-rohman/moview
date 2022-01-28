/**
 * Check is the string is a letter,
 * that mean english alphabet not arabic, japanese, china or similar characters
 * @param {String} string The string need to be chacked
 * @returns {Boolean}
 */
export const isLetter = (string) => {
    return string.toLowerCase() != string.toUpperCase();
};

// const stringFormat = (string) => {
//     if (!string) return;
//     // Replace underscore to space
//     const replaceString = string.replace(/_/g, ' ');
//     // Capitalized each first word
//     const capitalized = replaceString.replace(
//         /\w\S*/g,
//         (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
//     );
//     return capitalized;
// };
