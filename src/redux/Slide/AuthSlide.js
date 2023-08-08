import { createSlice } from '@reduxjs/toolkit';

const authSlide = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: {},
            isLogin: false,
            error: false,
        },
        register: {
            success: false,
            error: false,
        },
        contentError: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.login.isLogin = true;
            state.login.error = false;
            state.login.currentUser = action.payload;

            state.contentError = null;
        },
        loginFailure: (state, action) => {
            state.login.isLogin = false;
            state.login.error = true;
            state.contentError = action.payload;
        },
        registerSuccess: (state) => {
            state.register.success = true;
            state.register.error = false;
            state.contentError = null;
            state.login.isLogin = true;
        },
        registerFailure: (state, action) => {
            state.register.success = false;
            state.register.error = true;
            state.contentError = action.payload;
            state.login.isLogin = false;
        },
        logoutSuccess: (state) => {
            state.login.isLogin = false;
            state.login.currentUser = {};
        },
    },
});
export default authSlide;
export const { loginSuccess, loginFailure, registerSuccess, registerFailure, logoutSuccess } = authSlide.actions;
