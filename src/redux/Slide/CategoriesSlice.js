import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const categoriesSlide = createSlice({
    name: 'categories',
    initialState: {
        categories: [],
        error: false,
        isloading: false,
    },
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload;
            state.error = false;
        },
        getCategoriesFails: (state) => {
            state.categories = null;
            state.error = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.isloading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                console.log(action.payload);
                state.categories = action.payload;
                state.isloading = false;
            });
    },
});

export const fetchCategories = createAsyncThunk('fetchCategories', async (axiosJwt) => {
    const res = await axiosJwt.get('categories');
    console.log(res.data.content);
    return res.data.content;
});

export default categoriesSlide;
export const { getCategories, getCategoriesFails } = categoriesSlide.actions;
