import { IFile } from './IFile.interface';

enum Sex {
    'male',
    'female',
}

export interface IItem {
    actualPrice: number;
    description: string;
    discount: number;
    fileName: string;
    itemId: number;
    itemName: string;
    isAvailable: boolean;
    isInStock: boolean;
    regularPrice: number;
    sex: Sex;
    typeDescription: string | undefined;
    typeId: number | undefined;
    typeName: string | undefined;
    files: IFile[] | undefined;
    type: string | undefined;
}
