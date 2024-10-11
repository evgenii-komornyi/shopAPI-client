import { FieldTypes } from '../enums/FieldTypes.enum';

export interface FieldConfig {
    editable: boolean;
    type:
        | FieldTypes.NUMBER
        | FieldTypes.STRING
        | FieldTypes.SINGLE_SELECT
        | FieldTypes.DATE_TIME
        | FieldTypes.DATE;
    valueOptions?: string[];
}

type FilterTypeByFieldName = Record<string, FieldConfig>;

export const HIDDEN_FIELDS: string[] = [
    'clientId',
    'addressId',
    'orderStatusId',
    'deliveryPrice',
];

export const FILTER_TYPE_BY_FIELD_NAME: FilterTypeByFieldName = {
    id: { editable: false, type: FieldTypes.NUMBER },
    orderStatus: {
        editable: false,
        type: FieldTypes.SINGLE_SELECT,
    },
    orderDate: { editable: false, type: FieldTypes.DATE },
    deliveryComment: { editable: false, type: FieldTypes.STRING },
    deliveryType: { editable: false, type: FieldTypes.SINGLE_SELECT },
    uOrderId: { editable: false, type: FieldTypes.STRING },
};
