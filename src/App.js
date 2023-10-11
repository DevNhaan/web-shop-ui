/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { publicRoute } from './router';
import { DefaultLayout } from './Component/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getToken, getUserId } from './redux/Selector/AuthSelector';
import { getCartByUserId } from './Apis/CartApi';
import httpRequest from './Apis/request';
import { getAllOrder } from './Apis/OrderApi';
import { fetchCategories } from './redux/Slide/CategoriesSlice';
import { fetchAllProduct } from './redux/Slide/AllProductSlice';

function App() {
    const dispatch = useDispatch();
    const userId = useSelector(getUserId);
    const token = useSelector(getToken);
    let axiosJwt = httpRequest(token, dispatch);

    useEffect(() => {
        if (token) {
            getCartByUserId(userId, dispatch, axiosJwt);
            getAllOrder(userId, dispatch, axiosJwt);
        }
        dispatch(fetchCategories(axiosJwt));

        dispatch(fetchAllProduct());
    }, []);

    const renderRoute = (route) => {
        const Component = route.component;
        let Layout = DefaultLayout;
        if (route.layout) Layout = route.layout;
        const routeElement = (
            <Layout>
                <Component />
            </Layout>
        );
        if (route.children) {
            return (
                <Route key={route.path} path={route.path} element={<Outlet />}>
                    <Route index element={routeElement} />
                    {route.children.map((child) => renderRoute(child))}
                </Route>
            );
        }

        return <Route key={route.path} path={route.path} element={routeElement} />;
    };

    return (
        <BrowserRouter>
            <div className="background-white">
                <Routes>
                    {publicRoute.map((route) => renderRoute(route))}
                    <Route path="*" element={<p> 404 page</p>} />
                </Routes>
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </BrowserRouter>
    );
}

export default App;
