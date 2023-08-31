import { createSelector } from '@reduxjs/toolkit';

export const getCartItem = (state) => state.cart?.cartItem;
export const getNumberOfItem = (state) => state.cart?.numberOfItem;

export const getTotal = (state) => state.cart.total;
export const getCartItemUserSelect = (state) => state.cart?.cartItemUserSelect;

export const getTotalNotDiscount = (state) => state.cart?.totalOriginal;

export const getPriceSaving = createSelector(getTotal, getTotalNotDiscount, (total, totalNotDiscount) => {
    return totalNotDiscount - total;
});

export const getCartItemByUserSelect = createSelector(getCartItemUserSelect, getCartItem, (cartItemsId, cartItem) => {
    return cartItem.filter((item) => cartItemsId.includes(item.id));
});

export const getNumberOfAllItem = createSelector(getCartItem, (cartItem) => {
    return cartItem.length;
});
