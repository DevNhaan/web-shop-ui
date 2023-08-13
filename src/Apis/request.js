import axios from 'axios';
import { logoutSuccess, setToken } from '../redux/Slide/AuthSlide';
import jwtDecode from 'jwt-decode';
import store from '../redux/store';

const httpRequest = (token, dispatch) => {
    const axiosJwt = axios.create({
        baseURL: 'http://localhost:8080/api/v1/',
        withCredentials: true,
    });
    if (!token) {
        return axiosJwt;
    }

    axiosJwt.interceptors.request.use(
        async (config) => {
            let updatedToken = token;

            if (token) {
                const decodedToken = jwtDecode(token);
                const expirationTime = decodedToken.exp * 1000;

                if (Date.now() > expirationTime) {
                    console.log('refresh token');
                    updatedToken = await refreshToken(dispatch);
                    // dispatch(setToken(token), { dispatch: false });
                }
            }

            config.headers['Authorization'] = `Bearer ${updatedToken}`;
            return config;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return axiosJwt;
};

const refreshToken = async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/get-new-token', { withCredentials: true });

        if (response.status === 401) store.dispatch(logoutSuccess);
        const newToken = response.data.content;

        dispatch(setToken(newToken));
        return newToken;
    } catch (error) {
        console.error('Error refreshing token:', error);
    }
};

export default httpRequest;
