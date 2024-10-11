import { Select, SelectChangeEvent } from '@mui/material';
import useAdminStore from '../../../../../../stores/useAdmin.store';

interface IProps {
    currentStatus: string;
    setCurrentStatus: (value: string) => void;
}

export const SelectInput = ({ currentStatus, setCurrentStatus }: IProps) => {
    const { statuses } = useAdminStore(state => state);

    const handleChange = ({ target: { value } }: SelectChangeEvent) => {
        setCurrentStatus(value);
    };

    return (
        <Select
            value={currentStatus}
            label="Status"
            onChange={handleChange}
            size="small"
            native
            sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255, .5)',
                },
                '&:focus .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255, .2)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(255,255,255, .2)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'transparent',
                },
                '&.MuiSelect-select:focus': {
                    backgroundColor: 'rgba(255,255,255, .2)',
                },
            }}
        >
            {statuses.map(({ id, status }) => (
                <option key={id} value={status}>
                    {status}
                </option>
            ))}
        </Select>
    );
};
