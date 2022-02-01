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
