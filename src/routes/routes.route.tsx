import { Routes, Route } from 'react-router-dom';

import { MainPage } from '../pages/main.page';
import { AboutUsPage } from '../pages/about-us.page';
import { ContactsPage } from '../pages/contacts.page';
import { CollectionListPage } from '../pages/collection-list.page';
import { CollectionDetailsPage } from '../pages/collection-details.page';
import { ItemDetailsPage } from '../pages/item-details.page';
import { CheckoutPage } from '../pages/checkout.page';

const routes = [
    { path: '/', page: <MainPage /> },
    { path: '/collection', page: <CollectionListPage /> },
    { path: '/about-us', page: <AboutUsPage /> },
    { path: '/contacts', page: <ContactsPage /> },
    { path: '/collection/:typeName', page: <CollectionDetailsPage /> },
    { path: '/collection/:typeName/item/:itemId', page: <ItemDetailsPage /> },
    { path: '/checkout/:clientId', page: <CheckoutPage /> },
];

export const MainRoutes = () => {
    return (
        <Routes>
            {routes.map(({ path, page }, index) => (
                <Route key={index} path={path} element={page} />
            ))}
        </Routes>
    );
};
