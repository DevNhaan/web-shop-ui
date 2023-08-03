import { createSlice } from '@reduxjs/toolkit';

const cartSlide = createSlice({
    name: 'cart',
    initialState: {
        cartItem: [],
        total: 0,
        numberOfItem: 0,
    },
    reducers: {
        getCart: (state, action) => {
            state.cartItem = action.payload?.cartItem;
            state.total = action.payload?.total;
            state.numberOfItem = action.payload?.quantity;
        },
        getTotal: (state) => {
            state.total = state.cartItem.reduce((init, current) => {
                return init + current.price * current.quantity;
            }, 0);
        },
        addItem: (state, action) => {
            state.cartItem.push(action.payload);
            state.numberOfItem += action.payload.quantity;
            state.total = state.cartItem.reduce((init, current) => {
                return init + current.price * current.quantity;
            }, 0);
        },
        removeItem: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);
            state.total = state.cartItem.reduce((init, current) => {
                return init + current.price * current.quantity;
            }, 0);
        },
    },
});

export default cartSlide;
export const { getCart, getTotal, addItem, removeItem } = cartSlide.actions;
