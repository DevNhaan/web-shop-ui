import { authSlide, productSlide, cartSlide, loadingSlide } from './Slide';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        auth: authSlide.reducer,
        product: productSlide.reducer,
        cart: cartSlide.reducer,
        loading: loadingSlide.reducer,
    },
});
export default store;
