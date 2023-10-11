import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { request } from '~/Untils/request';

const allProductsSlide = createSlice({
    name: 'allProducts',
    initialState: {
        products: [],
        productPerpage: 10,
        currentPage: 1,
        error: false,
        isloading: false,
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
        onNavigateNext: (state) => {
            state.currentPage++;
        },
        onNavigatePrev: (state) => {
            state.currentPage--;
        },
        onChangePerpage: (state, action) => {
            state.productPerpage = action.payload;
        },
        onChangePage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isloading = false;
            });
    },
});
export const fetchAllProduct = createAsyncThunk('allProducts/fetchAllProduct', async () => {
    const res = await request.get('products');
    return res.data.content;
});

export default allProductsSlide;
export const { getProductsSuccess, getProductsFailure, onNavigateNext, onNavigatePrev, onChangePerpage, onChangePage } =
    allProductsSlide.actions;
