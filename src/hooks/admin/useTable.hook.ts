import {
    GridColDef,
    GridColumnVisibilityModel,
    GridRowsProp,
} from '@mui/x-data-grid';
import { ITableHook } from '../../interfaces/admin/ITableHook';
import { useCallback, useEffect, useState } from 'react';
import useAdminStore from '../../stores/useAdmin.store';
import {
    FieldConfig,
    FILTER_TYPE_BY_FIELD_NAME,
    HIDDEN_FIELDS,
} from '../../data/tables-config';
import { FieldTypes } from '../../enums/FieldTypes.enum';

export const useTable = <T extends object>(dataArray: T[]): ITableHook => {
    const [columns, setColumns] = useState<GridColDef[]>([]);
    const [rows, setRows] = useState<GridRowsProp>([]);
    const [hiddenFields, setHiddenFields] = useState<GridColumnVisibilityModel>(
        {}
    );

    const formatHeader = useCallback((key: string): string => {
        let formattedKey = key;

        if (key === 'id') {
            formattedKey = 'ID';
        }

        if (key === 'uOrderId') {
            formattedKey = 'Order number';
        }

        return `${formattedKey[0].toUpperCase()}${formattedKey.slice(1)}`;
    }, []);

    const { statuses } = useAdminStore(state => state);

    const getField = useCallback(
        (key: string): Partial<GridColDef> => {
            const fieldConfig: FieldConfig = FILTER_TYPE_BY_FIELD_NAME[key];
            if (!fieldConfig) {
                return {
                    editable: false,
                    type: FieldTypes.STRING,
                };
            }

            if (key === 'orderDate') {
                return {
                    editable: fieldConfig.editable,
                    type: fieldConfig.type,
                    valueGetter: (params: string) => {
                        return params ? new Date(params) : null;
                    },
                };
            }

            if (key === 'orderStatus') {
                return {
                    editable: fieldConfig.editable,
                    type: FieldTypes.SINGLE_SELECT,
                    valueOptions: statuses.map(item => item.status),
                };
            }

            return {
                editable: fieldConfig.editable,
                type: fieldConfig.type,
            };
        },
        [statuses]
    );

    useEffect(() => {
        if (dataArray.length > 0) {
            const objectKeys: string[] = Object.keys(dataArray[0]);

            const keysToColumns: GridColDef[] = objectKeys.map(key => ({
                field: key,
                headerName: formatHeader(key),
                width: key === 'id' ? 50 : 200,
                ...getField(key),
            }));

            const newHiddenFields: GridColumnVisibilityModel = {};
            objectKeys.forEach(key => {
                if (HIDDEN_FIELDS.includes(key)) {
                    newHiddenFields[key] = false;
                }
            });

            setHiddenFields(prevState => ({
                ...prevState,
                ...newHiddenFields,
            }));
            setColumns(keysToColumns);
            setRows(dataArray);
        }
    }, [dataArray]);

    return { rows, columns, hiddenFields };
};
