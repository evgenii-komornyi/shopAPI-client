import { Grid } from '@mui/material';
import { CollectionItem } from './collection-item.component';

import useCollectionStore from '../../stores/useCollection.store';

interface ICollection {
    typeId: number;
    typeName: string;
    fileName: string;
    typeDescription: string | undefined;
}

export const Collection = () => {
    const collection: ICollection[] = useCollectionStore(
        state => state.collection
    );

    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            {collection.map(item => (
                <Grid
                    key={item.typeId}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    textAlign="center"
                >
                    <CollectionItem item={item} />
                </Grid>
            ))}
        </Grid>
    );
};
