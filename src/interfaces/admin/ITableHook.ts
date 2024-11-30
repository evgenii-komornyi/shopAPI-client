import {
    GridColDef,
    GridColumnVisibilityModel,
    GridRowsProp,
} from '@mui/x-data-grid';

export interface ITableHook {
    rows: GridRowsProp;
    columns: GridColDef[];
    hiddenFields: GridColumnVisibilityModel;
}
