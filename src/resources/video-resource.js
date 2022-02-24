export const videoResource = (data) => {
    let key = null;
    const youtube = data.filter((item) => item.site.toLowerCase() === 'youtube');
    const type = youtube.filter((item) => item.type.toLowerCase() === 'trailer');
    const official = type.filter((item) => item.official);

    if (official.length) {
        key = official.find((item) => item.official);
    } else if (type.length) {
        key = type.find((item) => item.type.toLowerCase() === 'trailer');
    } else {
        key = data.find((item) => item.site.toLowerCase() === 'youtube');
    }

    const result = key ? key.key : null;
    return result;
};
