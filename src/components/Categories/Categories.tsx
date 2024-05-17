import { Grid } from '@mui/material';
import { CategoryItem } from './components/CategoryItem';

import useCategoriesStore from '../../stores/useCategories.store';

import { ICategory } from '../../interfaces/ICategory.interface';

export const Categories = () => {
    const categories: ICategory[] = useCategoriesStore(
        state => state.categories
    );

    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            {categories.map(categoryItem => (
                <Grid
                    key={categoryItem.typeId}
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    textAlign="center"
                >
                    <CategoryItem item={categoryItem} />
                </Grid>
            ))}
        </Grid>
    );
};
