import { createSlice } from '@reduxjs/toolkit';

const productSlide = createSlice({
    name: 'product',
    initialState: {
        products: [],
        error: false,
    },
    reducers: {
        getProductsSuccess: (state, action) => {
            state.products = action.payload;
            state.error = false;
        },
        getProductsFailure: (state) => {
            state.products = null;
            state.error = true;
        },
    },
});
export default productSlide;
export const { getProductsSuccess, getProductsFailure } = productSlide.actions;
