import { Skeleton } from '@mui/material';

import useItemsStore from '../../stores/useItems.store';

import { Image, ImageDetailsContainer } from './image-details.styles';

import { IFile } from '../../interfaces/IFile.interface';

interface IProps {
    files: IFile[];
    itemType: string;
}

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const ImageDetails = ({ files, itemType }: IProps) => {
    const isLoaded = useItemsStore(state => state.isItemByIdLoaded);

    return (
        <ImageDetailsContainer>
            {isLoaded ? (
                <Image
                    src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${itemType.toLowerCase()}/${files[0].fileName}`}
                    alt={itemType + '-' + files[0].fileName}
                />
            ) : (
                <Skeleton variant="rectangular" width="100%" height={500} />
            )}
        </ImageDetailsContainer>
    );
};
