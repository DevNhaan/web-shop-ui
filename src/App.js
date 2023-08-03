import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router';
import { DefaultLayout, Loading } from './Component/Layout';
import { useSelector } from 'react-redux';
function App() {
    const isLoading = useSelector((state) => state.loading.isLoading);
    console.log(isLoading);
    return (
        <BrowserRouter>
            <div className="App background-gray">
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
            {isLoading ? <Loading /> : ''}
        </BrowserRouter>
    );
}

export default App;
