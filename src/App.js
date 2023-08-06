import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router';
import { DefaultLayout, Loading } from './Component/Layout';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    const isLoading = useSelector((state) => state.loading.isLoading);
    console.log(isLoading);
    return (
        <BrowserRouter>
            <div className="background-white">
                <Routes>
                    {publicRoute.map((route) => {
                        const Component = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) Layout = route.layout;

                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
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
            {isLoading ? <Loading /> : ''}
        </BrowserRouter>
    );
}

export default App;
