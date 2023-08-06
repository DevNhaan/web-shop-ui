import axios from 'axios';
import jwtDecode from 'jwt-decode';

const httpRequest = (token) => {
    const axiosJwt = axios.create({
        baseURL: 'http://localhost:8080/api/v1/',
    });
    axiosJwt.interceptors.request.use(
        (config) => {
            if (token === undefined) return config;
            const decodedToken = jwtDecode(token);
            const expirationTime = decodedToken.exp * 1000;

            console.log('expriration tim: ', expirationTime, 'now ', Date.now());

            // config.method = method;
            if (Date.now() < expirationTime) config.headers['Authorization'] = `Bearer ${token}`;

            // config.url = path;
            return config;
        },
        function (error) {
            return Promise.reject(error);
        },
    );

    return axiosJwt;
};

export default httpRequest;
