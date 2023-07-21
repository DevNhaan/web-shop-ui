import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router';
import { DefaultLayout } from './Component/Layout';
function App() {
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
        </BrowserRouter>
    );
}

export default App;
