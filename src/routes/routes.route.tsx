import { Routes, Route } from 'react-router-dom';

import { MainPage } from '../pages/main.page';
import { AboutUsPage } from '../pages/about-us.page';
import { ContactsPage } from '../pages/contacts.page';
import { CategoriesListPage } from '../pages/categories-list.page';
import { CategoryDetailsPage } from '../pages/category-details.page';
import { ItemDetailsPage } from '../pages/item-details.page';
import { CheckoutPage } from '../pages/checkout.page';
import { ThankYouPage } from '../pages/thankyou.page';
import { ReactElement } from 'react';

interface IRoute {
    path: string;
    page: ReactElement;
}

const routes: IRoute[] = [
    { path: '/', page: <MainPage /> },
    { path: '/collection', page: <CategoriesListPage /> },
    { path: '/about-us', page: <AboutUsPage /> },
    { path: '/contacts', page: <ContactsPage /> },
    { path: '/collection/:typeName', page: <CategoryDetailsPage /> },
    { path: '/collection/:typeName/item/:itemId', page: <ItemDetailsPage /> },
    { path: '/checkout', page: <CheckoutPage /> },
    {
        path: '/thankyou/:clientId/:orderId',
        page: <ThankYouPage />,
    },
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
