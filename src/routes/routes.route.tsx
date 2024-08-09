import { ReactElement, memo } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { MainPage } from '../pages/main.page';
import { AboutUsPage } from '../pages/about-us.page';
import { ContactsPage } from '../pages/contacts.page';
import { CategoriesListPage } from '../pages/categories-list.page';
import { CategoryDetailsPage } from '../pages/category-details.page';
import { ItemDetailsPage } from '../pages/item-details.page';
import { CheckoutPage } from '../pages/checkout.page';
import { RegisterCompletionPage } from '../pages/register-completion.page';
import { ThankYouPage } from '../pages/thankyou.page';
import { AuthPage } from '../pages/auth.page';
import { VerificationPage } from '../pages/verification.page';
import { OrdersPage } from '../pages/orders.page';
import { ProfilePage } from '../pages/profile.page';

interface IRoute {
    path: string;
    page: ReactElement;
}

const routes: IRoute[] = [
    { path: '/', page: <MainPage /> },
    { path: '/auth', page: <AuthPage /> },
    { path: '/collection', page: <CategoriesListPage /> },
    { path: '/about-us', page: <AboutUsPage /> },
    { path: '/contacts', page: <ContactsPage /> },
    { path: '/collection/:typeName', page: <CategoryDetailsPage /> },
    { path: '/collection/:typeName/item/:itemId', page: <ItemDetailsPage /> },
    { path: '/checkout', page: <CheckoutPage /> },
    { path: '/orders/:clientId', page: <OrdersPage /> },
    { path: '/profile', page: <ProfilePage /> },
    { path: '/register-complete', page: <RegisterCompletionPage /> },
    { path: '/verify_email/:emailToken', page: <VerificationPage /> },
    {
        path: '/thankyou/:clientId/:orderId',
        page: <ThankYouPage />,
    },
    {
        path: '/thankyou/:orderId',
        page: <ThankYouPage />,
    },
    { path: '*', page: <Navigate to="/" /> },
];

const NonMemoizedRoutes = () => {
    return (
        <Routes>
            {routes.map(({ path, page }, index) => (
                <Route key={index} path={path} element={page} />
            ))}
        </Routes>
    );
};

export const MainRoutes = memo(NonMemoizedRoutes);
