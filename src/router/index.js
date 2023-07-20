import { Home, Login, DetailsProduct } from '../Component/Page';
import { DefaultLayout, LoginLayout } from '../Component/Layout';
export const publicRoute = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/login',
        component: Login,
        layout: LoginLayout,
    },
    {
        path: '/details/1',
        component: DetailsProduct,
    },
];
