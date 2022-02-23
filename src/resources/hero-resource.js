import { isImageExist } from '@/utils/image';
import defaults from '@/utils/defaults';

export const heroResource = (data) => {
    const result = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            image: isImageExist({
                firstImage: item.backdrop_path,
                secondImage: null,
                thirdImage: null,
                imageSize: defaults.heroSize,
            }),
        };
    });
    return result;
};

// export const sidebarCardResource = (data) => {
//     const result = data.map((item) => {
//         return {
//             id: item.id,
//             title: item.title,
//             image: isImageExist({
//                 firstImage: item.poster_path,
//                 secondImage: item.backdrop_path,
//                 thirdImage: posterImage,
//                 imageSize: defaults.sidebarPosterSize,
//             }),
//             vote_average: item.vote_average,
//             genre_id: item.genre_ids,
//             genre_name: item.genre_name,
//         };
//     });
//     return result;
// };
