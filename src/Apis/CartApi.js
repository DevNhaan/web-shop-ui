import { isLoading, isNotLoading } from '../redux/Slide/LoadingSlide';
import { setCart } from '../redux/Slide/CartSlide';

export const getCartByUserId = async (userId, dispatch, httpRequest) => {
    if (httpRequest === null) return null;
    try {
        dispatch(isLoading);
        const response = await httpRequest.get(`cart/${userId}`);

        console.log(response.data.content);

        dispatch(setCart(response.data?.content));
        dispatch(isNotLoading);
    } catch (error) {
        console.log(error);
        dispatch(isNotLoading);
    }
};
export const addProductToCart = async (data, dispatch, httpRequest) => {
    if (httpRequest === null) return null;
    try {
        dispatch(isLoading);
        const response = await httpRequest.post('cart/add-product', { data });

        console.log(response.data.content);
    } catch (error) {
        console.log(error);
    }
};
