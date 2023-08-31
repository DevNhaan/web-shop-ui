import { createSelector } from '@reduxjs/toolkit';

export const currentUserSelector = (state) => state.auth.login?.currentUser?.userDetail;
export const inforUserSelector = createSelector(currentUserSelector, (currentUser) => {
    if (currentUser) {
        const { status, roles, ...infor } = currentUser;
        return infor;
    }
});
export const defaultAddressSelector = createSelector(currentUserSelector, (currentUser) => {
    const defaultAddress = currentUser?.userAddress.find((address) => address.defaultAddress);
    return defaultAddress;
});
export const isLogin = (state) => state.auth.login?.isLogin;

export const getToken = (state) => state.auth.login?.currentUser?.token;
export const getUserId = (state) => state.auth.login?.currentUser?.userDetail?.id;
