import defaults from '@/utils/defaults';
import { timeFromNow } from '@/utils/date';
import { starCalculation } from '@/utils/misc';
import { isImageExist, checkIfImageFromExternalLink } from '@/utils/image';
import avatarImage from '@/assets/images/avatar.svg';

export const reviewResource = (data) => {
    const result = data.map((item) => {
        return {
            id: item.id,
            name: item.author_details.name || item.author_details.username,
            avatar: checkIfImageFromExternalLink(item.author_details.avatar_path)
                ? item.author_details.avatar_path.substring(1)
                : isImageExist({
                      firstImage: item.author_details.avatar_path,
                      secondImage: null,
                      thirdImage: avatarImage,
                      imageSize: defaults.profileSize,
                  }),
            rating: item.author_details.rating,
            content: item.content,
            created_at: timeFromNow(item.created_at),
            star: starCalculation(item.author_details.rating),
        };
    });
    return result;
};
