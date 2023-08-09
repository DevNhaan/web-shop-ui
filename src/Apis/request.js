import axios from 'axios';
import jwtDecode from 'jwt-decode';

const httpRequest = (token) => {
    if (token === undefined) return null;
    const axiosJwt = axios.create({
        baseURL: 'http://localhost:8080/api/v1/',
    });
    axiosJwt.interceptors.request.use(
        (config) => {
            const decodedToken = jwtDecode(token);
            const expirationTime = decodedToken.exp * 1000;

            console.log('expriration tim: ', expirationTime, 'now ', Date.now());
            if (Date.now() < expirationTime) config.headers['Authorization'] = `Bearer ${token}`;

            return config;
        },
        function (error) {
            return Promise.reject(error);
        },
    );

    return axiosJwt;
};

export default httpRequest;
