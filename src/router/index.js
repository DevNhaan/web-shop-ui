import { Home, Login, Register, DetailsProduct, Cart, Profile, CheckoutDetails, Address } from '../Component/Page';
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
        path: '/details/:id',
        component: DetailsProduct,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/my-cart',
        component: Cart,
        layout: DefaultLayout,
    },
    {
        path: '/checkout',
        component: CheckoutDetails,
        layout: DefaultLayout,
    },
    {
        path: '/user-address',
        component: Address,
        layout: DefaultLayout,
    },
];
