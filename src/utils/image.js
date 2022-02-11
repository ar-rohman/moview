import defaults from './defaults';

/**
 * Check is image not null
 * @param {Object} { firstImage, secondImage, thirdImage, imageSize }
 * @returns {String}
 */
export const isImageExist = ({ firstImage, secondImage, thirdImage, imageSize }) => {
    if (firstImage) {
        return `${defaults.imageBaseUrl}${imageSize}${firstImage}`;
    } else if (secondImage) {
        return `${defaults.imageBaseUrl}${imageSize}${secondImage}`;
    } else {
        return thirdImage;
    }
};

/**
 * Check if image is from external link
 * @param {String} image url of image
 * @returns {Boolean}
 */
export const checkIfImageFromExternalLink = (image) => {
    if (!image) return false;
    if (image.includes('/http')) {
        return true;
    } else {
        return false;
    }
};
