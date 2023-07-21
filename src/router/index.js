import { Home, Login, Register, DetailsProduct, Cart } from '../Component/Page';
import { DefaultLayout, AuthLayout } from '../Component/Layout';
export const publicRoute = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/auth/login',
        component: Login,
        layout: AuthLayout,
    },
    {
        path: '/auth/register',
        component: Register,
        layout: AuthLayout,
    },
    {
        path: '/details/1',
        component: DetailsProduct,
    },
    {
        path: '/cart',
        component: Cart,
        layout: DefaultLayout,
    },
];
