import axios from 'axios';
import { registerFailure, logoutSuccess } from '../redux/Slide/AuthSlide';
import { cartLogout } from '../redux/Slide/CartSlide';

export const register = async (registerDto, dispatch, navigate) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', registerDto);
        console.log(response);
        dispatch(registerFailure(response.data.content));
        navigate('/');
    } catch (e) {
        dispatch(registerFailure(e.response.data));
    }
};

export const logout = async (dispatch, navigate) => {
    try {
        const axiosLogout = axios.create({
            withCredentials: true,
        });
        const response = await axiosLogout.post('http://localhost:8080/api/v1/auth/logout');
        dispatch(logoutSuccess());
        dispatch(cartLogout());
        navigate('/auth/login');

        if (response.status === 401) return null;

        return response.data.content;
    } catch (e) {
        console.log(e);
    }
};
