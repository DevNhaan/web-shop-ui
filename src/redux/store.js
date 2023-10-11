import { authSlide, allProductsSlide, cartSlide, loadingSlide, orderSlide, categoriesSlide } from './Slide';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import TokenMiddleware from './Middleware/TokenMiddleware';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart'],
};

const rootReducer = combineReducers({
    auth: authSlide.reducer,
    categories: categoriesSlide.reducer,
    allProducts: allProductsSlide.reducer,
    cart: cartSlide.reducer,
    loading: loadingSlide.reducer,
    order: orderSlide.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
export default store;
