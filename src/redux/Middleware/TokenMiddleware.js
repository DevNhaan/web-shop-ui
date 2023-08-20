import jwtDecode from 'jwt-decode';
import { logoutSuccess, setToken } from '../Slide/AuthSlide';
import axios from 'axios';

const TokenMiddleware = (store) => (next) => (action) => {
    const currentState = store.getState();
    if (!currentState.auth.login.isLogin) return next(action);

    const { token } = currentState.auth.login?.currentUser;

    if (token) {
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000;

        if (Date.now() > expirationTime) {
            console.log('token expired!!');
            const refreshToken = async () => {
                const axiosJwt = axios.create({
                    baseURL: 'http://localhost:8080/api/v1/',
                    withCredentials: true,
                });

                try {
                    const response = await axiosJwt.post(`auth/get-new-token`);

                    if (response.status === 401) store.dispatch(logoutSuccess);

                    console.log('update token by refresh token: ', response.data.content);
                    store.dispatch(setToken(response.data.content));
                } catch (error) {
                    console.error('Error refreshing token:', error);
                }
            };

            refreshToken();
        }
    }

    return next(action);
};

export default TokenMiddleware;
