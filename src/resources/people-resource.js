import { isImageExist } from '@/utils/image';
import defaults from '@/utils/defaults';
import avatarImage from '@/assets/images/avatar.svg';

export const peopleDetailResource = (data) => {
    return {
        id: data.id,
        name: data.name,
        also_known_as: data.also_known_as.length ? data.also_known_as : null,
        known_for_department: data.known_for_department,
        image: isImageExist({
            firstImage: data.profile_path,
            secondImage: null,
            thirdImage: avatarImage,
            imageSize: defaults.profileBigSize,
        }),
        place_of_birth: data.place_of_birth || '-',
        birthday: data.birthday || '-',
        deathday: data.deathday || '-',
        biography: data.biography,
    };
};

export const peopleListResource = (data) => {
    const result = data.map((item) => {
        return {
            id: item.id,
            name: item.name,
            image: isImageExist({
                firstImage: item.profile_path,
                secondImage: null,
                thirdImage: avatarImage,
                imageSize: defaults.profileSize,
            }),
            known_for: item.known_for_department ? item.known_for_department : item.character || '',
        };
    });
    return result;
};
