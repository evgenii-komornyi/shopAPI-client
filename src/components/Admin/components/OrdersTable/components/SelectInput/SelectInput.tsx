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
            sx={{ height: 1 }}
            native
            autoFocus
        >
            {statuses.map(({ id, status }) => (
                <option key={id} value={status}>
                    {id} {status}
                </option>
            ))}
        </Select>
    );
};
