import { ModeOutlined } from '@mui/icons-material';
import { GridColumnHeaderParams } from '@mui/x-data-grid';

export const EditableHeaderIcon = (params: GridColumnHeaderParams) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            {params.colDef.headerName}
            {params.colDef.editable && (
                <ModeOutlined
                    fontSize="small"
                    sx={{
                        ml: 8,
                        color: '#747477',
                    }}
                />
            )}
        </div>
    );
};
