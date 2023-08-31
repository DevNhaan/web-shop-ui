import { createSlice } from '@reduxjs/toolkit';

const orderSlide = createSlice({
    name: 'order',
    initialState: {
        order: [],
    },
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        addOrder: (state, action) => {
            state.order.push(action.payload);
        },
        resetOrder: (state) => {
            state.order = [];
        },
    },
});

export default orderSlide;
export const { setOrder, addOrder, resetOrder } = orderSlide.actions;
