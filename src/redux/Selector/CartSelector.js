import { createSelector } from '@reduxjs/toolkit';

export const getCartItem = (state) => state.cart?.cartItem;
export const getNumberOfItem = (state) => state.cart?.numberOfItem;

export const getTotal = (state) => state.cart?.total;
export const getCartItemUserSelect = (state) => state.cart.cartItemUserSelect;

export const getTotalNotDiscount = (state) =>
    state.cart.cartItemUserSelect.reduce((init, id) => {
        const currentItem = state.cart.cartItem.find((item) => item.id === id);
        return init + currentItem.product.price * currentItem.quantity;
    }, 0);
export const getPriceSaving = createSelector(getTotal, getTotalNotDiscount, (total, totalNotDiscount) => {
    return totalNotDiscount - total;
});
