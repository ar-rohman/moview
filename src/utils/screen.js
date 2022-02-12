/**
 * Detects is the current browser is a touch screen device.
 * @returns {Boolean}
 */
export const isTouchScreen = () => {
    return (
        'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    );
};
