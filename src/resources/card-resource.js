import { isImageExist } from '@/utils/image';
import defaults from '@/utils/defaults';
import posterImage from '@/assets/images/poster.png';

export const mainCardResource = (data) => {
    const result = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            image: isImageExist({
                firstImage: item.poster_path,
                secondImage: item.backdrop_path,
                thirdImage: posterImage,
                imageSize: defaults.mainPosterSize,
            }),
            vote_count: item.vote_count,
            vote_average: item.vote_average,
        };
    });
    return result;
};

export const sidebarCardResource = (data) => {
    const result = data.map((item) => {
        return {
            id: item.id,
            title: item.title,
            image: isImageExist({
                firstImage: item.poster_path,
                secondImage: item.backdrop_path,
                thirdImage: posterImage,
                imageSize: defaults.sidebarPosterSize,
            }),
            vote_average: item.vote_average,
            genre_id: item.genre_ids,
            genre_name: item.genre_name,
        };
    });
    return result;
};
