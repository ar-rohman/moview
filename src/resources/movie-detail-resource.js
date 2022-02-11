import { isImageExist } from '@/utils/image';
import defaults from '@/utils/defaults';
import { minuteToHour } from '@/utils/date';
import posterImage from '@/assets/images/poster.png';
import backdropImage from '@/assets/images/backdrop.png';

export const movieDetailResource = (data) => {
    return {
        id: data.id,
        title: data.title,
        original_title: data.original_title === data.title ? '' : data.original_title,
        overview: data.overview,
        release: data.release_date ? data.release_date.split('-')[0] : '',
        runtime: minuteToHour(data.runtime),
        vote_average: data.vote_average,
        vote_count: data.vote_count,
        genres: data.genres.length ? data.genres : null,
        poster: isImageExist({
            firstImage: data.poster_path,
            secondImage: data.backdrop_path,
            thirdImage: posterImage,
            imageSize: defaults.sidebarPosterSize,
        }),
        backdrop: isImageExist({
            firstImage: data.backdrop_path,
            secondImage: data.poster_path,
            thirdImage: backdropImage,
            imageSize: defaults.backdropSize,
        }),
        adult: data.adult,
    };
};
