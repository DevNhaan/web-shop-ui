import axios from 'axios';
import { loginSuccess, loginFailure, registerSuccess, registerFailure } from '../redux/Slide/AuthSlide';
import { isLoading, isNotLoading } from '../redux/Slide/LoadingSlide';

export const login = async (loginDto, dispatch, navigate) => {
    // dispatch(isLoading);
    try {
        const axiosForLogin = axios.create();
        const response = await axiosForLogin.post('http://localhost:8080/api/v1/auth/login', loginDto);
        dispatch(loginSuccess(response.data.content));
        navigate('/');
    } catch (e) {
        dispatch(loginFailure(e.response.data));
    }
};

export const register = async (registerDto, dispatch, navigate) => {
    dispatch(isLoading);
    try {
        const axiosRegister = axios.create();
        const response = await axiosRegister.post('http://localhost:8080/api/v1/auth/register', registerDto);
        console.log(response);
        dispatch(registerFailure(response.data.content));
        navigate('/');
    } catch (e) {
        dispatch(registerFailure(e.response.data));
    }
    dispatch(isNotLoading);
};
