import {
    DataGrid,
    GridColDef,
    GridColumnVisibilityModel,
    GridRowsProp,
    GridToolbar,
} from '@mui/x-data-grid';

interface IPaginationModel {
    page: number;
    pageSize: number;
}

interface IProps {
    rows: GridRowsProp;
    columns: GridColDef[];
    hiddenFields: GridColumnVisibilityModel;
}

const paginationModel: IPaginationModel = { page: 0, pageSize: 5 };

export const Table = ({ rows, columns, hiddenFields }: IProps) => {
    return (
        <DataGrid
            rows={rows}
            columnVisibilityModel={hiddenFields}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            disableRowSelectionOnClick
            // disableColumnFilter
            // disableColumnSelector
            disableDensitySelector
            slots={{
                toolbar: GridToolbar,
            }}
            slotProps={{
                toolbar: {
                    showQuickFilter: true,
                },
            }}
            sx={{ border: 0 }}
        />
    );
};
