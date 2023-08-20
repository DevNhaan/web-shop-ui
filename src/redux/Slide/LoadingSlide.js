import { createSlice } from '@reduxjs/toolkit';

const loading = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
    },
    reducers: {
        isLoading: (state) => {
            state.isLoading = true;
        },
        isNotLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export default loading;
export const { isLoading, isNotLoading } = loading.actions;
