import { Skeleton } from '@mui/material';

import useFishStore from '../../stores/useFish.store';

import { Image, ImageDetailsContainer } from './image-details.styles';

import { IFile } from '../../interfaces/IFile.interface';
interface IProps {
    files: IFile[];
    fishType: string;
}

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const ImageDetails = (props: IProps) => {
    const isLoaded = useFishStore(state => state.isFishByIdLoaded);
    const { files, fishType } = props;

    return (
        <ImageDetailsContainer>
            {isLoaded ? (
                <Image
                    src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${fishType.toLowerCase()}/${files[0].fileName}`}
                    alt={fishType + '-' + files[0].fileName}
                />
            ) : (
                <Skeleton variant="rectangular" width="100%" height={500} />
            )}
        </ImageDetailsContainer>
    );
};
