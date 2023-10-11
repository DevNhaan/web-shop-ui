import {
    Home,
    Login,
    Register,
    DetailsProduct,
    Cart,
    Profile,
    CheckoutDetails,
    Address,
    OrderComfirm,
    MyOrder,
    Discover,
    Searching,
} from '../Component/Page';
import { AuthLayout } from '../Component/Layout';
export const publicRoute = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/discover',
        component: Discover,
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
    },
    {
        path: '/checkout',
        component: CheckoutDetails,
    },
    {
        path: '/user-address',
        component: Address,
    },
    {
        path: '/order-comfirm',
        component: OrderComfirm,
    },
    {
        path: '/my-order',
        component: MyOrder,
    },
    {
        path: '/searching',
        component: Searching,
        children: [{ patch: ':keyword', component: Searching }],
    },
    {
        path: 'categories',
        children: [{ path: ':category' }],
    },
];
