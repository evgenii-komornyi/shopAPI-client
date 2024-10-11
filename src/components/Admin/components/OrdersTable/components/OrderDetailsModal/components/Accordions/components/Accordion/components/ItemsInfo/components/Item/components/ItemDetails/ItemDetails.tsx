import { Face3Outlined, FaceOutlined } from '@mui/icons-material';
import {
    HoverImage,
    ImageContainer,
    ItemImage,
    ItemRow,
    TextContainer,
} from '../../../../../../../../styles/Accordions.styles';
import { IOrderItem } from '../../../../../../../../../../../../../../../../interfaces/entities/IOrderItem.interface';
import { ReactElement } from 'react';
import { formatPrice } from '../../../../../../../../../../../../../../../../helpers/price.helper';
import { Chip, Tooltip, Typography } from '@mui/material';
import { capitalizeFirstLetterOfEachWordInString } from '../../../../../../../../../../../../../../../../helpers/string.helper';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

const ICON_BY_SEX: Record<string, ReactElement> = {
    male: <FaceOutlined />,
    female: <Face3Outlined />,
};

interface IProps {
    item: IOrderItem;
}

export const ItemDetails = ({
    item: { sex, quantity, itemPrice, fileName, typeName, itemName },
}: IProps) => {
    return (
        <ItemRow>
            <TextContainer>
                <Typography>
                    {capitalizeFirstLetterOfEachWordInString(itemName)}
                </Typography>
                <Tooltip title={sex}>{ICON_BY_SEX[sex]}</Tooltip>
            </TextContainer>
            <TextContainer>
                <Chip label={quantity} variant="outlined" color="primary" />
            </TextContainer>
            <TextContainer>
                <Typography>{typeName}</Typography>
            </TextContainer>
            <TextContainer>
                <Typography>{formatPrice(itemPrice)}</Typography>
            </TextContainer>
            <ImageContainer>
                <ItemImage
                    src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${typeName?.toLowerCase()}/${fileName}`}
                    alt={itemName}
                />
                <HoverImage
                    src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${typeName?.toLowerCase()}/${fileName}`}
                    alt={itemName}
                />
            </ImageContainer>
        </ItemRow>
    );
};
