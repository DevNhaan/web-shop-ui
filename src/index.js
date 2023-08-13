import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './Component/GlobalStyle';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Loading } from './Component/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <GlobalStyle>
            <PersistGate loading={<Loading />} persistor={persistor}>
                <App />
            </PersistGate>
        </GlobalStyle>
    </Provider>,
);
